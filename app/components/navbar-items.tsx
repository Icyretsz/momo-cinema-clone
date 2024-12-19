import React from 'react';
import NavbarDropdownItem from "@/app/components/navbar-dropdown-item";
import {blogItems, cinemaItems, menuItems, scheduleItems} from "@/app/components/constant";
import {Button} from "antd";

const NavbarItems = () => {
    return (
        <>
            <NavbarDropdownItem items={menuItems} title={scheduleItems['title']}/>
            <NavbarDropdownItem items={cinemaItems['items']} title={cinemaItems['title']}/>
            <Button type='text'><a className='font-bold'>Phim chiếu</a></Button>
            <Button type='text'><a className='font-bold'>Review phim</a></Button>
            <Button type='text'><a className='font-bold'>Top phim</a></Button>
            <NavbarDropdownItem items={blogItems['items']} title={blogItems['title']}/>
        </>
    );
};

export default NavbarItems;