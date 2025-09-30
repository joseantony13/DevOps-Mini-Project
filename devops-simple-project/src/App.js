import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Hello from React!');
  const version = process.env.REACT_APP_VERSION || 'dev';

  return (
    <div style={{fontFamily:'Segoe UI, Roboto, Arial', padding:24}}>
      <h1>DevOps Simple App</h1>
      <p>Version: <strong>{version}</strong></p>
      <p>{msg}</p>
      <button onClick={() => setMsg('Message updated at ' + new Date().toLocaleString())}>
        Update Message
      </button>
    </div>
  );
}

export default App;

