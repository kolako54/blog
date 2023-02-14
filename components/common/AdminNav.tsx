import Admin from "@/pages/admin";
import Link from "next/link";
import Logo from "./Logo";

interface IAdminNavProps {}
const AdminNav: React.FunctionComponent<IAdminNavProps> = (props) => {
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
    </nav>
  );
};

export default AdminNav;
