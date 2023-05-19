<script>
    import Counter from './lib/Counter.svelte';

    const vals = {
        maxCount: 10,
        initialCount: 5
    };
</script>

<Counter {...vals} />

<style>
</style>
