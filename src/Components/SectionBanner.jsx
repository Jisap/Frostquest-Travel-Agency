// components/SectionBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SectionBanner = ({ title, currentPage }) => {
    return (
        <div className="section-banner w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-banner-content">
                    <h2>{title}</h2>

                    <ul>
                        <li>
                            <Link to="/">Home</Link> &nbsp; @ &nbsp;
                        </li>
                        <li>
                            <i className="bi bi-gear fs-6 pe-2"></i>
                            {currentPage}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SectionBanner;