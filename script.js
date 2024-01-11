// Metode 1: async/await
async function fetchCatFact() {
	try {
		// HENT
		// En variabel som bruker "await" vil vente til et løfte er oppnådd for å kjøres
		// fetch() er en teknikk på lik linje som document.querySelector som henter noe data
		const response = await fetch("https://catfact.ninja/facts");

		// MODIFISER
		// En variabel som venter på å at et løfte er oppnådd for å lagre dataen som ble hentet i variabelen response
		const catData = await response.json();

		// Kjører dataen gjennom en for loop for å vise all informasjonen
		for (let i = 0; i < 0; i++) {
			console.log(cat.fact);
		}

		// SEND
		// Viser dataen hentet til console
		console.log(catData);

		// Mapper gjennom data og setter det opp som en string istedenfor et json
		// Denne variabelen vil nå inneholde en liste der hvert element tilsvarer verdien av fakta hentet fra den opprinnelige listen av objekter.
		const factsArray = catData.data.map((cat) => cat.fact);

		// Henter et document element og sender tilbake innhold
		const div = document.querySelector("#catFacts");
		div.textContent = factsArray.join(", "); // lagt til metoden .join og lagt til et komma og et mellomrom for å skille mellom fakta
	} catch (error) {
		// console.error er en metode som logger ut en error om det skjer en feil i koden over
		console.error("Error:", error.message);
	}
}

// Denne funksjonen er aktivert med et call i javascript. Normaltvis ville funksjonen vært lagt til en eventlistener eller en onclick
fetchCatFact();

/* Metode 2 response.then() */

// Define a function named catFactGenerator
function catFactGenerator() {
	// Use the Fetch API to make a GET request to the Cat Facts API
	fetch("https://catfact.ninja/facts")
		// Parse the response as JSON
		.then((response) => response.json())

		// Once the JSON data is obtained, handle it in the next .then block
		.then((catFactData) => {
			// Extract the 'fact' property from each object in the 'data' array
			const mappedArray = catFactData.data.map((catData) => catData.fact);

			// Log the array of cat facts to the console
			console.log(mappedArray);

			// Find the HTML element with the ID 'moreCatFacts'
			const moreCatFacts = document.querySelector("#moreCatFacts");

			// Set the text content of the HTML element to the joined string of cat facts
			moreCatFacts.textContent = mappedArray.join(", ");
		})

		// If there is an error during the fetch or processing, catch and handle the error
		.catch((error) => {
			console.error("Error:", error.message);
		});
}

// Call the catFactGenerator function to initiate the process of fetching and displaying cat facts
catFactGenerator();
