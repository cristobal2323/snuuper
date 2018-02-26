import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3000';

import electronics from '../../public/api/electronics.json';
import movies from '../../public/api/movies.json';
import videogames from '../../public/api/videogames.json';

const API = {
	products: {
		async getAll(station){
			const response = await fetch(`../../public/api/${station}.json`);
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