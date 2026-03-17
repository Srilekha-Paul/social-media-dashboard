import styles from './Notification.module.css';

const icons = { like: '❤️', follow: '◉', comment: '💬' };

function Notification({ notif }) {
  return (
    <div className={`${styles.notif} ${!notif.read ? styles.unread : ''}`}>
      <img src={notif.avatar} alt={notif.user} className={styles.avatar} />
      <div className={styles.body}>
        <p><strong>{notif.user}</strong> {notif.message}</p>
        <span className={styles.time}>{notif.time}</span>
      </div>
      <span className={styles.icon}>{icons[notif.type]}</span>
    </div>
  );
}
export default Notification;