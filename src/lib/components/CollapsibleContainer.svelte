<script>
  import { fade, slide } from "svelte/transition";
  import Icon from "@iconify/svelte";
  let isShow = false;
  function onCollapsible() {
    isShow = !isShow;
  }
</script>

<div on:click={onCollapsible} class="p-2 cursor-pointer rounded-lg bg-greyLighter bg-opacity-20 self-center w-full xl:w-2/3 mb-5">
  <div class="flex">
    <div class="flex-1 text-xl text-blueDeepDark mr-5">Bagaimana Cara Pemesanan?</div>
    <Icon
      icon={isShow ? "material-symbols:arrow-drop-up-rounded" : "material-symbols:arrow-drop-down-rounded"}
      class="text-greyDark"
      height={30}
  />
  </div>
  {#if isShow}
    <div class="text-base text-blueDeepDark" transition:slide|local>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
  {/if}
</div>
