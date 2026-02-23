function crearTarjetaPokemon(pokemon) {
    return `<article class="pokemon-card">
        <div class="pokemon-header">
            <h2>${pokemon.name.toUpperCase()}</h2>
        </div>

        <div class="pokemon-content">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />

            <div class="info-block">
                <strong>Altura:</strong> ${pokemon.height}
            </div>

            <div class="info-block">
                <strong>Peso:</strong> ${pokemon.weight}
            </div>

            <div class="info-block">
                <strong>Tipo:</strong> 
                ${pokemon.types.map(t => t.type.name).join(", ")}
            </div>
        </div>
    </article>`;
}

export function printPokemon(listaPokemon) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    listaPokemon.forEach((pokemon) => {
        contenedor.innerHTML += crearTarjetaPokemon(pokemon);
    });
}