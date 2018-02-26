const initialState = {
	productList:{
		products: [],
		error: null,
		loading: false,
		station: null,
		success: false,
		stationNivel: 0,
		api: ['electronics', 'videogames', 'movies'] 
	},
	activeProduct:{
		product: null,
		error: null,
		loading: false
	},
	cart:{
		items: [],
		total: 0
	}
};

export default initialState;