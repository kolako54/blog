import Link from 'next/link';
import { useRef, useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { type IconType } from 'react-icons/lib';
import { RiMenuUnfoldFill } from 'react-icons/ri';

import Logo from './Logo';

interface AdminNavProps {
  navItems: { href: string; icon: IconType; label: string }[];
}

const AdminNav: React.FunctionComponent<AdminNavProps> = ({ navItems }) => {
  const NAVBAR_OPEN = 'w-60';
  const NAVBAR_CLOSE = 'w-16';
  const [visible, setVisible] = useState(true);
  const navTag = useRef<HTMLElement>(null);

  const updateNavbar = () => {
    const { current } = navTag;
    if (!current) return;

    if (visible) {
      current.classList.remove(NAVBAR_OPEN);
      current.classList.add(NAVBAR_CLOSE);
    } else {
      current.classList.add(NAVBAR_OPEN);
      current.classList.remove(NAVBAR_CLOSE);
    }
    setVisible(!visible);
  };

  return (
    <nav
      ref={navTag}
      className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between"
    >
      <div>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center space-x-2 p-3" href="#">
            <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
            {visible ? (
              <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
                admin
              </span>
            ) : null}
          </a>
        </Link>
        <div className="space-y-6 mt-[3.5em]">
          {navItems.map(navlink => {
            return (
              <Link href={navlink.href} key={navlink.label} legacyBehavior>
                <a className="flex items-center space-x-2 p-3 hover:scale-[0.98] transition text-highlight-light dark:text-highlight-dark ">
                  <navlink.icon size={24} />
                  {visible ? <span>{navlink.label}</span> : null}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <button
        className="self-end p-5 hover:scale-[0.95] transition text-highlight-light dark:text-highlight-dark"
        onClick={updateNavbar}
      >
        {visible ? <BiMenuAltLeft size={30} /> : <RiMenuUnfoldFill size={24} />}
      </button>
    </nav>
  );
};

export default AdminNav;
