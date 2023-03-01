document.addEventListener('DOMContentLoaded', () => { //No espera a que se carguen las hojas de estilo,
    CargarDatos() //cargara los datos al iniciar la pagina
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '598a3f24edmshb22f1060189817cp14ae81jsnbf93be7e446c',
		'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
	}
};

fetch('https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07&range=1-10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));