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

interface IAdminNavProps {}
const AdminNav: React.FunctionComponent<IAdminNavProps> = (props) => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark">
      <div>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center space-x-2 p-3">
            <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
            <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
              admin
            </span>
          </a>
        </Link>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center dark:text-highlight-dark text-highlight-light text-xl p-3 hover:scale-[0.98] transition gap-2 mt-5">
            <AiOutlineDashboard size={24} />
            <span>Dashboard</span>
          </a>
        </Link>
        <Link href="/admin/posts" legacyBehavior>
          <a className="flex items-center dark:text-highlight-dark text-highlight-light text-xl p-3 hover:scale-[0.98] transition gap-2">
            <AiOutlineContainer size={24} />
            <span>Posts</span>
          </a>
        </Link>
        <Link href="/admin/users" legacyBehavior>
          <a className="flex items-center dark:text-highlight-dark text-highlight-light text-xl p-3 hover:scale-[0.98] transition gap-2">
            <AiOutlineUser size={24} />
            <span>Users</span>
          </a>
        </Link>
        <Link href="/admin/comments" legacyBehavior>
          <a className="flex items-center dark:text-highlight-dark text-highlight-light text-xl p-3 hover:scale-[0.98] transition gap-2">
            <AiOutlineMail size={24} />
            <span>Comments</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
