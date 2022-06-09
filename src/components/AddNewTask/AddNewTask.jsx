import React from 'react';
import "./AddNewTask.css"
import MainBtn from "../UI/buttons/MainBtn";
import MainInput from "../UI/inputs/MainInput";
import {useState} from "react";

const AddNewTask = ({placeholder, btnText, create}) => {

	const [taskText, setTaskText] = useState({text: ''})
	const addTask = (e) => {
		e.preventDefault()
		const newTask = {
			...taskText, id: Date.now()
		}
		console.log(newTask)
		create(newTask)
		setTaskText({text: ""})
	}

	return (
		<div className="add-new-task">
			<MainInput
				placeholder = {placeholder}
				value={taskText.text}
				onChange={e => setTaskText({...taskText, text: e.target.value})}
			/>
			<MainBtn
				onClick={addTask}
				btnText = {btnText}
			/>
		</div>
	);
};

export default AddNewTask;