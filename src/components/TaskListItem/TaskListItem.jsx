import React from 'react';
import MainCheckbox from "../UI/checkboxes/MainCheckbox";
import DeleteBtn from "../UI/buttons/DeleteBtn";
import "./TaskListItem.css"

const TaskListItem = ({task, toggle}) => {

	const returnStatus = (status) => {
		toggle(status, task.id)
	}

	return (
		<div className="task" >
			<MainCheckbox
				returnStatus={returnStatus}
			/>
			 <span className={`task-text ${task.done ? "done" : ""}`}>{task.text}</span>
			<DeleteBtn />
		</div>
	);
};

export default TaskListItem;