import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav>
            <Link className="text-3xl font-bold bg-teal-500" href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/toolkit">Toolkit</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
};

export default NavBar;