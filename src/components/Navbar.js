import React from 'react';
import './Navbar.css';

import brandIcon from '../images/brandIcon.png';

const Navbar = () => {
    return (
        <nav className="navbar bg-light shadow-sm">
            <div className="container-sm container-md mx-auto">
                {/* <a className="navbar-brand">FindYourPharmacy</a> */}
                <a class="navbar-brand" href="#">
                    <img src={brandIcon} alt="Brand Icon" width="120" height="60" />
                </a>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <span className="fw-bold">Delivery</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span className="fw-bold">Pickup</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
