
import React from "react";
import "./footer.css";
import { Helmet } from "react-helmet";

class Footer extends React.Component {
    render() {
        return (

            <div className="Parent_error_class">
                <div className="application">
                        <Helmet>
                            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css' />
                            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' />
                            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
                            <link rel='stylesheet' href='https://themify.me/wp-content/themes/themify-v32/themify-icons/themify-icons.css'/>

                </Helmet>
        </div>
        
                    <footer className="new_footer_area bg_color">
                        <div className="new_footer_top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Get Real Time Update</h3>
                                            <p>Don’t miss any updates regarding the pharmacy.!</p>
                                            <form action="#" className="f_subscribe_two mailchimp" method="post" >
                                                <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                                <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                                <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">Company</a></li>
                                                <li><a href="#">Android App</a></li>
                                                <li><a href="#">ios App</a></li>
                                                <li><a href="#">Desktop</a></li>
                                                <li><a href="#">My tasks</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Term &amp; conditions</a></li>
                                                <li><a href="#">Reporting</a></li>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                            <div className="f_social_icon">
                                                <a href="#" className="fab fa-facebook"></a>
                                                <a href="#" className="fab fa-twitter"></a>
                                                <a href="#" className="fab fa-linkedin"></a>
                                                <a href="#" className="fab fa-pinterest"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_bg">
                                <div className="footer_bg_one"></div>
                                <div className="footer_bg_two"></div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-7">
                                        <p className="mb-0 f_400">© ISI Inc.. 2020 All rights reserved.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 text-right">
                                        <p>Made <i className="icon_heart"></i> by <a href="#">TEAM BLUE</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                );
              }
            }
            export default Footer;
