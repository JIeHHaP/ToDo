
import './App.css';
import DateNow from "./components/DateNow/DateNow";
import AddNewTask from "./components/AddNewTask/AddNewTask"
import TaskListItem from "./components/TaskListItem/TaskListItem";
import {useState} from "react";




function App() {
    const [tasks, setTasks] = useState([])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

  return (
    <div className="App">
      <div className="main-container">
          <DateNow />
          <AddNewTask
              create={createTask}
              placeholder={"Введите задачу..."}
              btnText={"Создать"}
          />
          <div className="tasks-list">
              <TaskListItem
                  taskText={"Уборка на кухне"}
              />
          </div>
      </div>
    </div>
  );
}

export default App;
