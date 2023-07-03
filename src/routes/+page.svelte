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
		meta(
			content="A node starter template for the Svelte, Typescript, TailwindCSS, and Pug stack.",
			name="description"
		)
		meta(content="width=device-width", name="viewport")

		link(href="https://fonts.googleapis.com", rel="preconnect")
		link(crossorigin, href="https://fonts.gstatic.com", rel="preconnect")
		link(
			href="Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
			rel="stylesheet"
		)

		title hi

	//- body
	main
		article
			header
				h1 Learning how to display data with css
				p James Choi

	//- footer
	Footer(
		authorLink="https://www.linkedin.com/in/choijames/",
		orgLink="https://wcoding.com/"
	)
		svelte:fragment(slot="author") James Choi
		svelte:fragment(slot="org") wcoding
</template>
