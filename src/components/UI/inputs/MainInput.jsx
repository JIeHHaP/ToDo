import React from 'react';
import "./MainInput.css"

const MainInput = ({...props}) => {
	return (
		<input
			className="main-input"
			type="text"
			{...props}
		/>
	);
};

export default MainInput;