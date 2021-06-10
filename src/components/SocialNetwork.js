import React from 'react';

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
                <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                <li><i class="fab fa-linkedin-in"></i></li>
                </a>

                <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                <li><i class="fab fa-github"></i></li>
                </a>

                <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                <i class="fas fa-envelope-open-text"></i>
                </a>

                <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                <i class="fas fa-mobile-alt"></i>
                </a>
            </ul>
        </div>
    )
};

export default SocialNetwork;