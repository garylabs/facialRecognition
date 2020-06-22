import React, { Component } from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

class Logo extends Component {
	render() {
		return (
			<div className='ma4 mt0'>
				<Tilt
					className='Tilt br2 shadow-2'
					options={{ max: 35 }}
					style={{ height: 100, width: 100 }}
				>
					<div className='Tilt-inner pa3'>
						<img
							src={brain}
							alt='brain logo'
							style={{ paddingTop: '5px', justifyContent: 'center' }}
						/>
					</div>
				</Tilt>
			</div>
		);
	}
}

export default Logo;
