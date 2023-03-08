const cardsMusic = document.getElementById('cards')
const disco = document.getElementById('disco').content
const fragment = document.createDocumentFragment()
let topMusic = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusic()
})

const loadMusic = () => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '598a3f24edmshb22f1060189817cp14ae81jsnbf93be7e446c',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

fetch('https://odds.p.rapidapi.com/v4/sports?all=true', options)
	.then(response => response.json())
	.then(response => {
		topMusic = response
		crearTarjeta()
	})
	.catch(err => console.error(err));
}

const crearTarjeta = () => {
	topMusic.forEach((artista) => {
		disco.querySelectorAll('p')[0].textContent = artista.title
		disco.querySelectorAll('p')[1].textContent = artista.description
		/*
		disco.querySelectorAll('p')[1].textContent = artista.trackMetadata.trackName[0].name
		*/
		const clone = disco.cloneNode(true)
		fragment.appendChild(clone)
	})
	cardsMusic.appendChild(fragment)
}