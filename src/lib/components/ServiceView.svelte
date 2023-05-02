
<script>
    import Icon from "@iconify/svelte";

    export let icon = ""
    export let title = ""
    export let description = ""
</script>

<div class="xl:w-1/2">
    <div class="m-2 p-5 xl:m-5 xl:p-10 rounded-xl shadow-lg shadow-greenSoftDark/40">
        <Icon icon={icon} class="text-greyDark" height={64} />
        <div class="text-2xl font-bold text-accent mt-4">
          {title}
        </div>
        <div class="text-xl font-semibold text-blueDeepDark mt-2">
          {description}
        </div>
    </div>
</div>