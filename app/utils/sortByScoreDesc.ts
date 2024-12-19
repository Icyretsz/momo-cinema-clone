import { MovieType } from '../api/[[...route]]/moviesAPI'

export const sortByScoreDesc = (array : MovieType[]) => {
    return array.sort((a, b) => b.vote_average - a.vote_average);
};
