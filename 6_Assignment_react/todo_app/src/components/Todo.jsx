import React from "react";
import {useState} from 'react'


const Todo = () => {
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);
const [editIndex, setEditIndex] = useState(null);

const Add_task =(e) => {
    if(task.trim() ==="") return;

    if (editIndex !== null){
        const updatedTasks = [...tasks]; //isme hmne sare tasks ko ek new variable updatedTask me store kr liya he q ki hme hmesa copy wale variable me kam karna chahiye

        updatedTasks[editIndex] = task; // isme array wale tasks ki list se edite krne wale task ko 
        // nikala hai aur tsak hai wo input field se aa raha hai

        setTasks(updatedTasks.sort());
        setEditIndex(null)

    }
    else {
        setTasks([...tasks, task].sort())
    }
    setTask("") // input field reset kiya

};

const EditTask = (index)=>{
    setTask(tasks[index]) // Edit karne ke liye old task set kiya
    setEditIndex(index) // // Edit mode enable kiya
}

const DeleteTask = (index) =>{
    setTasks(tasks.filter((_, i) => i !== index)); 
    
    // array.filter(...) method do parameters leta hai (value, index).
    // Agar hume value ki zaroorat nahi ho, to hum "_" ka use karte hain (ignore karne ke liye).
    // Yaha hum sirf index compare kar rahe hain, taki jo index delete karna hai wo hata sake.
}

    return (
        <div className="min-h-screen flex items-center justify-center p-5">
            <div className=" bg-gray-700 shadow-lg rounded-lg p-6 w-200">
                <h1 className="text-2xl font-bold text-white text-center mb-4">To-Do List</h1>

                {/* Input Field */}
                <div className="flex items-center gap-2 mb-4">
                    <input
                        type="text"
                        value={task}
                        onChange={(e)=> setTask(e.target.value)}
                        onKeyPress={(e)=> e.key ==="Enter" && Add_task()}
                        className="flex-1 p-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a new task..."
                    />
                    <button onClick={Add_task} className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600 w-40">
                        Add
                    </button>
                </div>

                {/* To-Do List */}
                <ul className="space-y-2">
                    {tasks.map((t, index) => (
                         <li key={index} className="flex justify-between items-center p-3 bg-purple-500 rounded-lg">
                         <span className="text-white">{t}</span>
                         <div className="flex gap-3">
                             <button onClick={() => EditTask(index)} className="text-yellow-300 hover:text-yellow-500">✏️</button>
                             <button onClick={() => DeleteTask(index)} className="text-red-400 hover:text-red-700">❌</button>
                         </div>
                     </li>
                    ))}
                   
                </ul>
            </div>
        </div>
    );
};

export default Todo;
