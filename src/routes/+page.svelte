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
			content="User interface design is everywhere but you never notice the good ones. Sometimes a room feels just right and you don’t know how to describe it. You walk in and the furniture guides you to your seat. The same goes for a website or an app but its usually only for 1 person, you. It takes time to learn how to design that feeling. I hope I get there one day.",
			name="description"
		)
		meta(content="width=device-width", name="viewport")

		link(href="https://fonts.googleapis.com", rel="preconnect")
		link(crossorigin, href="https://fonts.gstatic.com", rel="preconnect")
		link(
			href="Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
			rel="stylesheet"
		)

		title Learning how to display data with CSS

	h1.hidden hi

	//- body
	main.h-screen.w-screen.overflow-hidden
		article.max-h-screen.overflow-y-scroll.snap-y.snap-mandatory
			header
				h1 Learning how to display data with CSS
				p.space-x-1
					span starter template
					span.opacity-40 :
					a(href="https://www.skinnypug.dev/") SkinnyPug.dev

			section
				h2 How I got started
				dl
					dt Design
					dd Started a new design every day for about 3-4 months, Part time graphic design job

					dt Dev
					dd Implemented my first website in dreamweaver design view

					dt Free time
					dd Photography, creative writing

					dt Design process
					dd I just wanted to make things look good

			section
				h2 Becoming a UI Designer
				dl
					dt Design
					dd Freelance websites, designed based on a style guide

					dt Dev
					dd Implemented WordPress/CMS themes, got better at CSS but did not care about HTML, struggled with JavaScript

					dt Free time
					dd Cycling

					dt Design process
					dd Just wanted things to be approved. didn't try hard. discouraging hearing no.

			section
				h2 Introduction to webapps
				dl
					dt Design
					dd UI, Style guide,
						a.ml-1(
							href="https://projects.invisionapp.com/share/QV137HQOXCRP#/screens?browse"
						) InvisionApp

					dt Dev
					dd Introduction to Git, CSS Less, Bootstrap

					dt Free time
					dd Rearranging furniture

					dt Design process
					dd Introduction to Component based designs, still mainly design with software tools

			section
				h2 2 step design process for layout and components
				dl
					dt Design
					dd Work on design in Sketch until final approval

					dt Dev
					dd Override bootstrap/material defaults with custom design

					dt Design process
					dd Introduction to Component based designs, began grouping and focusing on hierarchy

			section
				h2 Iterative design for layout and components
				ul.list-decimal
					li Used Sketch for the Idea of the design
					li First Implement the wireframe
					li Begin implementing components based on requirements for the page
					li Prioritize what is important, look for bottlenecks in the design
					li Design until you are stuck and then move on, repeat
					li Always look for bugs, create issues for improvements

			section
				h2 Experience with Designers &amp; Developers
				dl
					dt Designers
					dd UI Design requires knowing the limits of a browser, not all designers know

					dt Developers
					dd Really enjoy not implementing designs, sometimes like to design ui but only after you have designed something already, some developers like to say things can’t be implemented even when they can.

			section
				h2 Getting better at CSS
				ul.list-decimal
					li Implement designs that interests you whether its the layout or the feature/task.
					li After implementing the design try to make it better.
					li What would you do differently? ie
						a.ml-1(href="https://www.csszengarden.com/pages/alldesigns/") css zen garden

			section
				h2 Implementing a design
				ul.list-decimal
					li When deciding how to implement a design, the content usually determines how you will implement it.
					li Gather requirements
					li What type of data is it? static or dynamic? inputs or display
					li Group data - do they require labels?
					li Determine hierarchy
					li Determine HTML tags - Data (table), text, list?
					li After this is done the decision of how to implement a design will be much easier than trying to decide whether to use block, flex, or grid from the beginning
					li Break up the design into smaller parts
					li If something repeats its usually part of a component

			section
				h2 Good UI Design
				ul.list-disc
					li Spacing - consistency, shows hierarchy
					li Use of white space
					li Hierarchy / grouping
					li Design based on the capabilities of CSS

			section
				h2 Job Search
				ul.list-disc
					li What kind of job do i want
						ul.list-disc
							li Long term projects
							li Do i like the product? Branding?
							li Is the company open to change their style guide?
							li Do they just want me to design or will i also be a part of the dev team?
					li Jobs usually require skills in more than one area but you need to excel in 1. I don’t think I would be able to be on a dev team with CSS as my only skill. I will always be a designer. Being able to contribute to implementation is a plus. Maybe later coding will be thought of as a pen or design software as well.

			section
				h2 Work Environment
				ul.list-disc
					li Template engines for HTML
					li CSS Preprocessors
						ul
							li No real use for Sass anymore since I was never a power user.
							li Tailwind - better than plain CSS in React, readability is easier when inline
					li Figma, Sketch

			//- footer
			Footer(
				authorLink="https://www.linkedin.com/in/choijames/",
				orgLink="https://wcoding.com/"
			)
				svelte:fragment(slot="author") James Choi
				svelte:fragment(slot="org") wcoding
</template>
