import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState<any>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/todos');
      setTest(response);
    };
    fetchData();
  }, []);
  return <div className="App">{test}</div>;
}

export default App;
