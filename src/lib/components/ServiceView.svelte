
<script>
    import Icon from "@iconify/svelte";
    import { fade, fly } from 'svelte/transition';

    export let icon = ""
    export let title = ""
    export let description = ""
</script>

<div class="xl:w-1/2 xl:pt-10" in:fade={{ duration: 1000 }}>
    <div class="m-2 p-5 m-5 xl:p-10 rounded-xl xl:flex xl:h-full shadow-lg shadow-greenSoftDark/40">
        <Icon icon={icon} class="text-greyDark" height={100} />
        <div class="xl:flex-1  xl:ml-4">
          <div class="text-2xl font-bold text-accent mt-4 xl:mt-0">
            {title}
          </div>
          <div class="text-xl text-blueDeepDark mt-2">
            {description}
          </div>
        </div>
    </div>
</div>