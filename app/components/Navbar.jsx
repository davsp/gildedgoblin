import React from 'react';
import Link from 'next/link';

const NavItems = [
    'Home',
    'Listings',
    'WTB',
    'About'
];

const Navbar = () => {
    return (
        <nav>
            <ul class="flex">
                    {NavItems.map((item, index) => {
                    return (
                        <li class="mr-6">                            
                        <Link className="text-blue-500 hover:text-blue-800" key={index} href={`/${item.toLowerCase()}`} >{item}</Link>    
                        </li>
                                        )
                })}
                </ul>
            </nav>
    );
};

export default Navbar;

