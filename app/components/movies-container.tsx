import React from 'react';
import SparklesText from "@/components/ui/sparkles-text";
import MovieShowcaseContainer from "@/app/components/movie-showcase-container";
import {MovieType} from '../api/[[...route]]/moviesAPI'

interface MoviesContainer {
    nowShowing: MovieType[],
    isNowShowing: boolean
}

const MoviesContainer = ({nowShowing, isNowShowing}: MoviesContainer) => {
    return (
        <div
            className={`${
                isNowShowing ? "bg-[url('/now-showing-background.jpg')] bg-black" : 'bg-white'
            } h-[550px] scroll-margin-top bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14`}
        >
            <div className='flex flex-col mx-auto w-full h-full max-w-6xl px-5 md:px-8 lg:px-8'>
                <div className='mb-5 text-center md:mb-8'>
                    {isNowShowing ? <SparklesText text="Phim đang chiếu"
                                                  sparklesCount={7}
                                                  colors={{first: '#FFF700', second: '#FFF700'}}
                                                  className='text-balance text-2xl font-bold sm:text-wrap lg:text-3xl text-white'/>
                    : <p className='text-balance text-2xl font-bold sm:text-wrap lg:text-3xl text-pink-600'>Phim sắp chiếu</p>
                    }
                </div>
                <MovieShowcaseContainer movies={nowShowing} theme={`${isNowShowing ? "dark" : "light"}`} />
            </div>
        </div>
    );
};

export default MoviesContainer;