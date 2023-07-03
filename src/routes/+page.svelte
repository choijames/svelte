<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import ButtonLink from "$atoms/ButtonLink.svelte";
	import Footer from "$components/organisms/Footer.svelte";
	import LogosGrid from "$molecules/LogosGrid.svelte";
	import PreFooter from "$atoms/PreFooter.svelte";

	// types
	import type { LayoutData } from "./$types";

	// catch data from layout function in +layout.ts
	export let data: LayoutData;
</script>

<template lang="pug">

	//- head
	svelte:head
		meta(charset="utf-8")
		meta(name="description", content="A node starter template for the Svelte, Typescript, TailwindCSS, and Pug stack.")
		meta(name="viewport", content="width=device-width")

		title hi

	//- body
	main
		p hi

	//- pre-footer
	PreFooter(
		targetUrl="https://pugify.dev",
		title="convert HTML to pug"
	)
		svelte:fragment(slot="default") Also check out the ad-free HTML to Pug converter @ https://pugify.dev

	//- footer
	Footer(
		authorLink="https://fosstodon.org/@kevinpeckham",
		orgLink="https://lightningjar.com"
	)
		svelte:fragment(slot="author") Kevin Peckham
		svelte:fragment(slot="org") Lightning Jar
</template>
