import React, {useEffect, useState} from 'react';
import getMovies from '../hook/useGetMovies'
import {MovieType} from '../api/[[...route]]/moviesAPI'
import {sortByScoreDesc} from "@/app/utils/sortByScoreDesc";
import {getNowShowingMoviews, getUpcomingMovies} from "@/app/utils/date-categorizer";
import MoviesContainer from "@/app/components/movies-container";

const MovieShowcase = () => {
    const [nowShowing, setNowShowing] = useState<MovieType[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>([]);
    const [loadFinish, setFinish] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setNowShowing(sortByScoreDesc(getNowShowingMoviews(data)));
            setUpcomingMovies(getUpcomingMovies(data));
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        // Only set loadFinish to true if movies has at least one entry
        if (nowShowing.length > 0 && upcomingMovies.length > 0) {
            setFinish(true);
        }
    }, [nowShowing, upcomingMovies]);


    return (
        <>
            {loadFinish &&
                <>
                    <MoviesContainer nowShowing={nowShowing} isNowShowing={true}/>
                    <MoviesContainer nowShowing={upcomingMovies} isNowShowing={false}/>
                </>
            }
        </>
    );
};

export default MovieShowcase;