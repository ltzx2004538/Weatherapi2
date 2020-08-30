import React from 'react';
import {Component} from 'react';

class Country extends Component{
    constructor(props) {
		super(props);
		this.defaultValue = 'Which city?';       	
    }
    
    render() {
		return (
			<div className = 'Country'>
				<p>{this.props.country}</p>				
			</div>
		);
	}


}

export default Country;