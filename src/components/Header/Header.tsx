import React from "react";
import './header.css'
import { Link } from "react-router-dom";
export default function Header(){
    return (
			<header className="header">
				<div className="header__container">
					<ul className="header__container__list">
						<li className="header__container__list__links">
							<Link className="header__container__list__links__link" to="/home">
								Modal
							</Link>
						</li>
						<li>
							<Link className="header__container__list__links__link" to="/button">
								Button
							</Link>
						</li>
						<li>
							<Link className="header__container__list__links__link" to="/card">
								Card
							</Link>
						</li>
					</ul>
				</div>
			</header>
		);
}