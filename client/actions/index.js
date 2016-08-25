import fetch from 'isomorphic-fetch';

export const setDisease = (disease) => {
	return {
		type: 'SET_DISEASE',
		disease: disease
	}
}

export const addQuestion = (question) => {
	return {
		type: 'ADD_QUESTION',
		question: question
	}
};

export const removeQuestion = (question) => {
	return {
		type: 'REMOVE_QUESTION',
		question: question
	}
}

export const requestDiseases = () => {
	return {
		type: 'REQUEST_DISEASES'
	}
}

export const receiveDiseases = (diseases) => {
	return {
		type: 'RECEIVE_DISEASES',
		diseases: diseases
	}
}

export const getDiseases = () => {
	return (dispatch) => {
		dispatch(requestDiseases());
		return fetch('foundationmed.com/diseases.json')
			.then(response => response.json())
			.then(json =>
				dispatch(receiveDiseases(json));
			);
	}
}
