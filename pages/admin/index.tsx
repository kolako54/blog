import AdminNav from "@/components/common/AdminNav";
import {
  AiOutlineContainer,
  AiOutlineDashboard,
  AiOutlineMail,
  AiOutlineTeam,
} from "react-icons/ai";

interface IAdminProps {}
const navItems = [
  { href: "/admin", icon: AiOutlineDashboard, label: "Dashboard" },
  { href: "/admin/posts", icon: AiOutlineContainer, label: "Posts" },
  { href: "/admin/users", icon: AiOutlineTeam, label: "Users" },
  { href: "/admin/comments", icon: AiOutlineMail, label: "comments" },
];
const Admin = (props: IAdminProps) => {
  console.log(props);
  return (
    <div className="dark">
      <AdminNav navItems={navItems} />
    </div>
  );
};

export default Admin;
