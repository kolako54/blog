import Admin from "@/pages/admin";
import Link from "next/link";
import Logo from "./Logo";
import {
  AiOutlineDashboard,
  AiOutlineContainer,
  AiOutlineTeam,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface IAdminNavProps {
  navItems: { href: string; icon: IconType; label: string }[];
}
const AdminNav: React.FunctionComponent<IAdminNavProps> = ({ navItems }) => {
  console.log(navItems);
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark">
      <Link href="/admin" legacyBehavior>
        <a className="flex items-center space-x-2 p-3">
          <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
          <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
            admin
          </span>
        </a>
      </Link>
      <div className="space-y-6 mt-[3.5em]">
        {navItems.map((navlink) => {
          return (
            <Link href={navlink.href} key={navlink.label} legacyBehavior>
              <a className="flex items-center space-x-2 p-3 hover:scale-[0.98] transition">
                <navlink.icon size={24} />
                <span>{navlink.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default AdminNav;
