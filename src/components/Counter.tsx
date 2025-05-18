import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '1rem', border: '1px solid gray', borderRadius: '8px' }}>
            <h2>Compteur</h2>
            <p>Valeur actuelle : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        </div>
    );
}

export default Counter;