import {genres} from "../components/constant"

type GenreType = {
    id: number;
    name: string;
} | undefined;

const getGenre = (genre_ids : number[]) => {
    const result : string[] = []
    for(let i = 0; i < genre_ids.length; i++){
        const matchedGenre : GenreType = genres.find((genre) => genre.id === genre_ids[i])
        if (matchedGenre){
            result[i] = matchedGenre.name
        }
    }
    return result
};

export default getGenre;