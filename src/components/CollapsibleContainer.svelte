<script>
  import { fade, slide } from "svelte/transition";
  let isShow = false;
  function onCollapsible() {
    isShow = !isShow;
  }
</script>

<div on:click={onCollapsible}>
  <h1>HEADER</h1>
  {#if isShow}
    <h1 transition:slide|local>BODY</h1>
  {/if}
</div>
