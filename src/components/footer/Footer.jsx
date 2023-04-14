import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <div className='text-left leading-none'>
                        <Link to={"/"} className="btn btn-ghost normal-case">
                            <div className='text-left leading-none'>
                                <h1 className='text-2xl'>User<span>Shop</span></h1>
                            </div>
                        </Link>
                    </div>
                    <p>Providing reliable service since 1984</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='' className="link link-hover">Branding</a>
                    <a href='' className="link link-hover">Design</a>
                    <a href='' className="link link-hover">Marketing</a>
                    <a href='' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='' className="link link-hover">About us</a>
                    <a href='' className="link link-hover">Contact</a>
                    <a href='' className="link link-hover">Jobs</a>
                    <a href='' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='' className="link link-hover">Terms of use</a>
                    <a href='' className="link link-hover">Privacy policy</a>
                    <a href='' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;