<script>
  import { fly, slide } from "svelte/transition";
  import Icon from "@iconify/svelte";

  export let question = ""
  export let answer = ""

  let isShow = false;
  function onCollapsible() {
    isShow = !isShow;
  }
</script>

<div in:fly={{ x:-100, duration: 1000 }} on:click={onCollapsible} class="p-2 cursor-pointer rounded-lg bg-greyLighter bg-opacity-20 self-center w-full xl:w-2/3 mb-5">
  <div class="flex">
    <div class="flex-1 text-xl text-blueDeepDark mr-5">{question}</div>
    <Icon
      icon={isShow ? "material-symbols:arrow-drop-up-rounded" : "material-symbols:arrow-drop-down-rounded"}
      class="text-greyDark"
      height={30}
  />
  </div>
  {#if isShow}
    <div class="text-base text-blueDeepDark" transition:slide|local>{answer}</div>
  {/if}
</div>
