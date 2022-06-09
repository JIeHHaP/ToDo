import React from 'react';
import "./DateNow.css"

const DateNow = () => {
	const date = new Date();
	const monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентяюрь", "октябрь", "ноябрь", "декабрь"]
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	let minutes = date.getMinutes();
	let hours = date.getHours();

	function formattingDate (date) {
		if (date.getDate() < 10) {
			day = `0${day}`
		}
		month = monthNames[month]
		if (date.getMinutes() < 10) {
			minutes = `0${minutes}`
		}
		if (date.getHours() < 10) {
			hours = `0${hours}`
		}

	}
	formattingDate(date)
	const formattedDate = `${day} / ${month.toUpperCase()} / ${year}`
	const formattedTime = `${hours}:${minutes}`;
	return (
		<div className="date-and-time">
			<span className="date">{formattedDate}</span>
			<span className="time">{formattedTime}</span>
		</div>
	);
};

export default DateNow;