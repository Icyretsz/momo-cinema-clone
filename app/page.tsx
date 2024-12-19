'use client'
import useSidebarExpandStore from "@/app/stores/sidebar-expand-store";
import Sidebar from "@/app/components/sidebar";
import PromoteBanner from "@/app/components/promote-banner";
import MovieShowcase from "@/app/components/movie-showcase";


export default function Home() {
    const {isSidebarExpanded} = useSidebarExpandStore()

    return (
        <div>
            {isSidebarExpanded && <div className='w-full h-screen lg:hidden top-[64px] fixed z-30'>
                 <Sidebar/>
            </div>}
            <div className='z-40'>
                <PromoteBanner/>
                <MovieShowcase/>
            </div>
        </div>
    );
}
