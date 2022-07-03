import { useState } from 'react';
import Cocos from './Cocos';
import './styles.css';
import Button from './Button';

const Main = () => {
	const [cocosIndex, setCocosIndex] = useState(0);

	const randomIndex = () => {
		const randomNr = Math.floor(Math.random() * 4);

		if (randomNr === cocosIndex) {
			return randomIndex();
		}
		return randomNr;
	};

	const randomCocosHandler = () => {
		const randomNr = randomIndex();
		setCocosIndex(randomNr);
	};

	return (
		<div className='container'>
			<div className='box'>
				<h1>😺 Random Cocos generator 😺</h1>

				<div className='results-container'>
					<Cocos cocosIndexPic={cocosIndex}></Cocos>
				</div>
				<Button onPress={randomCocosHandler}></Button>
			</div>
		</div>
	);
};

export default Main;
