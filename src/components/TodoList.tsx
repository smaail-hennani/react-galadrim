import React, { useState } from 'react';

type Task = {
    text: string;
    completed: boolean;
};

function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState<string>("");
    const [filter, setFilter] = useState<"toutes" | "encours" | "terminees">("toutes");
    const [counter, setCounter] = useState<number>(0);

    const addTask = () => {
        if (input.trim() !== "") {
            const newTask : Task = { text: input.trim(), completed: false};
            setTasks([...tasks, newTask]);
            setInput("");
            setCounter((prevCounter) => prevCounter + 1);
        }
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
        if(!tasks[index].completed) { 
            setCounter((prevCounter) => prevCounter - 1);
        }
    };

    const clearTasks = () => {
        setTasks([]);
        setCounter(0);
    };

    const filteredTask = tasks.filter(task => {
        if(filter === "encours") return !task.completed; 
        if(filter === "terminees") return task.completed;
        return true; //  toutes 
    })

    return (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Ma Todolist</h2>

            <input
                type="text"
                placeholder="Nouvelle tache"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <h2>Tâches restantes : </h2>
            <p>{counter}</p>
            <button onClick={addTask} style={{ marginLeft: '1rem' }}>Ajouter</button>

            <button onClick={clearTasks} style={{marginLeft: '1rem' }}>Tout effacer</button>

            <div style={{ marginTop: '1rem'}}>
                <button onClick={() => setFilter("toutes")}>Toutes</button>
                <button onClick={() => setFilter("encours")} style={{ marginLeft: '0.5rem' }}>En cours</button>
                <button onClick={() => setFilter("terminees")} style={{ marginLeft: '0.5rem' }}>Terminés</button>
            </div>

            <ul style={{ marginTop: '1rem' }}>
                {filteredTask.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {
                                const updated = [...tasks];
                                updated[index].completed = !updated[index].completed;
                                setTasks(updated);
                                if(!task.completed) { 
                                    setCounter((prevCounter) => prevCounter + 1);
                                } else {
                                    setCounter((prevCounter) => prevCounter - 1);
                                }
                            }}
                        />
                        <span style={{
                            marginLeft: '0.5rem',
                            textDecoration: task.completed ? "line-through" : "none"
                        }}>
                            {task.text}
                        </span>
                        <button onClick={() => removeTask(index)} style={{ marginLeft: '1rem' }}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;