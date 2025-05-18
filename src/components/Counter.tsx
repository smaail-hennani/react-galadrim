import React, {useState} from 'react';

type CounterProps = {
    initial: number;
}

function Counter( { initial }: CounterProps) {
    const [count, setCount] = useState<number>(initial);

    const reset = () => setCount(initial);

    return (
        <div style={{ padding: '1rem', border: '1px solid gray', borderRadius: '8px', marginTop: '1rem' }}>
            <h2>Compteur</h2>
            <p>Valeur actuelle : {count}</p>
            <p>Valeur x2 : {count * 2}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
            <button onClick={reset} style={{ marginLeft: '1rem' }}>Reset</button>
        </div>
    );
}

export default Counter;