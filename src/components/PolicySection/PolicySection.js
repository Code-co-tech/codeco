import React from 'react';
import sIcon1 from '../../images/icons/icon_user_check.svg'
import sIcon2 from '../../images/icons/icon_headphone.svg'
import sIcon3 from '../../images/icons/icon_dollar.svg'

const Policy = [
    {
        title: 'Экспертная команда',
        subTitle: 'Мы гордимся тем, что собрали разнообразную и высококвалифицированную команду.',
        icon: sIcon1,
    },
    {
        title: 'Самый быстрый сервис поддержки клиентов',
        subTitle: 'Мы гордимся тем, что предоставляем самый быстрый сервис поддержки клиентов в отрасли.',
        icon: sIcon2,
    },
    {
        title: 'Разумные цены',
        subTitle: 'Мы верим в установление разумных цен, которые предлагают исключительное качество.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section py-5 mt-5">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-secondary-subtle">
                                    <img src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;