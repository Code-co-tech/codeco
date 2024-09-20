import React from 'react';
import Project from '../../api/project'
import { Link } from "react-router-dom";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProjectSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="portfolio_section xb-hidden section_space pb-0">
            <div className="container">
                <div className="heading_block">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <div className="heading_focus_text">
                                <span className="badge bg-secondary text-white">Создаём</span>
                                успех с помощью проектов 😍
                            </div>
                            <h2 className="heading_text">
                                Наши недавние лучшие работы
                            </h2>
                            <p className="heading_description mb-0">
                                Наши недавние проекты подчеркивают нашу экспертизу в предоставлении индивидуальных решений, которые соответствуют уникальным потребностям и целям наших клиентов, включая кастомное программное обеспечение.
                            </p>
                        </div>
                        <div className="col-lg-5 d-none d-lg-flex justify-content-end">
                            <Link onClick={ClickHandler} to={'/portfolio'} className="btn btn-primary">
                                <span className="btn_label" data-text="Все работы">Все работы</span>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio_carousel">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, A11y]}
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={30}
                    allowTouchMove={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    speed={400}
                    parallax={true}
                    breakpoints={{
                        1025: {
                            slidesPerView: 2,
                        },
                    }}
                >

                    {Project.slice(0, 5).map((project, prj) => (
                        <SwiperSlide key={prj}>
                            <div className="portfolio_block" >
                                <div className="portfolio_image">
                                    <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                        <img src={project.pImg} alt="Mobile App Design" />
                                    </Link>
                                </div>
                                <div className="portfolio_content">
                                    <h3 className="portfolio_title">
                                        <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <ul className="category_list unordered_list">
                                        <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>{project.sub}</Link></li>
                                    </ul>
                                    <Link onClick={ClickHandler} className="btn btn-outline-light" to={`/portfolio_details/${project.slug}`}>
                                        <span className="btn_label" data-text="Explore">Explore</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="container text-center d-block d-lg-none">
                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-primary" to="/pricing">
                        <span className="btn_label" data-text="All Works">All Works</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;