import React, { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { X } from 'lucide-react';
import '../styles/modal.css';

export interface ModalProps {
	containerWidth?: string;
	containerHeight?: string;
	containerColor?: string;
}

export default function Modal({ ...props }: ModalProps) {
	// CUSTOM
	// Container
	const [backgroundColor, setBackgroundColor] = useState('#2424248f');
	// Content
	const [contentBackgroundColor, setContentBackgroundColor] = useState('white');
    const [contentBorderRadius, setContentBorderRadius] = useState('10');
	const [closeColor, setCloseColor] = useState('black');
    // TEXT
	const [contentText, setContentText]= useState('Text')
    //BTN
    const [closeBtnColor, setCloseBtnColor] = useState('black');
    const [submitBtnColor, setSubmitBtnColor] = useState('gray');



	console.log(backgroundColor);

	return (
		<section
			className="modal"
			style={{
				backgroundColor: backgroundColor,
			}}
		>
			<div
				className="modal__content"
				style={{
					backgroundColor: contentBackgroundColor,
					borderRadius: contentBorderRadius,
				}}
			>
				<div className="modal__content__header">
					<h2 className="modal__content__header__title">Title</h2>
					<button
						className="modal__content__close"
						style={{ color: closeColor }}
					>
						<X />
					</button>
				</div>
				<p className="modal__content__text">{contentText}</p>
				<div className="modal__content__footer">
					<button
						className="modal__content__footer__btn save"
						style={{
							backgroundColor: submitBtnColor,
							borderRadius: contentBorderRadius,
						}}
					>
						Submit
					</button>
					<button
						className="modal__content__footer__btn"
						style={{
							backgroundColor: closeBtnColor,
							borderRadius: contentBorderRadius,
						}}
					>
						Close
					</button>
				</div>
			</div>
			{/* CUSTOM */}
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
					<HexColorInput className='custom__input'
						color={backgroundColor}
						onChange={setBackgroundColor}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Content background color
					</h3>
					<HexColorPicker
						color={contentBackgroundColor}
						onChange={setContentBackgroundColor}
					/>
					<HexColorInput className='custom__input'
						color={contentBackgroundColor}
						onChange={setContentBackgroundColor}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Content Border Radius
					</h3>
					<input
						type="number"
						name="borderRadius"
						placeholder="10"
						onChange={(event) =>
							setContentBorderRadius(event.target.value + 'px')
						}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Text content
					</h3>
					<input
						type="text"
						name="text"
						placeholder="Text"
						onChange={(event) => setContentText(event.target.value )}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Close color
					</h3>
					<HexColorPicker color={closeColor} onChange={setCloseColor} />
					<HexColorInput className='custom__input' color={closeColor} onChange={setCloseColor} />
				</div>

				{/* BTN */}

				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Button 1 color
					</h3>
					<HexColorPicker color={submitBtnColor} onChange={setSubmitBtnColor} />
					<HexColorInput className='custom__input' color={submitBtnColor} onChange={setSubmitBtnColor} />
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Button 2 color
					</h3>
					<HexColorPicker color={closeBtnColor} onChange={setCloseBtnColor} />
					<HexColorInput className='custom__input' color={closeBtnColor} onChange={setCloseBtnColor} />
				</div>
			</div>
		</section>
	);
}
