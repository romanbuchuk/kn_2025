import React from 'react';
import List from './components/List';

function App() {
    // const clickHandler = () => {
    //     setCount((count) => count + 1);
    // }
    //
    // const handleClick = useCallback(clickHandler, []);
    //



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
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
         <List />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
