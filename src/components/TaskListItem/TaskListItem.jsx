import React from 'react';
import MainCheckbox from "../UI/checkboxes/MainCheckbox";
import DeleteBtn from "../UI/buttons/DeleteBtn";
import "./TaskListItem.css"

const TaskListItem = ({taskText, done}) => {
	return (
		<div className="task">
			<MainCheckbox/>
			{done
			? <span className="task-text done">{taskText}</span>
			: <span className="task-text">{taskText}</span>
			}
			<DeleteBtn />
		</div>
	);
};

export default TaskListItem;