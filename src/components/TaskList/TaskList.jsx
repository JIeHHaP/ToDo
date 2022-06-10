import React from 'react';
import "./TaskList.css"
import TaskListItem from "../TaskListItem/TaskListItem";

const TaskList = ({tasks, taskToggle, remove}) => {

	const returnTaskStatus = (status, id) => {
		if (status) {
			taskToggle(id)
		}

	}
	return (
		<div className="tasks-list">
			{tasks.map((task) =>
				<TaskListItem
					toggle={returnTaskStatus}
					task={task}
					key={task.id}
				/>
			)}
		</div>
	);
};

export default TaskList;