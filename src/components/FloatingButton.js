import React, { Component } from "react";
import "../styles/FloatingButton.css";
import telegram from "../images/telegram_white.png";

export default class FloatingButton extends Component {
	render = () => {
		return (
			<a className="floating-btn" href="https://web.telegram.org/#/im?p=@ekkbaz" target="_blank">
				<img src={telegram} alt="floating icon" className="floating-icon" />
			</a>
		);
	};
}
