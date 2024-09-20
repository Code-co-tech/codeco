import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import srImg from '../../images/services/service_image_8.webp'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyUs from '../AboutUsPage/WhyUs';


const ServicePage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Наши Сервисы'} pagesub={'Сервисы 😍'} pageTop={'Наши основные '} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-5 order-lg-last">
                                <div className="team_cartoon_image">
                                    <img src={srImg} alt="Service Cartoon" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Мы
                                            <span className="badge bg-secondary text-white">IT-эксперты 🙂</span>
                                        </div>
                                        <h2 className="heading_text">
                                            Индивидуальные IT-решения для вашего успеха
                                        </h2>
                                        <p className="heading_description mb-0">
                                            Мы понимаем, что каждый бизнес уникален, со своими собственными вызовами, целями и стремлениями. Вот почему мы предлагаем индивидуальные IT-решения, разработанные для...
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} to={'/service'} className="btn">
                                        <span className="btn_label" data-text="Поговорите с экспертом">Поговорите с экспертом</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceSection />
                <div className="pt-130"></div>
                <WhyUs />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
