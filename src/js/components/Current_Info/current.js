import React from 'react';
import Country from './Location/Country/country';
import City from './Location/City/city';
import CurrentInfo from '../WeatherInfo/currentInfo'
import './current.scss';


function Current (props) {
	return (
		<div className = 'Current'>
        <Country country = {props.country}
                 handleCountryInput = {props.handleCountryInput}
                 
        />
        <CurrentInfo    
             temperature = {props.currentInfo.temperature}
             weather = {props.currentInfo.weather}
             humidity = {props.currentInfo.humidity}
             wind = {props.currentInfo.wind}
        />
          <City city = {props.city}
              handleCityInput = {props.handleCityInput}
        />
       
		</div>
	);
}

export default Current;