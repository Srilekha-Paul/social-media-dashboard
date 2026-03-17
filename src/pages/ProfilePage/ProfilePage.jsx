import Profile from '../../components/Profile/Profile';
import Post from '../../components/Post/Post';
import { currentUser, posts } from '../../utils/data';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  return (
    <div>
      <h1 className={styles.title}>My Profile</h1>
      <Profile user={currentUser} />
      <h2 className={styles.subtitle}>My Posts</h2>
      {posts.slice(0, 2).map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}
export default ProfilePage;