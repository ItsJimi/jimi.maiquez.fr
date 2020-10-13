import React from 'react';
import './App.css';

function App() {
  const code = {
    name: "Jimi Maïquez",
    job: "Frontend developer @reelevant"
  }

  return (
    <div className="App">
      <pre>
        <code>
          {JSON.stringify(code, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default App;
