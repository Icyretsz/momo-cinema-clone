import {client} from "@/app/api/[[...route]]/hono";


const getMovies = async () => {
    const movies = await client.api.getMovies.$get()
    const data = await movies.json()
    return data
}

export default getMovies