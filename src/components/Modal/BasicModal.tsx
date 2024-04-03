import React, { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import CustomModal from './CustomModal';
import { X } from 'lucide-react';
import './modal.css';

export interface ModalProps {
	containerWidth?: string;
	containerHeight?: string;
	containerColor?: string;
}

export default function BasicModal({ ...props }: ModalProps) {
	const [backgroundColor, setBackgroundColor] = useState('#2424248f');
	const [contentBackgroundColor, setContentBackgroundColor] = useState('white');
	const [contentBorderRadius, setContentBorderRadius] = useState('10');
	const [closeColor, setCloseColor] = useState('black');
	const [contentText, setContentText] = useState('Text');
	const [contentTitle, setContentTitle] = useState('Title');
	const [closeBtnColor, setCloseBtnColor] = useState('black');
	const [submitBtnColor, setSubmitBtnColor] = useState('gray');


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
					<h2 className="modal__content__header__title">{contentTitle}</h2>
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
			<CustomModal
				backgroundColor={backgroundColor}
				setBackgroundColor={setBackgroundColor}
				contentBackgroundColor={contentBackgroundColor}
				setContentBackgroundColor={setContentBackgroundColor}
				contentBorderRadius={contentBorderRadius}
				setContentBorderRadius={setContentBorderRadius}
				closeColor={closeColor}
				setCloseColor={setCloseColor}
				contentText={contentText}
				setContentText={setContentText}
				closeBtnColor={closeBtnColor}
				setCloseBtnColor={setCloseBtnColor}
				submitBtnColor={submitBtnColor}
				setSubmitBtnColor={setSubmitBtnColor}
				contentTitle={contentTitle}
				setContentTitle={setContentTitle}
			/>
		</section>
	);
}
