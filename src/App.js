import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Main from "./components/Main";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState([])

  const handleDelete = async(tid) => {
    // let filterTask = tasks.filter(({id}) => id !== tid )
    // setTasks(filterTask)
    await axios.delete('http://localhost:3000/posts/' + tid)
    getTask()
  }

  const getTask = async() => {
    const res = await axios.get('http://localhost:3000/posts')
    setTasks(res.data)
  }
  const addTask = async(newTask) => {
    await axios.post('http://localhost:3000/posts', newTask)
    getTask()
  }

  const editTask = async(editId) => {
    const res = await axios.get('http://localhost:3000/posts/' + editId)
    await axios.patch('http://localhost:3000/posts/' + editId,{complated: !res.data.complated} )
    getTask()
  }


  useEffect(() => {
    getTask()
  }, [])
  


  return (
    <div className="h-screen bg-slate-800 p-10">
      <Main setShowModal={setShowModal} handleDelete={handleDelete} tasks={tasks} editTask={editTask}/>
      <AddTask showModal={showModal} setShowModal={setShowModal} setTasks={setTasks} tasks={tasks} addTask={addTask}/>
    </div>
  );
}

export default App;