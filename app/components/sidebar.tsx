'use client'
import React, {useState} from 'react';
import {Menu, MenuProps} from 'antd';
import {menuItems} from "@/app/components/constant";

interface LevelKeysProps {
    key?: string;
    children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (items2: LevelKeysProps[], level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};

const levelKeys = getLevelKeys(menuItems as LevelKeysProps[]);

const Sidebar = () => {

    const [stateOpenKeys, setStateOpenKeys] = useState(['', '']);

    const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };


    return (
        <div className='w-full h-[calc(100%-64px)] bg-white'>
            <Menu
                style={{ width: '100%' }}
                mode='inline'
                openKeys={stateOpenKeys}
                items={menuItems}
                onOpenChange={onOpenChange}
                className='font-bold'
            />
        </div>
    );
};

export default Sidebar;