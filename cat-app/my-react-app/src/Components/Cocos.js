import React from 'react';
import { CocosData } from './CocosData';

const Cocos = ({ cocosIndexPic }) => {
	return (
		<div className='img-container'>
			<img src={CocosData[cocosIndexPic].image} alt='Cat' />
		</div>
	);
};

export default Cocos;
