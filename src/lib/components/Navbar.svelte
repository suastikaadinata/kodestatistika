<script lang="ts">
    import { onMount } from 'svelte';
    import HeaderButton from "$components/HeaderButton.svelte";
    import logo from "$assets/logo_kode_statistika.png";

    let height = 0;
    let nav: HTMLElement;
    let onTop = true;

    onMount(() => {
        height = nav.clientHeight;

        window.addEventListener('scroll', async () => {
        const currentScroll = window.scrollY;

        onTop = currentScroll <= height;
        });
    });
</script>

<nav bind:this={nav} class="header sticky top-0 z-50 p-1 flex bg-white space-between 
    {onTop ? '' : 'transition duration-150 ease-in shadow-lg shadow-greenSoftDark/40'}">
    <div class="p-2 flex-1 flex">
        <img src={logo} height="40" width="40" alt="Logo Kode Statistika" />
        <div class="text-2xl font-bold text-primaryDark ml-2 self-center">
          KodeStatistika
        </div>
    </div>
    <div class="flex">
        <HeaderButton label="Beranda" target="home" />
        <HeaderButton label="Tentang Kami" target="about"/>
        <HeaderButton label="Layanan" target="services" />
        <HeaderButton label="FAQ" target="faq" />
        <HeaderButton label="Hubungi Kami" target="contact"/>
    </div>
</nav>
