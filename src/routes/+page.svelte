<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import Footer from "$components/organisms/Footer.svelte";
	import PreFooter from "$atoms/PreFooter.svelte";
</script>

<template lang="pug">

	//- head
	svelte:head
		meta(charset="utf-8")
		meta(name="description", content="A node starter template for the Svelte, Typescript, TailwindCSS, and Pug stack.")
		meta(name="viewport", content="width=device-width")

		link(rel="preconnect", href="https://fonts.googleapis.com")
		link(rel="preconnect", href="https://fonts.gstatic.com", crossorigin)
		link(rel="stylesheet", href="Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap")

		title hi
		
	//- body
	main
		p hi

	//- footer
	Footer(
		authorLink="https://www.linkedin.com/in/choijames/",
		orgLink="https://wcoding.com/"
	)
		svelte:fragment(slot="author") James Choi
		svelte:fragment(slot="org") wcoding
</template>
