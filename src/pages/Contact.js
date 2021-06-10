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
                            <p>Rue de Rue</p>
                            <p>123456</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4> Téléphone</h4>
                            <CopyToClipboard text ="0123456789" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                    alert("Téléphone copié !")
                                }}>06 02 02 02 02</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="zaagency@gmail.com" className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={() => {
                                alert("Email copié !")
                            }}>zaagency@gmail.com</p>
                            </CopyToClipboard>      
                        </div> 
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>ZA Agency - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left ={'/project-4'}/>
            </div>
        </main>
    );
};

export default Contact;