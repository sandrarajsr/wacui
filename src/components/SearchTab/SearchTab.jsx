import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from './SearchTab.module.scss';
import Image from '../Image/Image';
import Assets from '../../assets/assets';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function SearchTab() {

    return (
        <section className={style.tab}>
            <div className={style.tab_container}>
                <Tabs defaultActiveKey="latest" className={`${style.gallery_tab}`}>
                    {category.map((categories) => (
                        <Tab eventKey={categories.id} title={categories.name} key={categories.id}>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 575: 1, 768: 2, 992: 3 }}
                            >
                                <Masonry gutter="16px" className={style.masonry}>
                                    {data
                                        .filter((imgs) =>
                                            categories.id === "latest"
                                                ? true
                                                : imgs.name === categories.id
                                        )
                                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                        .slice(0, 5)
                                        .map((imgs) => (
                                            <div className={style.img_wrap} key={imgs.id}>
                                                <Image src={imgs.img} alt="logo" />
                                            </div>
                                        ))   
                                    }
                                </Masonry>
                            </ResponsiveMasonry>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}


export default SearchTab;


const data = [
    {
        img: Assets.slider1,
        id: "1",
        name: "slider",
        createdAt: "2024-12-05",
    },
    {
        img: Assets.noImage,
        id: "2",
        name: "slider",
        createdAt: "2024-12-01",
    },
    {
        img: Assets.slider2,
        id: "3",
        name: "slider",
        createdAt: "2024-12-02",
    },
    {
        img: Assets.form1,
        id: "4",
        name: "form",
        createdAt: "2024-12-05",
    },
    {
        img: Assets.cards1,
        id: "5",
        name: "card",
        createdAt: "2024-12-05",
    },
    {
        img: Assets.slider1,
        id: "6",
        name: "slider",
        createdAt: "2024-12-05",
    },
    {
        img: Assets.noImage,
        id: "7",
        name: "slider",
        createdAt: "2024-12-06",
    },
    {
        img: Assets.slider2,
        id: "8",
        name: "slider",
        createdAt: "2024-12-07",
    },
    {
        img: Assets.form1,
        id: "9",
        name: "form",
        createdAt: "2024-12-08",
    },
    {
        img: Assets.cards1,
        id: "10",
        name: "card",
        createdAt: "2024-12-09",
    },
]


const category = [
    {
        name: "Latest",
        id: "latest",
    },
    {
        name: "Forms",
        id: "form",
    },
    {
        name: "Cards",
        id: "card",
    },
    {
        name: "Sliders",
        id: "slider"
    }
]