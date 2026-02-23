import { printPokemon } from "./dom.js";

async function cargarPokemon() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=16");
    const datos = await respuesta.json();

    const detallesPokemon = await Promise.all(
        datos.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
        })
    );

    return detallesPokemon;
}

async function mostrarPokemon() {
    const listaPokemon = await cargarPokemon();
    printPokemon(listaPokemon);
}

const boton = document.getElementById("btnCargarPokemon");
boton.addEventListener("click", mostrarPokemon);