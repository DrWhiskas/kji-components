import React, {useState} from 'react';
import CustomCard from './CustomCard';
import './card.css'

export default function BasicCard() {
     const [backgroundColor, setBackgroundColor] = useState('#2424248f');
			const [contentBackgroundColor, setContentBackgroundColor] =
				useState('white');
			const [contentBorderRadius, setContentBorderRadius] = useState('10');
			const [closeColor, setCloseColor] = useState('black');
			const [contentText, setContentText] = useState('Text');
			const [contentTitle, setContentTitle] = useState('Title');
			const [closeBtnColor, setCloseBtnColor] = useState('black');
			const [submitBtnColor, setSubmitBtnColor] = useState('gray');
	return (
   
		<section className='card'>
                <div className='card__container'
                style={{
                    backgroundColor: contentBackgroundColor,
                    borderRadius: contentBorderRadius,
                    
                }}
                >

                </div>

			<CustomCard
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
