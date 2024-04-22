import React from 'react';
import Link from 'next/link';

const NavItems = [
    'Home',
    'Listings',
    'WTB',
    'About',
    'Raffle',
];

const Navbar = () => {
    return (
        <nav>
            <ul className="flex">
                {NavItems.map((item, index) => {

                    return (
                        <li className="mr-6" key={index}>
                            <Link className="text-blue-500 hover:text-blue-800" href={`/${item === 'Home' ? '/' : item.toLowerCase()}`} >{item}</Link>
                        </li>
                    )
                })}
                </ul>
            </nav>
    );
};

export default Navbar;

