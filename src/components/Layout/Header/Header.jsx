import React, { useEffect, useState } from 'react';
import style from './Header.module.scss';
import SearchBar from '../../SearchBar/SearchBar';
import Assets from '../../../assets/assets';
import Iconmoon from '../../Iconmoon/Iconmoon';
import { Modal } from 'react-bootstrap';
import Image from '../../Image/Image';


export const headerLinks = [
  {
    id: 1,
    title: "Docs",
    link: `/dashoard`,
  },
  {
    id: 2,
    title: "Components",
    link: "/products",
  },
  {
    id: 3,
    title: "Blocks",
    link: "/coming-soon",
  },
  {
    id: 4,
    title: "Charts",
    link: `/pricing-plans`,
  },
  {
    id: 5,
    title: "Themes",
    link: `/pricing-plans`,
  },
  {
    id: 6,
    title: "Colors",
    link: `/pricing-plans`,
  },

];




const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const toggleClass = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
    return () => {
      document.body.classList.remove("dark_mode");
    };
  }, [isDarkMode]);

  return (
    <header className={`${style.header} header`}>
      <div className="container">
        <div className={style.header_wrap}>
          <div className={style.links_wrap}>
            <div className={style.logo_outer}>
              <div className={style.logo_wrap}>
                <div className={`${style.logo} logo`}>
                  {isDarkMode ?
                    <Image src={Assets.logo_white} alt="logo-white" width="24" height="24" />
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>
                  }
                </div>
                <h2 className={style.logo_text}>wac/ui</h2>
              </div>
            </div>
            <ul className={`${style.nav_link_wrap} nav_link_wrap`}>
              {headerLinks.map((links) => {
                return (
                  <li key={links.id}>
                    <a href={links?.link} target="_blank">
                      {links?.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`d-flex align-items-center column-gap-3`}>
            <button
              type='button'
              className={`${style.search_btn} search_btn`}
              onClick={() => setModalShow(true)}
            >
              Search documentation...
              <div className={style.icon}>
                <Iconmoon icon="search" size={15} color="#71717a" />
              </div>
            </button>
            <SearchModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            {/* <SearchBar data={data} /> */}
            <button
              className={`${style.toggle} btn btn-link`}
              onClick={toggleClass}>
              {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun hidden [html.dark_&amp;]:block"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon hidden [html.light_&amp;]:block"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

function SearchModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={style.search_modal}
    >
      <Modal.Body>
        <SearchBar data={data} />
      </Modal.Body>
    </Modal>
  );
}

const data = [
  {
    img: Assets.slider1,
    id: "1",
  },
  {
    img: Assets.noImage,
    id: "2",
  },
  {
    img: Assets.slider2,
    id: "3",
  },
  {
    img: Assets.form1,
    id: "4",
  },
  {
    img: Assets.cards1,
    id: "5",
  },
]