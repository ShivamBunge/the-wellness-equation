import Link from 'next/link';
import logo from "../../../public/fav.jpg"

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';
import Image from 'next/image';
const NAV_ITEMS = [
  { path: 'blog', name: 'BLOG' },
  { path: 'about', name: 'ABOUT' },
  { path: 'contact', name: 'CONTACT' },
  { path: 'projects', name: 'ONGOING PROJECTS' },
];


export default function Header() {
  return (
    <nav className="flex flex-col justify-between py-12 md:flex-row ">
      <Link href="/" className="self-start md:self-auto">
        <h1 className="text-2xl flex items-center">
          <Image
            height={70}
            width={70}
            src={logo}
            alt="logo"
            style={{ objectFit: 'cover' }}
          />
          Subconsiously
        </h1>
      </Link>
      <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
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
