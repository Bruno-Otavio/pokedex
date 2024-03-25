<script>
    export let data;
    const { pokemons } = data;
</script>

<main>
    <h1>Pokemons</h1>
    {#each pokemons as pokemon}
        <img src={pokemon.sprites.front_default} alt={`pokemon-${pokemon.id}`}>
        <p><strong>Name:</strong> {pokemon.name.toUpperCase()}</p>
    {/each}
</main>