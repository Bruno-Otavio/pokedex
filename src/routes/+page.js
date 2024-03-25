export const load = async ({ fetch }) => {
    const fetchPokemon = async () => {
        const limit = 10;
        const pokemons = [];    

        for (let i = 1; i <= limit; i++) {
            const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            const pokemonData = await pokemonRes.json();
            pokemons.push(pokemonData);
        }

        console.log(pokemons);
        return pokemons;
    };

    return {
        pokemons: await fetchPokemon(),
    }
}