import React from 'react';
import "./AddNewTask.css"
import MainBtn from "../UI/buttons/MainBtn";
import MainInput from "../UI/inputs/MainInput";
import {useState} from "react";

const AddNewTask = ({placeholder, btnText, create}) => {

	const [taskText, setTaskText] = useState({text: ""})
	const addTask = (e) => {
		e.preventDefault()
		const newTask = {
			id: Date.now(),
			...taskText,
			done: false
		}
		console.log(newTask)
		create(newTask)
		setTaskText({text: ""})
	}


	return (
		<form className="add-new-task">
			<MainInput
				placeholder = {placeholder}
				value={taskText.text}
				onChange={e => setTaskText({...taskText, text: e.target.value})}
			/>
			<MainBtn
				onClick={addTask}
				btnText = {btnText}
			/>
		</form>
	);
};

export default AddNewTask;