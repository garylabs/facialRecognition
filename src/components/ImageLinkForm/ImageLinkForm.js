import React, { Component } from 'react';
import Tilt from 'react-tilt';

import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>{'This Magic Brain will detect faces'}</p>
			<div className='center'>
				<Tilt
					className='Tilt br2 shadow-2'
					options={{ max: 10, easing: 'cubic-bezier(.03,.98,.52,.99)' }}
				>
					<div className='pa4 br3 shadow-5 center form grow'>
						<input
							type='text'
							className='f4 pa2 w-70 center'
							onChange={onInputChange}
						/>
						<button
							className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple grow'
							onClick={onButtonSubmit}
						>
							{'Detect'}
						</button>
					</div>
				</Tilt>
			</div>
		</div>
	);
};

export default ImageLinkForm;
