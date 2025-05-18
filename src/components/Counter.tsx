import React, {useState} from 'react';

type CounterProps = {
    initial: number;
}

function Counter( { initial }: CounterProps) {
    const [count, setCount] = useState<number>(initial);
    const [inputValue, setInputValue] = useState<string>("");

    const reset = () => setCount(initial);

    const updateInitial = () => {
        const parsed = parseInt(inputValue);
        if (!isNaN(parsed)) {
            setCount(parsed);
        }
    };

    return (
        <div style={{ padding: '1rem', border: '1px solid gray', borderRadius: '8px', marginTop: '1rem' }}>
            <h2>Compteur</h2>
            <p>Valeur actuelle : {count}</p>
            <p>Valeur x2 : {count * 2}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
            <button onClick={reset} style={{ marginLeft: '1rem' }}>Reset</button>

            <div style={{ marginTop: '1rem'}}>
                <input 
                    type="number"
                    placeholder="Entrer une valeur initiale"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={updateInitial} style={{ marginLeft: '1rem'}}> Définir </button>
            </div>
        </div>
    );
}

export default Counter;