<script lang="ts">
	// External Libraries
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import FaFilePdf from 'svelte-icons/fa/FaFilePdf.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import { base } from "$app/paths";
	
	// Flowbite
	import { Navbar, NavBrand, NavLi, NavUl, Button, NavHamburger } from 'flowbite-svelte'
	import { get_root_for_style } from 'svelte/internal';
  
	let datasetName = 'Aurora Multi-Sensor Dataset';

</script>  

<svelte:head>
	<title>AIM-FM Workshop @ NeurIPS'24</title>
</svelte:head>


<!-- <header class="bg-white">
	<div class="max-w-screen-l flex flex-wrap items-center justify-between mx-auto">
		
		<nav>
			<ul class="flex space-x-6">
				<li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
				<li>
					<a " class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
						
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header> -->

<Navbar let:hidden let:toggle>
	<div class="text-xl font-semibold">AIM-FM Workshop @ NeurIPS'24</div>
	<!-- <NavBrand href="/">
		<img
		src="/images/flowbite-svelte-icon-logo.svg"
		class="mr-3 h-6 sm:h-9"
		alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
		Flowbite
		</span>
	</NavBrand> -->
	<!-- <div class="flex md:order-2">
		<Button size="sm" href="https://github.com/pit30m/pit30m">Download Dataset</Button>
		<NavHamburger on:click={toggle} />
	</div> -->
	<NavUl {hidden}>
		<NavLi href="{base}/" active={true}>Home</NavLi>
		<NavLi href="{base}/#overview">Overview</NavLi>
		<NavLi href="{base}/#Topics">Topics</NavLi>
		<!-- <NavLi href="{base}/#schedule">Schedule</NavLi> -->
		<NavLi href="{base}/#speakers">Speakers</NavLi>
		<NavLi href="{base}/#organizers">Organizers</NavLi>
		<NavLi href="{base}/#panel">Panel Discussion</NavLi>
	</NavUl>
</Navbar>


<body>
<!-- Background image 1 from https://unsplash.com/photos/F6Kj8ovnUvM -->
<!-- Background image 2 from https://unsplash.com/photos/yLcPSvJkGrM -->
<!-- <section class="bg-cover bg-center h-96 relative" style="background-image: url('hero_bg.jpg')"> -->



<!-- <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
			AIM-FM: Advancements In Medical Foundation Models: Explainability, Robustness, Security, and Beyond
		</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
			Towards next-generation medical analysis: Unlock the potential of medical foundation models for more explainable, robust, secure diagnosis solutions
		</p>
    </div>
</section> -->
<section class="bg-white dark:bg-gray-900" style="background-image: url('background.jpg'); background-size: cover; background-position: center;">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl tracking-wider">
			AIM-FM: Advancements In Medical Foundation Models: Explainability, Robustness, Security, and Beyond
		</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
            Towards next-generation medical analysis: Unlock the potential of medical foundation models for more explainable, robust, secure diagnosis solutions
        </p>
    </div>
</section>

<section class="container mx-auto px-4 mb-8 mt-12">
    <div class="grid">
        <h2 class="text-4xl font-extrabold dark:text-white" id="overview"><a href="{base}/#overview">Overview</a></h2>
        <div class="pt-4"><p class="text-xl">

There have been notable advancements in large foundation models (FMs), which exhibit generalizable language understanding, visual recognition, and audio comprehension capabilities. These advancements highlight the potential of personalized AI assistants in efficiently assisting with daily tasks, ultimately enhancing human life. <br><br>

Healthcare is one of the most crucial industries touching every individual. Yet, due to large populations and limited medical professionals, it faces significant challenges, including the high cost and low doctor-to-population ratio. This shortage is more pronounced in rural and developing regions, where access to qualified doctors is severely limited, exacerbating health disparities and preventing timely treatment for common and complex conditions alike. <strong><em>Hence, there is a critical need to develop effective, affordable, and professional AI-driven medical assistants</em></strong>. <br><br>

Despite the great success in general domains, FMs struggle in specific domains requiring strict professional qualifications, such as healthcare, which has high sensitivity and security risk. In light of the growing healthcare demands, <strong><em>this workshop aims to explore the potential of Medical Foundation Models (MFMs) in smart medical assistance, thereby improving patient outcomes and streamlining clinical workflows</em></strong>. Considering the primary clinical needs, we emphasize the <strong><em>explainability, robustness, and security</em></strong> of the large-scale multimodal medical assistant, pushing forward its reliability and trustworthiness. By bringing together expertise in diverse fields, we hope to bridge the gap between industry and academia regarding precision medicine, highlighting clinical requirements, inherent concerns, and AI solutions. Through this cooperative endeavor, we aim to unlock the potential of MFMs, striving for groundbreaking advancements in healthcare.

		</div>
	</div>
</section>

<section class="container mx-auto px-4 mb-8 ">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white" id="Topics"><a href="{base}/#Topics">Topics of Interest</a></h2>
		<div class="pt-4"><p class="text-xl">
<div class="pt-4 text-xl">
	<p class="mb-8">Key topics of interest for the workshop may cover, but are not limited to, the following aspects.</p>
    <ul class="list-disc list-inside space-y-4 pl-4">
        <li><strong>MFMs at Scale</strong> Develop large-scale medical foundation models applicable for hospital use, including diagnosis, prognosis, treatment, surgical assistance.</li>
        <li><strong>Explainable MFMs</strong> Open the black box of MFMs in medical decision-making, ensuring transparency and interpretability.</li>
        <li><strong>Robust Diagnosis</strong> Enhance the robustness of MFMs in diverse medical scenarios: scarcity/misalignment of medical data, parameter-efficient tuning, validation techniques.</li>
        <li><strong>Patient Privacy</strong> Ensure data/model privacy in tuning and testing MFMs: federated learning, data encryption, machine unlearning.</li>
        <li><strong>MFMs with Resource Constraint</strong> Research on optimizing MFMs with constrained resources, e.g., constrained computation, limited data and annotations, etc.</li>
        <li><strong>Human-AI Interaction</strong> Sudy the interaction dynamics to enhance the collaboration between healthcare professionals/patients and AI: prompt engineering, feedback refining, system designing.</li>
        <li><strong>Multimodal Learning</strong> Effectively use heterogeneous medical data by addressing multi-modal challenges: modality misalignment and missing.</li>
        <li><strong>Generative Model for Healthcare</strong> Develop generative models for producing multimodal data for healthcare: generative medical images, videos, reports, biology structures.</li>
        <li><strong>Efficient MFMs</strong> Develop efficient MFMs in medical assistants: data efficiency, annotation efficiency, small foundation model.</li>
        <li><strong>Agent for Healthcare</strong> Towards the applications of AI agent systems in healthcare: diagnosis, prognosis, surgical assistance, telehealth.</li>
        <li><strong>Fairness in MFMs</strong> Develop fair multimodal models in healthcare: addressing bias from data, model, annotation, evaluation.</li>
    </ul>

</div>
	</div>
</section>


<!-- <section class="container mx-auto px-4 py-4">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white" id="schedule"><a href="{base}/#schedule">Schedule</a></h2>
		
		
		<div class="py-4">
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">
							Time
						</th>
						<th scope="col" class="px-6 py-3">
							Speaker
						</th>
						<th scope="col" class="px-6 py-3">
							Topic
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							9:00 - 10:15
						</th>
						<td class="px-6 py-4">
							TBD
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							10:15 - 10:30
						</th>
						<td class="px-6 py-4">
							☕
						</td>
						<td class="px-6 py-4">
							15 min break
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							10:30 - 11:15
						</th>
						<td class="px-6 py-4">
							Prof. Christian Theobalt
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							11:15 - 12:00
						</th>
						<td class="px-6 py-4">
							Prof. Yaser Sheikh
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							12:00 - 1:00
						</th>
						<td class="px-6 py-4">
							🥪
						</td>
						<td class="px-6 py-4">
							Lunch break
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							1:00 - 1:45
						</th>
						<td class="px-6 py-4">
							TBD
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							1:45 - 2:30
						</th>
						<td class="px-6 py-4">
							TBD
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							2:30 - 3:15
						</th>
						<td class="px-6 py-4">
							Prof. Michael Black
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							3:15 - 3:30
						</th>
						<td class="px-6 py-4">
							☕
						</td>
						<td class="px-6 py-4">
							15 min break
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							3:30 - 4:15
						</th>
						<td class="px-6 py-4">
							Prof. Angela Dai
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
					<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							4:15 - 5:00
						</th>
						<td class="px-6 py-4">
							TBD
						</td>
						<td class="px-6 py-4">
							TBD
						</td>
					</tr>
				</tbody>
			</table>
		</div>


	</div>
</section> -->

<section class="container mx-auto px-4 py-4  mb-8">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white" id="speakers"><a href="{base}/#speakers">Keynote Speakers</a></h2>

		<div class="grid md:grid-cols-4 gap-4">
			

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.eas.caltech.edu/people/anima" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="AnimashreeAnandkumar.png" alt="Prof. Animashree Anandkumar">
					</a>
					<div class="px-6 py-4">
					<!-- <div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/">Prof. Tianming Liu</a></div> -->
					<div class="font-bold text-xl mb-2"><a href="https://www.eas.caltech.edu/people/anima" target="_blank" rel="noopener noreferrer">Prof. Animashree Anandkumar</a></div>
					<p class="text-gray-700 text-base">
						Bren Professor at California Institute of Technology, Pasadena, CA; Senior Director of AI Research at NVIDIA, Santa Clara, CA.
					</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://cobweb.cs.uga.edu/~tliu/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="TianmingLiu.png" alt="Prof. Tianming Liu">
					</a>
					<div class="px-6 py-4">
					<!-- <div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/">Prof. Tianming Liu</a></div> -->
					<div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/" target="_blank" rel="noopener noreferrer">Prof. Tianming Liu</a></div>
					<p class="text-gray-700 text-base">
						Distinguished Research Professor at University of Georgia (UGA), USA; Director of UGA Bioimaging Research Center, UGA Institute of Bioinformatics, and UGA Institute of Artificial Intelligence.
					</p>
					</div>
				</div>
			</div>
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.ucl.ac.uk/ioo/people/pearse-keane" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="PearseKeane.png" alt="Prof. Pearse Keane">
					</a>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2"><a href="https://www.ucl.ac.uk/ioo/people/pearse-keane" target="_blank" rel="noopener noreferrer">Prof. Pearse Keane</a></div>
					<p class="text-gray-700 text-base">
						Professor of Artificial Medical Intelligence at UCL Institute of Ophthalmology; Consultant ophthalmologist at Moorfields Eye Hospital, London
						
					</p>
					</div>
				</div>
			</div>
	


			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="JamesZou.png" alt="Prof. James Zou">
					</a>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2"><a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">Prof. James Zou</a></div>

					<p class="text-gray-700 text-base">
						Associate Professor of Biomedical Data Science and, by courtesy, of Computer Science and Electrical Engineering at Stanford University, USA
					</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://dms.hms.harvard.edu/people/faisal-mahmood" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="mahmood_faisal.png" alt="Prof. Faisal Mahmood">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://dms.hms.harvard.edu/people/faisal-mahmood" target="_blank" rel="noopener noreferrer">Prof. Faisal Mahmood</a></div>
						<p class="text-gray-700 text-base">
							Associate Professor at Harvard Medical School, USA; Lead Investigator of Brigham and Women's Hospital 
						</p>
					</div>
				</div>
			</div>
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://homes.cs.washington.edu/~swang/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="ShengWang.png" alt="Prof. Sheng Wang">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://homes.cs.washington.edu/~swang/" target="_blank" rel="noopener noreferrer">Prof. Sheng Wang</a></div>
						<p class="text-gray-700 text-base">
							Assistant Professor at University of Washington, Seattle, USA

						</p>
					</div>
				</div>
			</div>
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://research.google/people/ShekoofehAzizi/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="Shekoofeh Azizi.png" alt="Dr. Shekoofeh Azizi">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://research.google/people/ShekoofehAzizi/" target="_blank" rel="noopener noreferrer">Dr. Shekoofeh Azizi</a></div>
						<p class="text-gray-700 text-base">
							Staff research scientist at Google DeepMind (formerly Google Brain) and a research lead for Health AI at Google DeepMind, Canada 

						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.karansinghal.com/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="karan.png" alt="Karan Singhal">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://www.karansinghal.com/" target="_blank" rel="noopener noreferrer">Karan Singhal</a></div>
						<p class="text-gray-700 text-base">
							Staff research scientist at OpenAI, co-leading teams working on medical AI, foundation models, USA
						</p>
					</div>
				</div>
			</div>












		</div>

	</div>
</section>


<section class="container mx-auto px-4 py-4  mb-8">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white" id="organizers"><a href="{base}/#organizers">Organizers</a></h2>

		<div class="grid md:grid-cols-4 gap-4">
			
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-yixuan-yuan" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="yxyuan.png" alt="Prof. Yixuan Yuan">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-yixuan-yuan" target="_blank" rel="noopener noreferrer">Prof. Yixuan Yuan</a></div>
						<p class="text-gray-700 text-base">
							Assistant Professor at The Chinese University of Hong Kong, China
						</p>
					</div>
				</div>
			</div>
			
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://yaoqin1.github.io/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="y.qin-2024.png" alt="Prof. Yao Qin">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://yaoqin1.github.io/" target="_blank" rel="noopener noreferrer">Prof. Yao Qin</a></div>
						<p class="text-gray-700 text-base">
							Assistant Professor at UC Santa Barbara, USA; Senior Research Scientist at Google DeepMind
						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://xiangli-shaun.github.io/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="XiangLi.png" alt="Prof. Xiang Li">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://xiangli-shaun.github.io/" target="_blank" rel="noopener noreferrer">Prof. Xiang Li</a></div>
						<p class="text-gray-700 text-base">
							Assistant Professor at Massachusetts General Hospital and Harvard Medical School, USA
						</p>
					</div>
				</div>
			</div>

			
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://wei-ying.net/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="Ying_circle_2.png" alt="Prof. Ying Wei">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://wei-ying.net/" target="_blank" rel="noopener noreferrer">Prof. Ying Wei</a></div>
						<p class="text-gray-700 text-base">
							Assistant Professor at Nanyang Technological University, Singapore

						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://di.ku.dk/english/staff/?pure=en/persons/644987" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="BulatIbragimov.png" alt="Prof. Bulat Ibragimov">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://di.ku.dk/english/staff/?pure=en/persons/644987" target="_blank" rel="noopener noreferrer">Prof. Bulat Ibragimov</a></div>
						<p class="text-gray-700 text-base">
							Associate Professor at University of Copenhagen, Denmark
						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://engineering.ucsb.edu/people/linda-petzold" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="LindaPetzold.png" alt="Prof. Linda Petzold">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://engineering.ucsb.edu/people/linda-petzold" target="_blank" rel="noopener noreferrer">Prof. Linda Petzold</a></div>
						<p class="text-gray-700 text-base">
							Mehrabian Distinguished Professor at University of California, Santa Barbara, USA
						</p>
					</div>
				</div>
			</div>

		</div>

	</div>
</section>



<section class="container mx-auto px-4 py-4  mb-8">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white" id="panel"><a href="{base}/#panel">Panel Discussion</a></h2>

	<p style="margin-top: 20px;">
		We will also host a panel discussion focusing on MFM policies, regulations, and the diverse interests and concerns of stakeholders. These discussions aim to foster a deeper understanding and facilitate meaningful dialogue among industry experts, policymakers, and other key participants.
	</p>

		<div class="grid md:grid-cols-4 gap-4">
			
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.ncbi.nlm.nih.gov/research/bionlp" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="luzh.png" alt="Prof. Zhiyong Lu">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://www.ncbi.nlm.nih.gov/research/bionlp" target="_blank" rel="noopener noreferrer">Prof. Zhiyong Lu</a></div>
						<p class="text-gray-700 text-base">
							Senior Investigator at NIH/NLM; Deputy Director for Literature Search at National Center for Biotechnology Information; Professor of Computer Science (Adjunct) at University of Illinois Urbana-Champaign, USA
						</p>
					</div>
				</div>
			</div>

			
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.eas.caltech.edu/people/anima" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="AnimashreeAnandkumar.png" alt="Prof. Animashree Anandkumar">
					</a>
					<div class="px-6 py-4">
					<!-- <div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/">Prof. Tianming Liu</a></div> -->
					<div class="font-bold text-xl mb-2"><a href="https://www.eas.caltech.edu/people/anima" target="_blank" rel="noopener noreferrer">Prof. Animashree Anandkumar</a></div>
					<p class="text-gray-700 text-base">
						Bren Professor at California Institute of Technology, Pasadena, CA; Senior Director of AI Research at NVIDIA, Santa Clara, CA.
					</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://cobweb.cs.uga.edu/~tliu/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="TianmingLiu.png" alt="Prof. Tianming Liu">
					</a>
					<div class="px-6 py-4">
					<!-- <div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/">Prof. Tianming Liu</a></div> -->
					<div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/" target="_blank" rel="noopener noreferrer">Prof. Tianming Liu</a></div>
					<p class="text-gray-700 text-base">
						Distinguished Research Professor at University of Georgia (UGA), USA; Director of UGA Bioimaging Research Center, UGA Institute of Bioinformatics, and UGA Institute of Artificial Intelligence.
					</p>
					</div>
				</div>
			</div>
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.ucl.ac.uk/ioo/people/pearse-keane" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="PearseKeane.png" alt="Prof. Pearse Keane">
					</a>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2"><a href="https://www.ucl.ac.uk/ioo/people/pearse-keane" target="_blank" rel="noopener noreferrer">Prof. Pearse Keane</a></div>
					<p class="text-gray-700 text-base">
						Professor of Artificial Medical Intelligence at UCL Institute of Ophthalmology; Consultant ophthalmologist at Moorfields Eye Hospital, London
						
					</p>
					</div>
				</div>
			</div>
	


			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="JamesZou.png" alt="Prof. James Zou">
					</a>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2"><a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">Prof. James Zou</a></div>

					<p class="text-gray-700 text-base">
						Associate Professor of Biomedical Data Science and, by courtesy, of Computer Science and Electrical Engineering at Stanford University, USA
					</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://dms.hms.harvard.edu/people/faisal-mahmood" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="mahmood_faisal.png" alt="Prof. Faisal Mahmood">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://dms.hms.harvard.edu/people/faisal-mahmood" target="_blank" rel="noopener noreferrer">Prof. Faisal Mahmood</a></div>
						<p class="text-gray-700 text-base">
							Associate Professor at Harvard Medical School, USA; Lead Investigator of Brigham and Women's Hospital 
						</p>
					</div>
				</div>
			</div>
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://homes.cs.washington.edu/~swang/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="ShengWang.png" alt="Prof. Sheng Wang">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://homes.cs.washington.edu/~swang/" target="_blank" rel="noopener noreferrer">Prof. Sheng Wang</a></div>
						<p class="text-gray-700 text-base">
							Assistant Professor at University of Washington, Seattle, USA

						</p>
					</div>
				</div>
			</div>
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://research.google/people/ShekoofehAzizi/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="Shekoofeh Azizi.png" alt="Dr. Shekoofeh Azizi">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://research.google/people/ShekoofehAzizi/" target="_blank" rel="noopener noreferrer">Dr. Shekoofeh Azizi</a></div>
						<p class="text-gray-700 text-base">
							Staff research scientist at Google DeepMind (formerly Google Brain) and a research lead for Health AI at Google DeepMind, Canada 

						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.karansinghal.com/" target="_blank" rel="noopener noreferrer">
						<img class="w-full aspect-square object-cover object-top" src="karan.png" alt="Karan Singhal">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://www.karansinghal.com/" target="_blank" rel="noopener noreferrer">Karan Singhal</a></div>
						<p class="text-gray-700 text-base">
							Staff research scientist at OpenAI, co-leading teams working on medical AI, foundation models, USA
						</p>
					</div>
				</div>
			</div>



		</div>

	</div>
</section>






















<!-- <section class="container mx-auto px-4 py-4">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white " id="organizers"><a href="{base}/#organizers">Organizers</a></h2>

		
		<div class="grid grid-cols-4 md:grid-cols-4 gap-8 py-6 ">
			
			<div class="grid gap-4">
				<a href="https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-yixuan-yuan">
				<div class="flex items-center space-x-4 rtl:space-x-reverse">
					<div class="flex-shrink-0">
					   <img class="w-64 h-64 rounded-full" src="yixuan_1.jpg" alt="Neil image">
					</div>
					<div class="flex-1 min-w-0">
					   <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
						  Yixuan Yuan
					   </p>
					   <p class="text-sm text-gray-500 truncate dark:text-gray-400">
						  Assistant Professor at CUHK
					   </p>
					</div>
				 </div>
				</a>
			</div>

		


		</div>

	</div>
</section> -->




</body>


<footer class="bg-gray-200 py-8 mt-8">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center">

			<div class="text-gray-600">
				<p>
					Contact: <a href="mailto:yxyuan@ee.cuhk.edu.hk" class="hover:text-gray-900">yxyuan@ee.cuhk.edu.hk</a>
				</p>
			</div>
			<div class="text-center text-gray-600">
				<p>&copy; 2024. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>


<style>
	.icon {
		display: inline-block;
		font-size: inherit;
		height: 1em;
		overflow: visible;
		vertical-align: -0.125em;
	}
</style>
