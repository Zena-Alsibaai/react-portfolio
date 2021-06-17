import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const SocialNetwork = () => {
    const anim= () =>{
        let navLinks = document.querySelectorAll('.social-network a');

        navLinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX -20;
                let atrrY = e.offsetY -13;

                link.style.transform = `translate(${attrX}px, ${atrrY}px)`
            })
            link.addEventListener('mouseleave', () =>{
                link.style.transform = '';
            })
        })

    }
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://linkedin.com/in/zena-alsibaai" target="blank"  className="hover" onMouseOver={anim}>
                <li><i class="fab fa-linkedin-in"></i></li>
                </a>

                <a href="https://github.com/Zena-Alsibaai" target="blank"  className="hover" onMouseOver={anim}>
                <li><i class="fab fa-github"></i></li>
                </a>

                <CopyToClipboard text="zena.alsibaai@gmail.com" className="hover" onMouseOver={anim}>
                    <a  style={{cursor: "pointer"}} className="clipboard" onClick={() => {
                             alert("Email copié !")
                            }}>
                        <i class="fas fa-envelope-open-text"></i>
                       </a>
                 </CopyToClipboard> 

                <CopyToClipboard text="0465 790 799" className="hover" onMouseOver={anim}>
                    <a   style={{cursor: "pointer"}} className="clipboard" onClick={() => {
                            alert("Téléphone copié !")
                                }}>
                        <i class="fas fa-mobile-alt"></i>
                       </a>
                </CopyToClipboard> 
            </ul>
        </div>
    )
};

export default SocialNetwork;