import React from 'react';
import style from './footer.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className="container">
          <div className={style.footer_wrap}>
            <p className={style.footer_text}>
                Built by <Link to="https://webandcrafts.com/" className={style.anchor} target="_blank" >webandcrafts</Link>
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;