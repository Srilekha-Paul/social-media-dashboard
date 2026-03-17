import { useState } from 'react';
import Card from '../../components/common/Card/Card';
import { messages } from '../../utils/data';
import styles from './Messages.module.css';

function Messages() {
  const [active, setActive] = useState(messages[0]);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([{ id: 1, from: 'them', text: active.lastMessage }]);

  const selectChat = (msg) => {
    setActive(msg);
    setChat([{ id: 1, from: 'them', text: msg.lastMessage }]);
  };

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setChat([...chat, { id: Date.now(), from: 'me', text: input }]);
    setInput('');
  };

  return (
    <div>
      <h1 className={styles.title}>Messages</h1>
      <div className={styles.layout}>
        <Card style={{padding:'8px',width:'220px',flexShrink:0}}>
          {messages.map(m => (
            <button key={m.id} className={`${styles.contact} ${active.id === m.id ? styles.activeContact : ''}`} onClick={() => selectChat(m)}>
              <img src={m.avatar} alt={m.user} className={styles.avatar} />
              <div className={styles.contactInfo}>
                <p className={styles.contactName}>{m.user}</p>
                <p className={styles.lastMsg}>{m.lastMessage.slice(0,28)}…</p>
              </div>
              {m.unread > 0 && <span className={styles.unread}>{m.unread}</span>}
            </button>
          ))}
        </Card>
        <Card style={{flex:1,display:'flex',flexDirection:'column',minHeight:'360px'}}>
          <p className={styles.chatWith}>{active.user}</p>
          <div className={styles.messages}>
            {chat.map(c => (
              <div key={c.id} className={`${styles.bubble} ${c.from === 'me' ? styles.mine : styles.theirs}`}>
                {c.text}
              </div>
            ))}
          </div>
          <form onSubmit={send} className={styles.inputRow}>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." className={styles.input} />
            <button type="submit" className={styles.sendBtn}>Send</button>
          </form>
        </Card>
      </div>
    </div>
  );
}
export default Messages;