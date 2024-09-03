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
		<NavLi href="{base}/#Submissions">Submissions</NavLi>
		<!-- <NavLi href="{base}/#schedule">Schedule</NavLi> -->
		<NavLi href="{base}/#speakers">Speakers</NavLi>
		<NavLi href="{base}/#organizers">Organizers</NavLi>
		<!-- <NavLi href="{base}/#students organizers">Students Organizers</NavLi> -->
		<!-- <NavLi href="{base}/#panel">Panel Discussion</NavLi> -->
		<NavLi href="{base}/#Contact">Contact</NavLi>
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
	        <p class="text-white">
	            Towards next-generation medical analysis: Unlock the potential of medical foundation models for more explainable, robust, secure diagnosis solutions <br><br>
	        </p>
		<h1 class="mb-4 font-extrabold tracking-tight leading-none text-white tracking-wider">
		<i class="fas fa-star"></i> Co-located with NeurIPS'24 <br>
		</h1>
		<h1 class="mb-4 font-extrabold tracking-tight leading-none text-white tracking-wider">
		<i class="fas fa-calendar"></i> December 14, 2024		<br>
		</h1>
		<h1 class="mb-4 font-extrabold tracking-tight leading-none text-white tracking-wider">
		<i class="fas fa-map"></i> Vancouver Convention Center		
		</h1>
    </div>
</section>

<section class="container mx-auto px-4 mb-8 mt-12">
    <div class="grid">
        <h2 class="text-4xl font-extrabold dark:text-white" id="overview"><a href="{base}/#overview">Overview</a></h2>
        <div class="pt-4"><p class="text-xl">

There have been notable advancements in large foundation models (FMs), which exhibit generalizable language understanding, visual recognition, and audio comprehension capabilities. These advancements highlight the potential of personalized AI assistants in efficiently assisting with daily tasks, ultimately enhancing human life. <br><br>

Healthcare is one of the most crucial industries touching every individual. Yet, due to large populations and limited medical professionals, it faces significant challenges, including the high cost and low doctor-to-population ratio. This shortage is more pronounced in rural and developing regions, where access to qualified doctors is severely limited, exacerbating health disparities and preventing timely treatment for common and complex conditions alike. <strong><em>Hence, there is a critical need to develop effective, affordable, and professional AI-driven medical assistants</em></strong>. <br><br>

Despite the great success in general domains, FMs struggle in specific domains requiring strict professional qualifications, such as healthcare, which has high sensitivity and security risk. In light of the growing healthcare demands, <strong><em>this workshop aims to explore the potential of Medical Foundation Models (MFMs) in smart medical assistance, thereby improving patient outcomes and streamlining clinical workflows</em></strong>. Considering the primary clinical needs, we emphasize the <strong><em>explainability, robustness, and security</em></strong> of the large-scale multimodal medical assistant, pushing forward its reliability and trustworthiness. By bringing together expertise in diverse fields, we hope to bridge the gap between industry and academia regarding precision medicine, highlighting clinical requirements, inherent concerns, and AI solutions. Through this cooperative endeavor, we aim to unlock the potential of MFMs, striving for groundbreaking advancements in healthcare. 
<!-- <br><br>
We will also host a panel discussion focusing on MFM policies, regulations, and the diverse interests and concerns of stakeholders. These discussions aim to foster a deeper understanding and facilitate meaningful dialogue among industry experts, policymakers, and other key participants. 
The panel discussion members include the following keynote speakers and <a href="https://www.ncbi.nlm.nih.gov/research/bionlp" class="text-gray-600 hover:text-gray-900"><strong>Prof. Zhiyong Lu</strong></a> (Senior Investigator at NIH/NLM; Deputy Director for Literature Search at National Center for Biotechnology Information; Professor of Computer Science (Adjunct) at University of Illinois Urbana-Champaign, USA).
-->

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
        <li><strong>MFMs at Scale</strong> Develop large-scale medical foundation models applicable for hospital use, including diagnosis, prognosis, treatment, and surgical assistance.</li>
        <li><strong>Explainable MFMs</strong> Open the black box of MFMs in medical decision-making, ensuring transparency and interpretability.</li>
        <li><strong>Robust Diagnosis</strong> Enhance the robustness of MFMs in diverse medical scenarios: scarcity/misalignment of medical data, parameter-efficient tuning, and validation techniques.</li>
        <li><strong>Patient Privacy</strong> Ensure data/model privacy in tuning and testing MFMs: federated learning, data encryption, and machine unlearning.</li>
        <li><strong>MFMs with Resource Constraint</strong> Research on optimizing MFMs with constrained resources, e.g., constrained computation, limited data and annotations, etc.</li>
        <li><strong>Human-AI Interaction</strong> Study the interaction dynamics to enhance the collaboration between healthcare professionals/patients and AI: prompt engineering, feedback refining, and system designing.</li>
        <li><strong>Multimodal Learning</strong> Effectively use heterogeneous medical data by addressing multimodal challenges: modality misalignment and missing.</li>
        <li><strong>Generative Model for Healthcare</strong> Develop generative models for producing multimodal data for healthcare: generative medical images, videos, reports, and biology structures.</li>
        <li><strong>Efficient MFMs</strong> Develop efficient MFMs in medical assistants: data efficiency, annotation efficiency, and small foundation model.</li>
        <li><strong>Agent for Healthcare</strong> Towards the applications of AI agent systems in healthcare: diagnosis, prognosis, surgical assistance, telehealth.</li>
        <li><strong>Fairness in MFMs</strong> Develop fair multimodal models in healthcare: addressing bias from data, model, annotation, and evaluation.</li>
    </ul>

</div>
	</div>
</section>


<section class="container mx-auto px-4 mb-8 ">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white" id="Submissions"><a href="{base}/#Submissions">Submissions</a></h2>
		<div class="pt-4"><p class="text-xl">
	<div class="pt-4 text-xl">
    	<ul class="list-disc list-inside space-y-4 pl-4">
	<p> The main text of a submitted paper is limited to <strong>nine content pages</strong>, including all figures and tables. 
Authors are encouraged to submit a separate ZIP file that contains any supplementary material, such as data or source code, when applicable.
	The submission must be formatted using the <a href="https://github.com/AIM-FM-24/NeurIPS/blob/main/static/AIM-FM-24.zip" class="text-gray-600 hover:text-gray-900" style="color:blue;">NeurIPS'24 template</a> and will be collected on the <a href="https://openreview.net/group?id=NeurIPS.cc/2024/Workshop/AIM-FM" class="text-gray-600 hover:text-gray-900" style="color:blue;">OpenReview</a> website, where the files must be in PDF format as a single PDF file.
	The reviewing process will be <strong>double-blind</strong>, and all submissions must be anonymized. This means that you should not include any author names, author affiliations, acknowledgments, or any other identifying information in your submission.
	</p>
        <li><strong>Submission Deadline: 	</strong> Extended to Sep 26, 2024, 23:59 UTC-0.</li>
        <li><strong>Workshop Accept/Reject Notification: </strong> Oct 09 '24 (Anywhere on Earth).</li>
	<!-- mandatory acc/rej deadline -->
    </ul>

</div>
	</div>
</section>

<section class="container mx-auto px-4 py-4  mb-8">
	<div class="grid">
		<!-- <h2 class="text-4xl font-extrabold dark:text-white" id="speakers"><a href="{base}/#speakers">Speakers: Panel Discussion (&dagger;) Keynote Speakers (&starf;)</a></h2> -->
		<h2 class="text-4xl font-extrabold dark:text-white" id="speakers"><a href="{base}/#speakers">Invited Speakers and Panelists</a></h2>


		<div class="grid md:grid-cols-4 gap-4">
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://www.eas.caltech.edu/people/anima" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="AnimashreeAnandkumar.png" style="width: 66%; margin: auto;" alt="Prof. Animashree Anandkumar">
					</a>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2"><a href="https://www.eas.caltech.edu/people/anima" target="_blank" rel="noopener noreferrer">Prof. Animashree Anandkumar</a></div>
					<p class="text-gray-700 text-base">
						Bren Professor at California Institute of Technology, Pasadena, CA; Senior Director of AI Research at NVIDIA, Santa Clara, CA
					</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://research.google/people/ShekoofehAzizi/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="Shekoofeh Azizi.png" style="width: 66%; margin: auto;" alt="Dr. Shekoofeh Azizi">
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
					<a href="https://www.ucl.ac.uk/ioo/people/pearse-keane" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="PearseKeane.png" style="width: 66%; margin: auto;" alt="Prof. Pearse Keane">
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
					<a href="https://cobweb.cs.uga.edu/~tliu/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="TianmingLiu.png" style="width: 66%; margin: auto;" alt="Prof. Tianming Liu">
					</a>
					<div class="px-6 py-4">
					<!-- <div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/">Prof. Tianming Liu</a></div> -->
					<div class="font-bold text-xl mb-2"><a href="https://cobweb.cs.uga.edu/~tliu/" target="_blank" rel="noopener noreferrer">Prof. Tianming Liu</a></div>
					<p class="text-gray-700 text-base">
						Distinguished Research Professor at University of Georgia (UGA), USA; Director of UGA Bioimaging Research Center, UGA Institute of Bioinformatics, and UGA Institute of Artificial Intelligence
					</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://dms.hms.harvard.edu/people/faisal-mahmood" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="mahmood_faisal.png" style="width: 66%; margin: auto;" alt="Prof. Faisal Mahmood">
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
					<a href="https://www.karansinghal.com/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="karan.png" style="width: 66%; margin: auto;" alt="Karan Singhal">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://www.karansinghal.com/" target="_blank" rel="noopener noreferrer">Karan Singhal</a></div>
						<p class="text-gray-700 text-base">
							OpenAI; Work experience on medical AI, foundation models, USA
						</p>
					</div>
				</div>
			</div>
			
			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://homes.cs.washington.edu/~swang/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="ShengWang.png" style="width: 66%; margin: auto;" alt="Prof. Sheng Wang">
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
					<a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="JamesZou.png" style="width: 66%; margin: auto;" alt="Prof. James Zou">
					</a>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2"><a href="https://www.james-zou.com/" target="_blank" rel="noopener noreferrer">Prof. James Zou</a></div>

					<p class="text-gray-700 text-base">
						Associate Professor of Biomedical Data Science and, by courtesy, of Computer Science and Electrical Engineering at Stanford University, USA
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
						<img class="aspect-square object-cover object-top" src="YixuanYuan_v2.png" style="width: 66%; margin: auto;" alt="Prof. Yixuan Yuan">
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
						<img class="aspect-square object-cover object-top" src="y.qin-2024.png" style="width: 66%; margin: auto;" alt="Prof. Yao Qin">
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
						<img class="aspect-square object-cover object-top" src="XiangLi.png" style="width: 66%; margin: auto;" alt="Prof. Xiang Li">
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
						<img class="aspect-square object-cover object-top" src="Ying_circle_2.png" style="width: 66%; margin: auto;" alt="Prof. Ying Wei">
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
						<img class="aspect-square object-cover object-top" src="BulatIbragimov.png" style="width: 66%; margin: auto;" alt="Prof. Bulat Ibragimov">
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
						<img class="aspect-square object-cover object-top" src="LindaPetzold.png" style="width: 66%; margin: auto;" alt="Prof. Linda Petzold">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://engineering.ucsb.edu/people/linda-petzold" target="_blank" rel="noopener noreferrer">Prof. Linda Petzold</a></div>
						<p class="text-gray-700 text-base">
							Mehrabian Distinguished Professor at University of California, Santa Barbara, USA
						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://scholar.google.com/citations?user=QulpzUAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="WenjianQin.png" style="width: 66%; margin: auto;" alt="Prof. Wenjian Qin">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://scholar.google.com/citations?user=QulpzUAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Wenjian Qin</a></div>
						<p class="text-gray-700 text-base">
							Professor at Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, China
						</p>
					</div>
				</div>
			</div>

		</div>

	</div>
</section>


<section class="container mx-auto px-4 py-4  mb-8">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white " id="students organizers">Student Organizers</h2> <!-- <a href="{base}/#students organizers">Students Organizers</a></h2> -->
		<div class="grid md:grid-cols-4 gap-4">

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://zhihaopeng-cityu.github.io/ZhihaoPENG_homepage/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="ZhihaoPeng.png" style="width: 66%; margin: auto;" alt="Zhihao Peng">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://zhihaopeng-cityu.github.io/ZhihaoPENG_homepage/" target="_blank" rel="noopener noreferrer">Dr. Zhihao Peng</a></div>
						<p class="text-gray-700 text-base">
							Postdoctoral Fellow at CUHK
						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://wymancv.github.io/wuyang.github.io/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="Wuyang2.png" style="width: 66%; margin: auto;" alt="Wuyang Li">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://wymancv.github.io/wuyang.github.io/" target="_blank" rel="noopener noreferrer">Dr. Wuyang Li</a></div>
						<p class="text-gray-700 text-base">
							Postdoctoral Fellow at CUHK
						</p>
					</div>
				</div>
			</div>


			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://baifanxxx.github.io/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="FanBai3.png" style="width: 66%; margin: auto;" alt="Fan Bai">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://baifanxxx.github.io/" target="_blank" rel="noopener noreferrer">Dr. Fan Bai</a></div>
						<p class="text-gray-700 text-base">
							PhD at CUHK
						</p>
					</div>
				</div>
			</div>


			<div class="grid gap-4">
				<div class="py-4 max-w-sm rounded overflow-hidden shadow-lg">
					<a href="https://mehak126.github.io/" target="_blank" rel="noopener noreferrer">
						<img class="aspect-square object-cover object-top" src="Mehak.png" style="width: 66%; margin: auto;" alt="Fan Bai">
					</a>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"><a href="https://mehak126.github.io/" target="_blank" rel="noopener noreferrer">Mehak Preet Dhaliwal</a></div>
						<p class="text-gray-700 text-base">
							PhD at University of California, Santa Barbara
						</p>
					</div>
				</div>
			</div>




		</div>

	</div>
</section>






<section class="container mx-auto px-4 py-4">
	<div class="grid">
		<h2 class="text-4xl font-extrabold dark:text-white " id="Contact"><a href="{base}/#Contact">Contact</a></h2>
		  <div class="email-content col-md-6"> 
			<p class="mb-8"><a href="mailto:aim.fm.neurips24@gmail.com">aim.fm.neurips24@gmail.com</a></p>
		  </div>
	</div>
</section>





</body>


<footer class="bg-gray-200 py-8 mt-8">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center">

			<div class="text-gray-600">
				<!-- <p>
					Contact: <a href="mailto:yxyuan@ee.cuhk.edu.hk" class="hover:text-gray-900">yxyuan@ee.cuhk.edu.hk</a>
				</p> -->
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
