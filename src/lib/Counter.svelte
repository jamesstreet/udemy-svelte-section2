<script>
    export let initialCount;
    export let maxCount = 10;

    let count = initialCount;
    let str = '';

    $: str = `clicked ${count}`;

    $: {
        console.log(`count is ${count}`);
    }

    function increment() {
        if (count >= maxCount) return;
        count += 1;
    }
</script>

<button on:click={increment}>Clicks {count}</button>
<h3>{str}</h3>

<style>
    button {
        background-color: yellow;
        color: blue;
        border: none;
        border-radius: 4px;
        padding: 0.5em 1em;
    }
</style>
