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
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

//======================================================================================================================//

/*
const crearTarjeta = () => {
	topMusic.forEach((artista) => {
		disco.querySelector('img').setAttribute('src', artista.trackMetadata.displayImageUri)
		disco.querySelectorAll('p')[0].textContent = artista.trackMetadata.artists[0].name
		disco.querySelectorAll('p')[1].textContent = artista.trackMetadata.trackName[0].name

		const clone = disco.cloneNode(true)
		fragment.appendChild(clone)
	})
	cardsMusic.appendChild(fragment)
}
*/