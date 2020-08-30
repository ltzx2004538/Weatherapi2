import React, {Component} from 'react';
import './main.scss';
import Current from '../Current_Info/current';
import Forecast from '../Forecast_Info/forecast';
import getWeather from '../../api/weatherAPI';

class Main extends Component {
    constructor (props) {
		super(props);
		this.state ={
			country : 'AU', 
			city : 'Melbourne',
			temp: '100',
			data : null,
			loading : true,
			otherCities: []
		};
		this.handleCityInput = this.handleCityInput.bind(this);
		
	}

    handleCityInput(inputCity){
		const checkedCity = this.checkCityInput(inputCity);
		return this.updateCity(checkedCity);    
	}

	checkCityInput(inputCity){
		const upperCaseinputCity = inputCity.toUpperCase();
		return upperCaseinputCity;
	}

	async updateCity(inputCity){
		this.setState({
			loading: true
		});
		const newWeatherInfo = await getWeather(this.state.country, inputCity);
        if(newWeatherInfo === undefined) {
			this.setState({
				loading : false
			});
			return alert('invalid city or country');
		}
		this.setState({
			city: newWeatherInfo.cityName,
			data: newWeatherInfo,
			loading : false
		});

	}


    async initialRequest () {
		this.setState({
			loading : true
		});
		const country = this.state.country;
		const city = this.state.city;
		const currentData = await getWeather(country, city);
		
		this.setState({
			data : currentData,
			loading : false,
		});
		console.log("2222222");
		console.log(this.state.data.currentInfo.temperature);
	}

	componentDidMount() {
		this.initialRequest();
	}



    render(){
		const loadingStyle = {
			borderRadius : '32px',
		};
		const data = this.state.data;
		const loading = this.state.loading;
        return(
			<div className= 'Main'>
				{loading?
					<div className = 'Current' style = {loadingStyle}>
						<div className = 'loading'>
							Loading...
						</div>
					</div>
				:
					<div>
						<Current  city = {data.city}
						          country = {data.country}
								  currentInfo = {data.currentInfo}	
								  handleCityInput = {this.handleCityInput}			  
					 />
                    <Forecast/> 
					</div>
				}          
            </div>
        );
      
    }
       
    }
    
    export default Main;
   