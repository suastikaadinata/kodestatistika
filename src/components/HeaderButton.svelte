<script lang="ts">
  export let label = "";
  export let target = "";

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    const pos = element?.offsetTop || 0;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
</script>

<div
  on:click={() => scrollTo(target)}
  class="cursor-pointer mr-6 items-center self-center border-b border-b-2 border-white p-2 text-blueDeepDark
    text-lg duration-100 font-bold hover:border-primaryDark"
>
  {label}
</div>
