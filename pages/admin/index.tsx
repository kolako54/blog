import {
  AiOutlineContainer,
  AiOutlineDashboard,
  AiOutlineMail,
  AiOutlineTeam,
} from 'react-icons/ai';

import AdminNav from '../../components/common/AdminNav';

interface AdminProps {}
const navItems = [
  { href: '/admin', icon: AiOutlineDashboard, label: 'Dashboard' },
  { href: '/admin/posts', icon: AiOutlineContainer, label: 'Posts' },
  { href: '/admin/users', icon: AiOutlineTeam, label: 'Users' },
  { href: '/admin/comments', icon: AiOutlineMail, label: 'comments' },
];

const Admin = (props: AdminProps) => {
  return (
    <div className="dark">
      <AdminNav navItems={navItems} />
    </div>
  );
};

export default Admin;
