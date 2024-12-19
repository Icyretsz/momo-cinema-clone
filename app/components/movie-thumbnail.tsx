import React from 'react';
import getGenre from "@/app/hook/getGenre";

interface MovieThumbnailProps {
    rank: number,
    id: number,
    title: string,
    vote_average: number,
    release_date: string,
    thumbnail_url: string,
    genre_ids: number[],
    theme: 'light' | 'dark',
}

const MovieThumbnail = ({
                            rank,
                            id,
                            title,
                            thumbnail_url,
                            release_date,
                            vote_average,
                            genre_ids,
                            theme
                        }: MovieThumbnailProps) => {

    const genre = React.useMemo(() => getGenre(genre_ids), [genre_ids]);
    const genreList = genre.join(', ');

    return (
        <div
            className=" relative flex max-w-[201.6px] flex-none flex-col h-full items-start space-y-2 mr-[20px] truncate">
                <div className="relative h-auto overflow-hidden border-blend rounded-sm">
                    <img
                        className=" object-fill object-center transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        src={thumbnail_url}
                        alt="movie thumbnail"
                    />
                    {theme === 'dark' && <p className={`absolute bottom-[-5px] text-6xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'} drop-shadow-xl`}>{rank}</p>}
                </div>
            <div>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold`}>{title}</p>
                <div>
                    <p className="text-gray-400 text-xs">
                        {genreList}
                    </p>
                </div>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} flex items-center text-xs`}><img className='size-4' src='/star-icon.svg'
                                                                         alt='star'/>{vote_average}</p>
            </div>
        </div>

    );
};

export default MovieThumbnail;