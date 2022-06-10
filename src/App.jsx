
import './App.css';
import DateNow from "./components/DateNow/DateNow";
import AddNewTask from "./components/AddNewTask/AddNewTask"
import {useState} from "react";
import TaskList from "./components/TaskList/TaskList";




function App() {
    const [tasks, setTasks] = useState([]) // Массив постов

    const createTask = (newTask) => { // Создание нового поста
        setTasks([...tasks, newTask])
    }

    const removeTask = (id) => { // Удаление поста
        setTasks([
            ...tasks.filter((task) => task.id !== id)
        ])
    }

    const handleToggle = (id) => { // Изменение статуса выполнен/невыполнен
        setTasks([
            ...tasks.map((task) =>
            task.id === id ? {...task, done: !task.done} : {...task}
            )
            ])
    }


  return (
    <div className="App">
      <div className="main-container">
          {/* Текущие дата и время */}
          <DateNow />
          {/* Форма добавления новой задачи */}
          <AddNewTask
              create={createTask}
              placeholder={"Введите задачу..."}
              btnText={"Создать"}
          />
          {/* Список задач */}
          <TaskList
              taskToggle={handleToggle}
              remove={removeTask}
              tasks={tasks}
          />

      </div>
    </div>
  );
}

export default App;
