import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icons/icon_map_mark_2.svg'
import icon2 from '../../images/icons/icon_calling_2.svg'
import icon3 from '../../images/icons/icon_mail_3.svg'
import icon4 from '../../images/icons/icon_calendar_2.svg'


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Локация</h3>
                                <p className="mb-0">
                                    Uzbekistan, Bukhara, Media Center 200100
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Контакты</h3>
                                <p className="mb-0">+998(91) 418-05-18</p>
                                <div className="mb-0">+998(99) 318-12-50</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="User Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <p className="mb-0">Techco@example.com</p>
                                <p className="mb-0">gmail.@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon4} alt="Calendar SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Посетите нас в</h3>
                                <p className="mb-0">Пон - Суб: 9.00-18.00</p>
                                <p className="mb-0">Воскресение: Закрыто</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Отправьте нам сообщение</h3>
                                <p className="mb-5">
                                    Дайте нам шанс послужить вам и добавить магии вашему бренду.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gmap_canvas ps-lg-5">
                                <iframe
                                    title='map'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8348279532447!2d-122.009199!3d37.334601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f04b430000001%3A0x5bda5d58b35eeccc!2zMzcgMzQ3NTggTGF0aW5hIFRleGFz!5e0!3m2!1sru!2sru!4v1611877166763!5m2!1sru!2sru"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;