import Notification from '../../components/Notification/Notification';
import Card from '../../components/common/Card/Card';
import { notifications } from '../../utils/data';
import styles from './Notifications.module.css';

function Notifications() {
  const unread = notifications.filter(n => !n.read).length;
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Notifications</h1>
        {unread > 0 && <span className={styles.badge}>{unread} new</span>}
      </div>
      <Card style={{padding:'8px'}}>
        {notifications.map(n => <Notification key={n.id} notif={n} />)}
      </Card>
    </div>
  );
}
export default Notifications;