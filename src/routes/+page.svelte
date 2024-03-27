<script>
    import PokemonCard from '$lib/components/PokemonCard.svelte';
    import "$lib/styles/index.scss";
    
    export let data;
    const { pokemons } = data;
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<main>
    <h1 class="title">Pokemons</h1>

    <div class="container">
        {#each pokemons as pokemon}
            <PokemonCard 
                pokemon={pokemon.name}
                img={pokemon.sprites.front_default}
                types={pokemon.types}
            />
        {/each}
    </div>
</main>

<style lang="scss">
    @import "../lib/styles/colors";

    main {
        display: grid;
        place-items: center;

        .title {
            position: relative;
            
            background-color: $color-red;
            color: $color-white;

            margin: 1rem;
            padding: 1rem;
        }

        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;

            margin-top: 3rem;
            margin-bottom: 3rem;
        }
    }

</style>
