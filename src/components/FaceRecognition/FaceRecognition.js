import React from 'react';
import Tilt from 'react-tilt';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	const displayImage = () => {
		if (imageUrl) {
			return (
				<Tilt
					className='Tilt br2 shadow-2'
					options={{ max: 10, easing: 'cubic-bezier(.03,.98,.52,.99)' }}
				>
					<img
						id='inputImage'
						src={imageUrl}
						alt='uploaded'
						width='500px'
						height='auto'
						className='shadow-5 br3 dim '
					/>
					<div
						className='bounding-box'
						style={{
							top: box.topRow,
							right: box.rightCol,
							left: box.leftCol,
							bottom: box.bottomRow,
						}}
					></div>
				</Tilt>
			);
		}
	};

	return (
		<div className='center ma'>
			<div className='absolute mt2'>{displayImage()}</div>
		</div>
	);
};

export default FaceRecognition;
