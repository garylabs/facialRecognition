import React, { Fragment, Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Clarifai from 'clarifai';
import 'tachyons';
import './App.css';
import Register from './components/Register/Register';

const app = new Clarifai.App({
	apiKey: '5e348b3744e94cafa44838c8567b1f2e',
});
class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: '',
			box: {},
			route: 'signin',
			isSignedIn: false,
		};
	}

	calculateFaceLocation = data => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputImage');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};

	displayFaceBox = box => {
		this.setState({ box }, () => console.log(this.state.box));
	};

	onInputChange = e => {
		this.setState({ input: e.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
			.then(response =>
				this.displayFaceBox(this.calculateFaceLocation(response))
			)
			.catch(err => console.log(err));
	};

	onRouteChange = page => {
		this.setState({ route: page }, () => {
			this.state.route === 'home'
				? this.setState({ isSignedIn: true })
				: this.setState({ isSignedIn: false });
		});
	};

	render() {
		const particlesOptions = {
			particles: {
				number: {
					value: 100,
					density: {
						enable: true,
						value_area: 800,
					},
				},
			},
		};
		return (
			<div className='App'>
				<Particles params={particlesOptions} className='particles' />
				<Navigation
					onRouteChange={this.onRouteChange}
					isSignedIn={this.state.isSignedIn}
				/>
				{this.state.route === 'home' ? (
					<Fragment>
						<Logo />
						<Rank />
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
						/>
						<FaceRecognition
							imageUrl={this.state.imageUrl}
							box={this.state.box}
						/>
					</Fragment>
				) : this.state.route === 'signin' ? (
					<SignIn onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;
