import AdminNav from '@/components/common/AdminNav';

interface IAdminProps {}
const Admin: React.FunctionComponent<IAdminProps> = (props) => {
  return (
    <div className="dark">
      <AdminNav />
    </div>
  );
};

export default Admin;
