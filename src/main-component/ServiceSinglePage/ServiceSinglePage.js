import React, { Fragment, useState } from 'react';
import Services from '../../api/service'
import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import srImg from '../../images/services/service_details_image_1.webp'
import srImg2 from '../../images/services/service_details_image_2.webp'
import srImg3 from '../../images/services/service_details_image_3.webp'
import srImg4 from '../../images/services/service_details_image_4.webp'
import icon from '../../images/icons/icon_check_3.svg'


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle pageTitle={ServiceDetails.title} pagesub={'Details 😍'} pageTop={'Services'} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={srImg} alt="Service Details" />
                            <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </button>
                        </div>
                        <h2 className="details_item_title">{ServiceDetails.title}</h2>
                        <p>
                            {ServiceDetails.title} сети являются опорой современных бизнесов, служа основой, на которую полагаются все цифровые операции. В нашем агентстве IT-решений мы специализируемся на создании надежных и устойчивых сетевых архитектур, адаптированных под уникальные потребности наших клиентов. Мы понимаем критическую важность хорошо спроектированной сетевой инфраструктуры для повышения эффективности, безопасности и масштабируемости, будь то малый бизнес или крупное предприятие. Наша команда опытных специалистов тесно сотрудничает с клиентами.
                        </p>

                        <ProcessTechnology />
                        <h3 className="details_item_info_title">Результаты услуг</h3>
                        <p className="mb-4">
                            Вот шесть ключевых моментов, которые можно связать с галереей кейсов цифровой трансформации, где глобальный лидер в области инженерных услуг цифровых систем помогает компаниям из списка Fortune 500 в их инновационной стратегии:
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Масштабируемость и гибкость
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Безопасность и соответствие требованиям
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Оптимизация производительности
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Пользовательский опыт
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Безопасность и соблюдение норм
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Обучение и образование
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg2} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg3} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg4} alt="Service Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ServiceSinglePage;