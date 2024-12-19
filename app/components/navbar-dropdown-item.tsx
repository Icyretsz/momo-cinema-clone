'use client'
import React, {useState} from 'react';
import {DownOutlined} from '@ant-design/icons';
import {DropdownProps} from 'antd';
import {Dropdown} from 'antd';
import {Button} from "antd";
import {MenuPropsTitle} from "@/app/components/constant";

const NavbarDropdownItem: React.FC<MenuPropsTitle> = ({items, title}) => {
    const [open, setOpen] = useState(false);

    const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };

    return (
        <Dropdown
            menu={{
                items,
            }}
            onOpenChange={handleOpenChange}
            open={open}
        >
            <Button type='text' className='group'>
                <span className='text-sm font-bold'>{title}</span><DownOutlined
                className="transition-transform duration-300 group-hover:rotate-180"/>
            </Button>
        </Dropdown>
    );
};

export default NavbarDropdownItem;