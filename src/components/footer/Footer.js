import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../../images/shapes/bg_pattern_3.svg'
import icon1 from '../../images/icons/icon_mail.svg'
import icon2 from '../../images/icons/icon_calling.svg'
import icon3 from '../../images/icons/icon_map_mark.svg'
import icon4 from '../../images/icons/icon_mail_2.svg'
import Services from '../../api/service'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const Footer = (props) => {
    return (
        <footer className="site_footer footer_layout_1">
            <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    <div className="diract_contact_links text-white">
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Mail SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">
                                    Напишите нам</h3>
                                <p className="mb-0">
                                    Codeco@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title"> Позвоните На (UZB)</h3>
                                <p className="mb-0">
                                    +(998) 91 418 05 18
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="Map Mark Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Наш офис</h3>
                                <p className="mb-0">
                                    Uzbekistan, Bukhara, 200100
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_main_content">
                        <div className="row gap-5">

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Сервисы</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 6).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title ?
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text">
                                                            {service.title}
                                                        </span>
                                                    </Link>
                                                    : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Информация</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    О Codeco
                                                </span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link onClick={ClickHandler} to="/contact">
                                                <span className="icon_list_text">
                                                    Контакты
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    Партнёрская программа
                                                </span>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;