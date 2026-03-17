import { useState } from 'react';
import Post from '../../components/Post/Post';
import Profile from '../../components/Profile/Profile';
import { posts, currentUser } from '../../utils/data';
import styles from './Home.module.css';

function Home() {
  const [search, setSearch] = useState('');
  const filtered = posts.filter(p =>
    p.content.toLowerCase().includes(search.toLowerCase()) ||
    p.author.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Profile user={currentUser} />
      <input
        className={styles.search}
        placeholder="🔍  Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.length === 0
        ? <p style={{color:'var(--text2)',textAlign:'center',padding:'40px'}}>No posts found.</p>
        : filtered.map(post => <Post key={post.id} post={post} />)
      }
    </div>
  );
}
export default Home;