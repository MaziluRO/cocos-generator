import React from 'react';

const Button = ({ onPress }) => {
	return (
		<button className='btn' onClick={onPress}>
			Random Cocos
		</button>
	);
};

export default Button;
