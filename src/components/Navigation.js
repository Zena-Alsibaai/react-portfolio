import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/*===== Vers La Page Home =====*/}
                <NavLink to='/' exact className='hover' activeClassName='nav-active'>
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">Portfolio
                    <ul className="nav-projects">
                        <NavLink to='/project-1' activeClassName='nav-active' className='hover'>
                            <li>Project 1</li>
                        </NavLink>
                        <NavLink to='/project-2' activeClassName='nav-active' className='hover'>
                            <li>Project 2</li>
                        </NavLink>
                        <NavLink to='/project-3' activeClassName='nav-active' className='hover'>
                            <li>Project 3</li>
                        </NavLink>
                        <NavLink to='/project-4' activeClassName='nav-active' className='hover'>
                            <li>Project 4</li>
                        </NavLink>
                          <NavLink to='/project-5' activeClassName='nav-active' className='hover'>
                            <li>Project 5</li>
                        </NavLink>
                    </ul>
                </li>
                {/*===== Vers La Page Contact =====*/}
                <NavLink to='/contact' exact className='hover' activeClassName='nav-active'>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;