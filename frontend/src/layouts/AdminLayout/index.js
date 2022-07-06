import classnames from 'classnames/bind';
import AdminHeader from 'src/components/AdminHeader';
import AdminSidebar from 'src/components/AdminSidebar';
import styles from './AdminLayout.module.scss';

const cx = classnames.bind(styles);

function AdminLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <AdminSidebar />
      <div>
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
