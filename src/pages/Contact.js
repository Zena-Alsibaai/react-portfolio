import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from './../components/Navigation';
import Logo from './../components/Logo';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from './../components/SocialNetwork';
import ButtonsBottom from './../components/ButtonsBottom';

const Contact = () => {
    return (
        <main>
            <Mouse/>
            <div className="contact">
                <Navigation/>
                <Logo/>
                {/* ====Contact from ====*/}
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>Liège</p>
                            <p>4000</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4> Téléphone</h4>
                            <CopyToClipboard text ="0123456789" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                    alert("Téléphone copié !")
                                }}>0465 790 799</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="zena.alsibaai@gmail.com" className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={() => {
                                alert("Email copié !")
                            }}>zena.alsibaai@gmail.com</p>
                            </CopyToClipboard>      
                        </div> 
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>ZA - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left ={'/project-5'}/>
            </div>
        </main>
    );
};

export default Contact;