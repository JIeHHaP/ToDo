import React from 'react';
import "./MainCheckbox.css"
import {BsCheckLg} from "react-icons/bs";

const MainCheckbox = () => {
	return (
		<div className="main-checkbox checked">
			<BsCheckLg className="check-icon"/>
		</div>
	);
};

export default MainCheckbox;