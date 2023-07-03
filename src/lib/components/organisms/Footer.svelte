<!--
@component
Web footer component
* prop authorLink: string -- link to author's website
* prop orgLink: string -- link to organization's website
* slot author -- author's name
* slot org -- organization's name
-->
<script lang="ts">
	export let authorLink = "#";
	export let orgLink = "#";
</script>

<template lang="pug">
	footer.space-x-8.bg-dark
		// author
		a(
			class="hover:text-accent hover:underline hover:opacity-100",
			href!="{ authorLink }",
			rel="me"
		)
			slot(name="author")

		// org
		a(class="hover:text-accent hover:underline hover:opacity-100", href!="{ orgLink }")
			slot(name="org")
</template>
