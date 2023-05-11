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

  const services = [...new Array(5)].map((e, i) => ({
    title: `home.services.menu.${i}.title`,
    icon: `home.services.menu.${i}.icon`,
    desc: `home.services.menu.${i}.desc`
  }));

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    const pos = element?.offsetTop || 0;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
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
  <div id="home" class="w-full flex flex-col xl:flex-row justify-center">
    <div class="flex-1 self-center p-10">
      <div class="flex-1 p-10 self-center xl:hidden">
        <img src={mainIllust} alt={"Main Illustration"} />
      </div>
      <div class="self-end">
        <div class="text-7xl font-bold text-primaryDark">Kode Statistika</div>
        <div class="font-semibold text-xl text-accent">
          Jasa Pembuatan Aplikasi dan Olah Statistika
        </div>
        <p class="text-xl text-blueDeepDark mt-4">
          Melayani juga pembuatan Karya Ilmiah dan Les Private bagi kamu yang ingin lebih menekuni Ilmu Statistika.
        </p>
        <div class="flex flex-col xl:flex-row mt-6">
          <div
            on:click={() => scrollTo("contact")}
            class="rounded-2xl mt-4 cursor-pointer bg-primaryDark py-2 px-6 mr-4 text-center text-white font-bold text-xl"
          >
            Mulai Konsultasi
        </div>
          <div
            on:click={() => scrollTo("services")}
            class="text-accent w-full xl:w-fit mt-4 cursor-pointer font-bold text-xl px-4 leading-10 border-b-4 border-accent self-center text-center"
          >
            Lihat Services 
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
      <div class="flex-1 flex flex-col p-10">
        <div class="text-xl font-semibold text-blueDeepDark">Tentang Kami</div>
        <div class="text-3xl font-bold text-greenSoftDark">Kode Statistika</div>
        <div class="mt-4 text-xl text-blueDeepDark">
          Kode Statistika adalah sebuah Software & Statistic House yang berbasis di Denpasar, Bali. Kode Statistika menawarkan berbagai layanan yaitu Pembuatan Website, Mobile Apps, Karya Ilmiah, Analisis Data, dan Les Private Statistika.
        </div>
        <div class="mt-2 text-xl text-blueDeepDark">
          Kode Statistika dijalankan oleh tim yang terampil dan berpengalaman dalam bidang software development dan pengolahan data statistika. Kami berkomitmen untuk memberikan solusi terbaik dan efektif untuk anda.
        </div>
        <div class="flex mt-4">
          <div class="p-5 mr-4">
            <div class="text-center text-3xl font-bold text-greenSoftDark">
              30+
            </div>
            <div class="mt-2 text-xl font-semibold text-blueDeepDark">
              Project Selesai
            </div>
          </div>
          <div class="p-5">
            <div class="text-center text-3xl font-bold text-greenSoftDark">
              5
            </div>
            <div class="mt-2 text-xl font-semibold text-blueDeepDark">
              Jenis Layanan
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
  <div class="w-full flex justify-center">
    <div class="text-5xl font-bold text-accent text-accent mb-4 border-b-4 border-accent px-4 py-4">
      Layanan Kami
    </div>
  </div>
  <div class="max-w-screen-2xl xl:flex xl:flex-wrap xl:justify-center">
    {#each services as service}
      <ServiceView icon={$t(service.icon)} title={$t(service.title)} description={$t(service.desc)}/>
    {/each}
  </div>
  </div>
  <div id="faq" class="mr-2 ml-2 pt-20">
    <div class="w-full flex justify-center mb-10">
      <div class="text-5xl font-bold mb-4 text-blueDeepDark border-b-4 border-b-blueDeepDark px-4 py-4">FaQ</div>
    </div>
    <div class="flex flex-col">
      <CollapsibleContainer question="Berapa harga dari setiap service?" answer="Harga dari service yang kami tawarkan sangat bervariasi tergantung tingkat kesulitan dan lama pengerjaan dari sebuah projek"/>
      <CollapsibleContainer question="Bagaimana cara pemesanan?" answer="Anda hanya perlu menghubungi kami melalui kontak yang telah disediakan dan tim kami akan memberikan anda solusi terbaik!"/>
    </div>
  </div>
  <div id="contact" class="mt-10 bg-greenSoftDark">
    <div class="w-full p-5">
      <div class="w-full flex flex-col">
        <div class="text-5xl font-bold text-white self-center">Get In Touch</div>
        <div class="text-2xl font-semibold text-white mt-2 self-center text-center">
          Ayo konsultasikan kebutuhanmu dengan kami.
        </div>
      </div>
      <div class="w-full xl:mt-10 xl:flex xl:px-20">
        <div class="w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col">
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'material-symbols:location-on-outline'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">Berbasis di</div>
              <div class="text-lg font-semibold text-white self-center">Denpasar, Bali, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col" on:click={goToIG}>
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'mdi:instagram'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">Follow kami di</div>
              <div class="text-lg font-semibold text-white self-center">@kode_statistika</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col" on:click={goToWA}>
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'ic:baseline-whatsapp'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">WhatsApp kami sekarang</div>
              <div class="text-lg font-semibold text-white self-center">085737354721</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer w-full mt-4 xl:mt-0 xl:flex-1 flex flex-col" on:click={goToEmail}>
          <div class="flex-1 flex xl:self-center">
            <Icon icon={'ic:outline-email'} class="text-white" height={50} />
            <div class="flex-1 ml-2 self-center">
              <div class="text-md text-white self-center">Email kami kapanpun</div>
              <div class="text-lg font-semibold text-white self-center">kodestatistika@gmail.com</div>
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

