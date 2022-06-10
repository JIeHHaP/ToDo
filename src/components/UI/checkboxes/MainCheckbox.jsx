import React, {useState} from 'react';
import "./MainCheckbox.css"
import { useSpring, animated, config, useChain, useSpringRef } from 'react-spring'

const MainCheckbox = ({returnStatus}) => {
	const [isChecked, setIsChecked] = useState(false)
	const checkboxAnimationRef = useSpringRef()
	const checkboxAnimationStyle = useSpring({
		backgroundColor: isChecked ? "#ff7179" : "#fff",
		borderColor: isChecked ? "#ff7179" : "",
		config: config.gentle,
		ref: checkboxAnimationRef
	})

	const [checkMarkLength, setCheckMarkLength] = useState(null)
	const checkMarkAnimationRef = useSpringRef()
	const checkMarkAnimationStyle = useSpring({
		x: isChecked ? 0 : checkMarkLength,
		config: config.gentle,
		ref: checkMarkAnimationRef
	})

	useChain(
		isChecked
		? [checkboxAnimationRef, checkMarkAnimationRef]
			: [checkMarkAnimationRef, checkboxAnimationRef],
		[0, 0.1]
	)

	return (
		<label className="checkbox-container">
			<input
				className="custom-checkbox"
				type="checkbox"
				onChange={() => {
					setIsChecked(!isChecked)
					returnStatus(isChecked)
				}}
			/>
			<animated.svg
				style={checkboxAnimationStyle}
				className="checkbox"
				aria-hidden="true"
				viewBox="0 0 15 11"
				fill="none"
			>
				<animated.path
					d="M1 4.5L5 9L14 1"
					strokeWidth="3"
					stroke="#fff"
					strokeDasharray={checkMarkLength}
					strokeDashoffset={checkMarkAnimationStyle.x}
					ref={(ref) => {
						if(ref){
							setCheckMarkLength(ref.getTotalLength());
						}
					}}
				/>
			</animated.svg>
		</label>
	);
};

export default MainCheckbox;