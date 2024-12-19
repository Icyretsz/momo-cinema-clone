import React from 'react';
import SparklesText from "@/components/ui/sparkles-text";
import MovieShowcaseContainer from "@/app/components/movie-showcase-container";
import {MovieType} from '../api/[[...route]]/moviesAPI'

interface NowShowingMoviesContainer {
    nowShowing: MovieType[]
}

const NowShowingMoviesContainer = ({nowShowing}: NowShowingMoviesContainer) => {
    return (
        <div
            className={`${"bg-[url('/now-showing-background.jpg')]"} h-[550px] scroll-margin-top bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14`}>
            <div className='flex flex-col mx-auto w-full h-full max-w-6xl px-5 md:px-8 lg:px-8'>
                <div className='mb-5 text-center md:mb-8'>
                    <SparklesText text="Phim sắp chiếu"
                                  sparklesCount={7}
                                  colors={{first: '#FFF700', second: '#FFF700'}}
                                  className='text-balance text-2xl font-bold sm:text-wrap lg:text-3xl text-white'/>
                </div>

                <MovieShowcaseContainer movies={nowShowing} theme='dark'/>
            </div>
        </div>
    );
};

export default NowShowingMoviesContainer;