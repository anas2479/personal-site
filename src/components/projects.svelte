<div class="h-screen flex items-center ">
    <div class="">
        <h2 class="font-headings font-bold text-6xl">
            Projects
        </h2>
        <div class="flex flex-wrap justify-between">
            {#each $projects as project }
                <div class="mt-6 max-w-[450px]">
                    <a target="blank" href="{project.url}" class="">
                        <h2 class="font-body text-3xl font-semibold">{project.title}
                            <img class="inline" src="./assets/external-link-alt.svg" alt="external link icon">
                        </h2>
                    </a>
                    <p class="font-body text-2xl">{project.description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<script>

import {projects} from '../stores'


</script>