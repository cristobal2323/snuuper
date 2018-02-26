import fetch from 'isomorphic-fetch';

const baseURL = 'https://api-gauss.herokuapp.com/api';
//const baseURL = 'http://localhost:3001/api';

const API = {
	products: {
		async getAll(station){
			const response = await fetch(`./api/${station}.json`);
			const data = await response.json();
			return data;
		},
		async save (item) {
      		const response = await fetch(`${baseURL}/product`, {
	        method: 'POST',
	        headers: new Headers({
	        	'Content-Type': 'application/json',
	        	Accept: 'application/json'
	        }),
	        body: JSON.stringify(item)
	      	});
		    const data = await response.json();
		    return data;
    	}
		
	}
}

export default API;