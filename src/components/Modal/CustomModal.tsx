import React from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

export interface CustomModalProps {
	backgroundColor: string;
	setBackgroundColor: (color: string) => void;
	contentBackgroundColor: string;
	setContentBackgroundColor: (color: string) => void;
	contentBorderRadius: string;
	setContentBorderRadius: (radius: string) => void;
	closeColor: string;
	setCloseColor: (color: string) => void;
	contentText: string;
	setContentText: (text: string) => void;
	closeBtnColor: string;
	setCloseBtnColor: (color: string) => void;
	submitBtnColor: string;
	setSubmitBtnColor: (color: string) => void;
	contentTitle?: string;
	setContentTitle: (text: string) => void
}

export default function CustomModal({
	backgroundColor,
	setBackgroundColor,
	contentBackgroundColor,
	setContentBackgroundColor,
	contentBorderRadius,
	setContentBorderRadius,
	closeColor,
	setCloseColor,
	contentText,
	setContentText,
	closeBtnColor,
	setCloseBtnColor,
	submitBtnColor,
	setSubmitBtnColor,
	contentTitle,
	setContentTitle,
}: CustomModalProps) {
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
					<HexColorPicker
						color={contentBackgroundColor}
						onChange={setContentBackgroundColor}
					/>
					<HexColorInput
						className="custom__input"
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
						className="custom__input-number"
						placeholder="10"
						onChange={(event) =>
							setContentBorderRadius(event.target.value + 'px')
						}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">Title</h3>
					<input
						type="text"
						name="text"
						className="custom__input-text"
						placeholder="add your title"
						onChange={(event) => setContentTitle(event.target.value)}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Text content
					</h3>
					<input
						type="text"
						name="text"
						className="custom__input-text"
						placeholder="add your text"
						onChange={(event) => setContentText(event.target.value)}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Close color
					</h3>
					<HexColorPicker color={closeColor} onChange={setCloseColor} />
					<HexColorInput
						className="custom__input"
						color={closeColor}
						onChange={setCloseColor}
					/>
				</div>
				{/* BTN */}
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Button 1 color
					</h3>
					<HexColorPicker color={submitBtnColor} onChange={setSubmitBtnColor} />
					<HexColorInput
						className="custom__input"
						color={submitBtnColor}
						onChange={setSubmitBtnColor}
					/>
				</div>
				<div className="modal__custom__container">
					<h3 className="modal__custom__container__subtitle subtitle">
						Button 2 color
					</h3>
					<HexColorPicker color={closeBtnColor} onChange={setCloseBtnColor} />
					<HexColorInput
						className="custom__input"
						color={closeBtnColor}
						onChange={setCloseBtnColor}
					/>
				</div>
			</div>
		</section>
	);
}
