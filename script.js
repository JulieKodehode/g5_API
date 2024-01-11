/*  Metode 1: async/await */

// Define an asynchronous function named fetchCatFact
async function fetchCatFact() {
	try {
		// Use the Fetch API to make a GET request to the Cat Facts API
		const response = await fetch("https://catfact.ninja/facts");

		// Parse the response as JSON
		const catData = await response.json();

		// Log the entire catData object to the console
		console.log(catData);

		// Extract the "fact" property from each object in the "data" array
		const factsArray = catData.data.map((cat) => cat.fact);

		// Find the HTML element with the ID "catFacts"
		const div = document.querySelector("#catFacts");

		// Set the text content of the HTML element to the joined string of cat facts
		div.textContent = factsArray.join(", ");
	} catch (error) {
		// If there is an error during the fetch or processing, catch and handle the error
		console.error("Error:", error.message);
	}
}

// Call the fetchCatFact function to initiate the process of fetching and displaying cat facts
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
			// Extract the "fact" property from each object in the "data" array
			const mappedArray = catFactData.data.map((catData) => catData.fact);

			// Log the array of cat facts to the console
			console.log(mappedArray);

			// Find the HTML element with the ID "moreCatFacts"
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
