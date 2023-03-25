import { useEffect, useState } from 'react';
import './App.css';
import service from './libs/api';

function App() {
  const [test, setTest] = useState<any>('');

  useEffect(() => {
    service.post('/read', { id: 1 }).then((result) => {
      console.log(result);
      setTest(result.message);
    });
  }, []);
  return <div className="App">{test}</div>;
}

export default App;
