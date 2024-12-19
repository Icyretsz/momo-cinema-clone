import {Hono} from "hono";

export interface MovieType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export const movies = new Hono()
    .get('/', async (c) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=vi-VN&page=1&region=vn&sort_by=vote_average.desc', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_AT}`,
                accept: 'application/json',
            }
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json()
        const results : MovieType[] = data.results

        return c.json(results)
    })