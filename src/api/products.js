const OFFSET = 0;
const LIMIT = 40;

export const getProducts = () => {
	return fetch(`https://api.escuelajs.co/api/v1/products?offset=${OFFSET}&limit=${LIMIT}`)
		.then(response => response.json())
}

export const getProduct = (id, allIDs) => {
	console.log(id, allIDs)
	if (allIDs.includes(+id)) {
		return fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then(response => response.json())
	} else {
		return Promise.reject('incorrect request');
	}
}