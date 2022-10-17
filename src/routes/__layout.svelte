<script>
	import '$styles/app.scss';
	import Header from '$components/Header.svelte';
</script>

<Header />

<main class="container flex flex-col justify-around mx-auto pt-16"><slot /></main>
