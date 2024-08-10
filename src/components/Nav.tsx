import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 z-10 w-full relative shadow-md">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="px-3 py-2">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray  hover:text-red-500 rounded-md px-3 py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="lg:hidden px-3 py-2" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden absolute bg-white w-full left-0 shadow-md">
          <ul className="space-y-1 px-2 pb-3 pt-2 my-10 mx-10">
            {/* TODO: add logic to apply active class: <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>  */}
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 font-medium hover:bg-slate-gray hover:text-white font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
