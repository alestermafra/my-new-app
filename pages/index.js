import { useState } from 'react';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Contador />
        </>
    );
}

function Contador() {
    const [count, setCount] = useState(1);

    return (
        <button onClick={() => setCount(count + 1)} style={{padding: '5px 15px'}}>{count}</button>
    );
}

export default Home;