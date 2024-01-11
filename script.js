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
// fetchCatFact();

/* Metode 2 response.then() */
