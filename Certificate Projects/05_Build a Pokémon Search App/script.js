document.getElementById("search-button").addEventListener("click", async function () {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
    const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`;

    // Clear previous results before fetching new data
    clearResults();

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        updateUI(data);

    } catch (error) {
        alert("Pokémon not found");
    }
});

// Function to clear old search results
function clearResults() {
    document.getElementById("pokemon-name").innerText = "";
    document.getElementById("pokemon-id").innerText = "";
    document.getElementById("weight").innerText = "";
    document.getElementById("height").innerText = "";
    document.getElementById("hp").innerText = "";
    document.getElementById("attack").innerText = "";
    document.getElementById("defense").innerText = "";
    document.getElementById("special-attack").innerText = "";
    document.getElementById("special-defense").innerText = "";
    document.getElementById("speed").innerText = "";
    document.getElementById("types").innerHTML = "";
    document.getElementById("sprite").style.display = "none";
    document.getElementById("pokemon-info").style.display = "none";
}

// Function to update the UI with fetched data
function updateUI(data) {
    document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
    document.getElementById("pokemon-id").innerText = `#${data.id}`;
    document.getElementById("weight").innerText = `Weight: ${data.weight}`;
    document.getElementById("height").innerText = `Height: ${data.height}`;

    // Set Stats
    document.getElementById("hp").innerText = data.stats[0].base_stat;
    document.getElementById("attack").innerText = data.stats[1].base_stat;
    document.getElementById("defense").innerText = data.stats[2].base_stat;
    document.getElementById("special-attack").innerText = data.stats[3].base_stat;
    document.getElementById("special-defense").innerText = data.stats[4].base_stat;
    document.getElementById("speed").innerText = data.stats[5].base_stat;

    // Display sprite
    const sprite = document.getElementById("sprite");
    sprite.src = data.sprites.front_default;
    sprite.style.display = "block";

    // Add types
    const typesContainer = document.getElementById("types");
    data.types.forEach(type => {
        let span = document.createElement("span");
        span.innerText = type.type.name.toUpperCase();
        typesContainer.appendChild(span);
    });

    // Show the results section
    document.getElementById("pokemon-info").style.display = "block";
}
