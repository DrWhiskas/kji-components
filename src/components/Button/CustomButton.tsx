import React from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

export interface CustomButtonProps {
	backgroundColor: string;
	setBackgroundColor: (color: string) => void;
	color?: string
	setColor: (color: string) => void
	borderRadius: string;
	setBorderRadius: (radius: string) => void;
	text: string;
	setText: (text: string) => void;
	textFontSize: string;
	setTextFontSize: (text: string) => void;
}

export default function CustomButton({
	backgroundColor,
	setBackgroundColor,
	color,
	setColor,
	borderRadius,
	setBorderRadius,
	text,
	setText,
	textFontSize,
	setTextFontSize,
	
}: CustomButtonProps) {
	return (
		<section className="custom-modal">
			<div className="modal__custom">
				<h2 className="modal__custom__title">Customize your modal</h2>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Background color
					</h3>
					<HexColorPicker
						color={backgroundColor}
						onChange={setBackgroundColor}
					/>
					<HexColorInput
						className="custom__input"
						color={backgroundColor}
						onChange={setBackgroundColor}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Content background color
					</h3>
					<HexColorPicker color={color} onChange={setColor} />
					<HexColorInput
						className="custom__input"
						color={color}
						onChange={setColor}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Content Border Radius
					</h3>
					<input
						type="number"
						name="borderRadius"
						className="custom__input-number"
						placeholder="10"
						onChange={(event) => setBorderRadius(event.target.value + 'px')}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">Text</h3>
					<input
						type="text"
						name="text"
						className="custom__input-text"
						placeholder="add your title"
						onChange={(event) => setText(event.target.value)}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Font size
					</h3>
					<input
						type="number"
						name="borderRadius"
						className="custom__input-number"
						placeholder="10"
						onChange={(event) => setTextFontSize(event.target.value + 'px')}
					/>
				</div>
			</div>
		</section>
	);
}
