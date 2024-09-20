import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'Наша история',
        subTitle: 'С 1997 года мы являемся надежным иVisionary партнером в области программной инженерии для мировых брендов',
        icon: sIcon1,
    },
    {
        title: 'Наша миссия',
        subTitle: 'Миссия компании формулирует, чего она хочет достичь, кого она хочет поддерживать и почему. С другой стороны...',
        icon: sIcon2,
    },
    {
        title: 'Наша визия',
        subTitle: 'Визионное заявление компании или организации сосредоточено на потенциале, заложенном в будущем компании;',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
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