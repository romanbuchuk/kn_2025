import React, { useCallback, useMemo, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button';
// import Button from './components/Button/index.js(x)?';

function App() {
    const [count, setCount] = useState(0);
    const stylesRef = useRef({ backgroundColor: 'violet', border: '2px solid black' });
    // const clickHandler = () => {
    //     setCount((count) => count + 1);
    // }
    //
    // const handleClick = useCallback(clickHandler, []);
    //

    const handleClick = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    // const styles = { backgroundColor: 'violet', border: '2px solid black' };

    // const styles = useMemo(() => {
    //     if (count % 2) {
    //         return { backgroundColor: 'red', border: '2px solid black' }
    //     }
    //
    //     return { backgroundColor: 'violet', border: '2px solid black' }
    // }, [count]);

    // const styles = useMemo(() => ({ backgroundColor: 'violet', border: '2px solid black' }), []);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <Button onClick={handleClick} styles={stylesRef.current}>
              count is {count}
          </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
