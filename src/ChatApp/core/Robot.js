import cases from '../data/cases';

class Robot {
	constructor() {
	}

	initialHi(text) {
		return ( text === 'hi' || text === 'hi.' || text === 'hi!' );
	}

	getResponse(text) {
		let response = '';
		const stringLowerCased = text.toLowerCase();
		
		if ( this.initialHi( stringLowerCased ) ) {
			response = cases[' hi'];

		} else {
			for (let key in cases) {
		        if (stringLowerCased.indexOf(key) >= 0) {
		            response = cases[key];
		            return response;
		        } else {
		        	let ran = Math.floor( (Math.random() * ( cases.other.length ) ) );
					response = cases.other[ran];	
		      	}
		    }
		}
		
		return response;
	}
}

export default Robot