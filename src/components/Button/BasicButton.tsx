import React, { useState } from 'react';
import CustomBtn from './CustomButton';
import Header from '../Header/Header';
import './basicButton.css'

export interface ButtonProps {
	containerWidth?: string;
	containerHeight?: string;
	containerColor?: string;
}

export default function BasicButton({ ...props }: ButtonProps) {
	const [backgroundColor, setBackgroundColor] = useState('#2424248f');
	const [color, setColor] = useState('white');
	const [borderRadius, setBorderRadius] = useState('Text');
	const [text, setText] = useState('Button');
	const [textFontSize, setTextFontSize] = useState('10')

	return (
		<section className="page-button">
			<Header/>
			<button
				className="btn"
				style={{
					backgroundColor: backgroundColor,
					color: color,
					borderRadius: borderRadius,
					fontSize: textFontSize,
				}}
			>
				{text}
			</button>
			<CustomBtn
				backgroundColor={backgroundColor}
				setBackgroundColor={setBackgroundColor}
				color={color}
				setColor={setColor}
				borderRadius={borderRadius}
				setBorderRadius={setBorderRadius}
				text={text}
				setText={setText}
				textFontSize={textFontSize}
				setTextFontSize={setTextFontSize}
			/>
		</section>
	);
}