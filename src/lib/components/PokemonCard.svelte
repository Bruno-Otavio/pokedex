<script>
    export let pokemon;
    export let img;
    export let types;
</script>

<div class="pokemon-card">
    <div class="image-container">
        <img src={img} alt={pokemon}>
    </div>

    <main class="content">
        
        <h2>{pokemon.toUpperCase()}</h2>

        <div class="types">
            {#each types as type}
                <p>{type.type.name.toUpperCase()}</p>
            {/each}
        </div>
        
    </main>
</div>

<style lang="scss">
    @import "../styles/colors.scss";
    
    $blur-size: 90px;
    $blur-effect: 15px;

    .pokemon-card {
        display: grid;
        place-items: center;

        border-radius: 15px;
        box-shadow: 0px 5px 10px $color-green;
    
        border: 4px solid $color-red;
        transition: box-shadow 250ms ease-in-out;

        padding: 1rem;

        .image-container {
            position: relative;
        }

        .image-container:before {
            content: "";
            position: absolute;

            background-color: $color-lightgreen;
            border-radius: 100%;
            transition: all 150ms ease;

            -webkit-filter: blur($blur-effect);
            -moz-filter: blur($blur-effect);
            -o-filter: blur($blur-effect);
            -ms-filter: blur($blur-effect);
            filter: blur($blur-effect);

            top: calc(100% / 2 - $blur-size / 2);
            bottom: calc(100% / 2 - $blur-size / 2);
            left: calc(100% / 2 - $blur-size / 2);
            right: calc(100% / 2 - $blur-size / 2);

            z-index: -1;

            width: $blur-size;
            height: $blur-size; 

            -webkit-transform: scale(0.1);
            -ms-transform: scale(0.1);
            transform: scale(0.1);
        }
    }

    .pokemon-card:hover {
        .image-container:before {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
</style>