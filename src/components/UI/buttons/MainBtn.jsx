import React from 'react';
import "./MainBtn.css"

const MainBtn = ({btnText, ...props}) => {

	return (
		<button {...props} className="main-btn">{btnText}</button>
	);
};

export default MainBtn;