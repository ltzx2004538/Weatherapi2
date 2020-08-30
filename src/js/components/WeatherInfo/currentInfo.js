import React from 'react';


function CurrentInfo (props) {
	return (
		<div className = 'CurrentInfo'>
			<div className = 'CurrentInfo__temperature'>
				<span>{props.temperature} °</span>
			</div>
			<div className = 'CurrentInfo__weather'>
				<span>{props.weather}</span>
			</div>
			<div className = 'CurrentInfo__Items'>
				<div className = 'CurrentInfo__Leftitem'>
					<span>HUMIDITY</span>
					<br/>
					<span>{props.humidity}%</span>
				</div>
				<div className = 'CurrentInfo__Rightitem'>
					<span>WIND</span>
					<br/>
					<span>{props.wind} K/M</span>
				</div>
			</div>
		</div>
	);
}

export default CurrentInfo;