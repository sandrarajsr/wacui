import React from 'react';
import HomeBanner from '../../HomeBanner/HomeBanner';
import SearchTab from '../../SearchTab/SearchTab';
import style from './PageLayout.module.scss';

const PageLayout = () => {
    return (
        <div className="container">
            <div className={style.page_layout}>
                <HomeBanner />
                <SearchTab />
            </div>

        </div>
    )
}

export default PageLayout;
