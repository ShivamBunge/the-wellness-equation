"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from "../../../public/fav.svg"

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';
import Image from 'next/image';
const NAV_ITEMS = [
  { path: 'blog', name: 'BLOG' },
  { path: 'about', name: 'ABOUT' },
  { path: 'contact', name: 'CONTACT' },
];


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`flex justify-around fixed w-full top-0 transition-all duration-300 z-20 py-2 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`} >
      <Link href="/" className="self-start md:self-auto">
        <h1 className="text-2xl flex items-center">
          <Image
            height={70}
            width={70}
            src={logo}
            alt="logo"
            style={{ objectFit: 'cover' }}
          />

        </h1>
      </Link>
      <div className="my-6 flex items-center space-x-8 self-center md:self-auto">
        <ul className="flex flex-wrap space-x-5">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="text-customSecondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              <NavLink path={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        {/* <div className="absolute right-[10vw] top-12 md:static">
          <ThemeToggle />
        </div> */}
      </div>
    </nav>
  );
}

