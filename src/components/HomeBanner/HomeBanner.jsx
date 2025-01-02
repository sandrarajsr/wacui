import React from 'react';
import style from './HomeBanner.module.scss';
import { Link } from 'react-router-dom';
import Iconmoon from '../Iconmoon/Iconmoon';

const HomeBanner = () => {
    return (
        <section className={style.banner}>
            <div className={style.banner_wrap}>
                <div className={style.banner_content}>
                    <Link to="/" className={style.title_link} >
                        New sidebar component
                        <Iconmoon icon={"back-arrow"} size={12} />
                    </Link>
                    <h2 className={style.title}>Build your component library</h2>
                    <p className={`${style.subtitle} mb-0`}>
                        Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. Open source.
                    </p>
                    <div className="d-flex column-gap-2 mt-3">
                        <button className="btn btn-primary lg">Get Started</button>
                        <button className="btn btn-link lg">Browse Blocks</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner;