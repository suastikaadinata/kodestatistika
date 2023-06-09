<script lang="ts">
    import { onMount } from 'svelte';
    import HeaderButton from "$components/HeaderButton.svelte";
    import { fly } from 'svelte/transition';
    import logo from "$assets/logo_kode_statistika.png";
    import idnFlag from "$assets/idn_flag.png";
    import engFlag from "$assets/english_flag.png";
    import { t, locale } from '$locales';
    import Icon from '@iconify/svelte';

    let height = 0;
    let nav: HTMLElement;
    let onTop = true;
    let showMobile = false

    const menu = [...new Array(5)].map((e, i) => ({
        title: `home.top.menu.${i}.title`,
        link: `home.top.menu.${i}.link`,
    }));

    onMount(() => {
        height = nav.clientHeight;

        window.addEventListener('scroll', async () => {
        const currentScroll = window.scrollY;

        onTop = currentScroll <= height;
        });
    });

    function changeToIDN() {
        locale.set('id');
        showMobile = false;
    }

    function changeToEng(){
        locale.set('en');
        showMobile = false;
    }

    function scrollTo(id: string) {
        showMobile = false;
        console.log("status show mobile", showMobile);
        const element = document.getElementById(id);
        const pos = element?.offsetTop || 0;
        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    }
</script>

<nav bind:this={nav} class="header w-full sticky top-0 z-50 p-1 flex bg-white space-between 
    {onTop ? '' : 'transition duration-150 ease-in shadow-lg shadow-greenSoftDark/40'}">
    <div class="p-2 flex-1 flex">
        <img src={logo} height="40" width="40" alt="Logo Kode Statistika" />
        <div class="text-2xl font-bold text-primaryDark ml-2 self-center">
          {$t('home.appname')}
        </div>
    </div>
    <div class="hidden xl:flex">
        {#each menu as menus }
            <div on:click={() => scrollTo($t(menus.link))}
                class="cursor-pointer mr-6 items-center self-center border-b border-b-2 border-white p-2 text-blueDeepDark
                    text-lg duration-100 font-bold hover:border-primaryDark">
                {$t(menus.title)}
            </div>
        {/each }
        <div class="ml-6 mr-2 cursor-pointer items-center self-center border border-blueDeepDark" on:click={changeToIDN}>
            <img src={idnFlag} height="30" width="30" alt="IDN Flag" />
        </div>
        <div class="mr-6 cursor-pointer items-center self-center border border-blueDeepDark" on:click={changeToEng}>
            <img src={engFlag} height="30" width="30" alt="ENG Flag" />
        </div>
    </div>
    {#if showMobile}
        <div transition:fly={{ y: -100, duration: 200 }}
            class="fixed top-0 left-0 -z-10 w-full bg-white shadow-lg shadow-greenSoftDark/40 px-4 pt-20 pb-4 xl:hidden">
            {#each menu as menus }
                <div on:click={() => scrollTo($t(menus.link))}
                    class="cursor-pointer pb-6 p-2 text-blueDeepDark
                        text-lg duration-100 font-bold hover:border-primaryDark">
                    {$t(menus.title)}
                </div>
            {/each }
            <div class="flex pt-2">
                <div class="ml-2 mr-4 cursor-pointer items-center self-center border border-blueDeepDark" on:click={changeToIDN}>
                    <img src={idnFlag} height="30" width="30" alt="IDN Flag" />
                </div>
                <div class="cursor-pointer items-center self-center border border-blueDeepDark" on:click={changeToEng}>
                    <img src={engFlag} height="30" width="30" alt="ENG Flag" />
                </div>
            </div>
        </div>
    {/if}
    <div class="xl:hidden self-center mr-4" on:click={() => (showMobile = !showMobile)}>
        <Icon icon="material-symbols:menu-rounded" height={30}/>
    </div>
</nav>
