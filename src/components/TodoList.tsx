import React, { useState } from 'react';

type Task = {
    text: string;
    completed: boolean;
};

function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState<string>("");

    const addTask = () => {
        if (input.trim() !== "") {
            const newTask : Task = { text: input.trim(), completed: false};
            setTasks([...tasks, newTask]);
            setInput("");
        }
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index))
    };

    const clearTasks = () => {
        setTasks([]);
    };

    return (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Ma Todolist</h2>

            <input
                type="text"
                placeholder="Nouvelle tache"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTask} style={{ marginLeft: '1rem' }}>Ajouter</button>

            <button onClick={clearTasks} style={{marginLeft: '1rem' }}>Tout effacer</button>

            <ul style={{ marginTop: '1rem' }}>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {
                                const updated = [...tasks];
                                updated[index].completed = !updated[index].completed;
                                setTasks(updated);
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