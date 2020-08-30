import React from 'react';
import {Component} from 'react';

class City extends Component{
    constructor(props) {
		super(props);
        this.defaultValue = 'Which city?';  
        this.state = {
			cityValue : this.defaultValue,
        };
        this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);     	
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("test submit  " + this.state.cityValue)
		this.props.handleCityInput(this.state.cityValue);
    }

    handleChange(e) {
        this.updateDisplay(e.target.value);
    }

    updateDisplay(inputValue) {
		this.setState({
			cityValue: inputValue
		});
    }
    
    handleFocus(e) {
		if (this.state.cityValue === this.defaultValue) {
			this.updateDisplay('');
		}	
	}
    
    handleBlur(e) {
		if (this.state.cityValue === '') {
			this.updateDisplay(this.defaultValue);
		}	
    }
    
    render() {
		return (
			<div className = 'City'>
				<p>{this.props.city}</p>
                <form       className='City__form' 
                            onSubmit={this.handleSubmit}>

				    <input  className='City__form__input'
							value={this.state.cityValue}
							onChange={this.handleChange}
							onFocus={this.handleFocus}
							onBlur={this.handleBlur}
					/>
				</form>				
			</div>
            
		);
	}


}



export default City;