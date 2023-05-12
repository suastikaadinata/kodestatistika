<script lang="ts">
  import Icon from "@iconify/svelte";
  import HeaderButton from "$components/HeaderButton.svelte";
  import logo from "$assets/logo_kode_statistika.png";
  import Navbar from "$components/Navbar.svelte";
  import mainIllust from "$assets/home_illust.png";
  import aboutIllust from "$assets/about_icon.png";
  import ServiceView from "$components/ServiceView.svelte";
  import CollapsibleContainer from "$components/CollapsibleContainer.svelte";
  import { t } from "$locales"
  import viewport from '$lib/useViewport';;

  let enterAbout = false
  let enterService = false
  let enterFAQ = false

  const services = [...new Array(5)].map((e, i) => ({
    title: `home.services.menu.${i}.title`,
    icon: `home.services.menu.${i}.icon`,
    desc: `home.services.menu.${i}.desc`
  }));

  const faqs = [...new Array(2)].map((e, i) => ({
    answer: `home.faq.data.${i}.answer`,
    question: `home.faq.data.${i}.question`,
  }));

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    const pos = element?.offsetTop || 0;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  function incEltNbr(id: string) {
    let elt = document.getElementById(id);
    let endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
  }

  function incNbrRec(i: number, endNbr: number, elt: any) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function() {
        incNbrRec(i + 1, endNbr, elt);
      }, 100);
    }
  }

  function onEnterAbout(){
    if(!enterAbout){
      incEltNbr("project-amount");
      incEltNbr("service-amount");
      enterAbout = true
    }
  }

  function onEnterService(){
    enterService = true;
  }

  function onEnterFAQ(){
    enterFAQ = true;
  }

  function goToIG(){
    window.open("https://instagram.com/kode_statistika?igshid=NTc4MTIwNjQ2YQ==")
  }

  function goToWA(){
    window.open("https://wa.me/6285737354721")
  }

  function goToEmail(){
    window.open("mailto:kodestatistika.com")
  }
</script>

<div class="relative ">
  <Navbar />
  <div id="home" class="w-full xl:py-10 flex flex-col xl:flex-row justify-center">
    <div class="flex-1 self-center p-5 xl:p-10">
      <div class="flex-1 px-10 mt-8 mb-4 self-center xl:hidden">
        <img src={mainIllust} alt={"Main Illustration"} />
      </div>
      <div class="self-end">
        <div class="text-5xl xl:text-7xl font-bold text-primaryDark">{$t('home.appname')}</div>
        <div class="font-semibold text-xl text-accent">
          {$t('home.home.title')}
        </div>
        <p class="text-xl text-blueDeepDark mt-4">
          {$t('home.home.desc')}
        </p>
        <div class="flex flex-col xl:flex-row mt-6">
          <div
            on:click={() => scrollTo("contact")}
            class="rounded-2xl mt-4 cursor-pointer bg-primaryDark py-2 px-6 mr-4 text-center text-white font-bold text-xl"
          >
            {$t('home.home.start_consultation')}
        </div>
          <div
            on:click={() => scrollTo("services")}
            class="text-accent w-full xl:w-fit mt-4 cursor-pointer font-bold text-xl px-4 leading-10 border-b-4 border-accent self-center text-center"
          >
            {$t('home.home.see_services')}
      </div>
        </div>
      </div>
    </div>
    <div class="flex-1 p-10 self-center hidden xl:block">
      <img src={mainIllust} alt={"Main Illustration"} />
    </div>
  </div>
  <div id="about" class="mr-2 ml-2 pt-10">
    <div class="max-w-screen-2xl flex flex-col xl:flex-row justify-center xl:flex-wrap ">
      <div class="flex-1 p-10 self-center flex justify-end">
        <img src={aboutIllust} alt={"Tentang Kami"} />
      </div>
      <div class="flex-1 flex flex-col px-5 xl:px-10 pt-10">
        <div class="text-xl font-semibold text-blueDeepDark">{$t('home.aboutus.title')}</div>
        <div class="text-3xl font-bold text-greenSoftDark">{$t('home.appname')}</div>
        <div class="mt-4 text-xl text-blueDeepDark">
          {$t('home.aboutus.first_desc')}
        </div>
        <div class="mt-2 text-xl text-blueDeepDark">
          {$t('home.aboutus.second_desc')}
        </div>
        <div class="flex mt-4"  use:viewport on:enter={onEnterAbout}>
          <div class="p-5 mr-4">
            <div class="flex justify-center">
              <div class="text-3xl font-bold text-greenSoftDark" id="project-amount">
                30
              </div>
              <div class="text-3xl font-bold text-greenSoftDark">
                +
              </div>
            </div>
            <div class="mt-2 text-center text-xl font-semibold text-blueDeepDark">
              {$t('home.aboutus.project_finished')}
            </div>
          </div>
          <div class="p-5">
            <div class="text-center text-3xl font-bold text-greenSoftDark" id="service-amount">
              5
            </div>
            <div class="mt-2 text-center text-xl font-semibold text-blueDeepDark">
              {$t('home.aboutus.service_offered')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="services"
    class="w-full flex pt-20 flex-col items-center"
  > 
  <div class="w-full flex justify-center" use:viewport on:enter={onEnterService}> 
    <div class="text-4xl text-center font-bold text-accent text-accent mb-4 border-b-4 border-accent mx-5 px-4 py-4">
      {$t('home.services.our_services')}
    </div>
  </div>
  {#if enterService}
  <div class="max-w-screen-2xl xl:flex xl:flex-wrap xl:justify-center">
      {#each services as service}
        <ServiceView icon={$t(service.icon)} title={$t(service.title)} description={$t(service.desc)}/>
      {/each}
  </div>
  {/if}
  </div>
  <div id="faq" class="mr-2 ml-2 pt-20" use:viewport on:enter={onEnterFAQ}>
    <div class="w-full flex justify-center mb-10">
      <div class="text-4xl font-bold mb-4 text-blueDeepDark border-b-4 border-b-blueDeepDark px-4 py-4">{$t('home.faq.title')}</div>
    </div>
    {#if enterFAQ }
    <div class="flex flex-col">
      {#each faqs as faq}
        <CollapsibleContainer question={$t(faq.question)} answer={$t(faq.answer)}/>
      {/each}
    </div>
    {/if}
  </div>
  <div id="contact" class="mt-10 bg-greenSoftDark">
    <div class="w-full p-5">
      <div class="w-full flex flex-col">
        <div class="text-4xl font-bold text-white self-center">{$t('home.contact.get_in_touch')}</div>
        <div class="text-xl font-semibold text-white mt-2 self-center text-center">
          {$t('home.contact.get_in_touch_desc')}
        </div>
      </div>
      <div class="w-full xl:mt-10 xl:flex xl:px-20">
        <div class="w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col">
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'material-symbols:location-on-outline'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">{$t('home.contact.our_location')}</div>
              <div class="text-lg font-semibold text-white self-center">{$t('home.contact.our_location_value')}</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col" on:click={goToIG}>
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'mdi:instagram'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">{$t('home.contact.follow_us_at')}</div>
              <div class="text-lg font-semibold text-white self-center">{$t('home.contact.ig_id')}</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col" on:click={goToWA}>
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'ic:baseline-whatsapp'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">{$t('home.contact.whatsapp_now')}</div>
              <div class="text-lg font-semibold text-white self-center">{$t('home.contact.whatsapp_no')}</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col" on:click={goToEmail}>
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'ic:outline-email'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">{$t('home.contact.email_us_anytime')}</div>
              <div class="text-lg font-semibold text-white self-center">{$t('home.contact.email_id')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer w-full bg-blueDeepDark p-5 flex justify-center">
    <div class="text-md font-semibold text-white">
      © 2023 Kode Statistika. All Rights Reserved.
    </div>
  </div>
</div>

