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
  }));

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    const pos = element?.offsetTop || 0;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
</script>

<div class="relative ">
  <Navbar />
  <div id="home" class="w-full py-10 flex flex-col xl:flex-row justify-center">
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
          Kode Statistika menyediakan solusi teknologi terkini untuk memenuhi kebutuhan anda. Layanan Pembuatan Website dan Mobile Apps untuk memberikan pengalaman pengguna yang efektif dan menarik, sementara Karya Ilmiah yang ditawarkan mencakup penulisan skripsi, tesis dan jurnal ilmiah. Dalam layanan Analisis Data, kami mengumpulkan dan mengolah data dengan metode yang terbaik, serta memberikan interpretasi data untuk membantu anda dalam membuat keputusan bisnis ataupun pengolahan data karya ilmiah yang lebih baik. Selain itu, layanan les private statistika kami dapat membantu anda memahami konsep statistika dan menerapkannya dalam kehidupan sehari-hari ataupun dalam dunia kerja.
        </div>
        <div class="mt-2 text-xl text-blueDeepDark">
          Kode Statistika dijalankan oleh tim yang terampil dan berpengalaman dalam bidang software development dan pengolahan data statistika. Kami berkomitmen untuk memberikan solusi terbaik dan efektif untuk anda.
        </div>
        <div class="flex mt-4">
          <div class="p-5 mr-4">
            <div class="text-center text-3xl font-bold text-greenSoftDark">
              15+
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
      <ServiceView icon={$t(service.icon)} title={$t(service.title)} description="Lorem Ipsum is simply dummy text of the printing and type industry."/>
    {/each}
  </div>
  </div>
  <div id="faq" class="mr-2 ml-2 pt-20">
    <div class="w-full flex justify-center mb-10">
      <div class="text-5xl font-bold mb-4 text-blueDeepDark border-b-4 border-b-blueDeepDark px-4 py-4">FaQ</div>
    </div>
    <div class="flex flex-col">
      <CollapsibleContainer />
      <CollapsibleContainer />
      <CollapsibleContainer />
      <CollapsibleContainer />
      <CollapsibleContainer />
    </div>
  </div>
  <div id="contact" class="mr-2 ml-2 mt-10 xl:m-20">
    <div class="w-full flex justify-center mb-10">
      <div class="text-5xl font-bold mb-4 text-blueDeepDark border-b-4 border-b-blueDeepDark px-4 py-4">Hubungi Kami</div>
    </div>
    <div class="w-full flex justify-center">
      <div class="w-full xl:w-1/2 shadow-2xl shadow-greenSoftDark/40 xl:flex rounded-xl">
        <div class="flex-1 flex flex-col justify-center p-5">
          <div class="text-2xl font-bold text-accent">Get In Touch</div>
          <div class="text-lg font-semibold text-blueDeepDark mt-2">
            Ayo konsultasikan kebutuhanmu dengan kami.
          </div>
        </div>
        <div class="flex-1 rounded-xl bg-greenSoftDark p-5 m-2">
          <div class="text-2xl font-bold text-white">Informasi Kontak</div>
          <div class="flex mt-6">
            <Icon icon={'ic:baseline-access-time'} class="text-white" height={30} />
            <div class="text-lg font-semibold text-white self-center ml-2">Senin - Minggu / 24 Jam</div>
          </div>
          <div class="flex mt-4">
            <Icon icon={'material-symbols:location-on-outline'} class="text-white" height={30} />
            <div class="text-lg font-semibold text-white self-center ml-2">Denpasar, Bali, Indonesia</div>
          </div>
          <div class="flex mt-4">
            <Icon icon={'mdi:instagram'} class="text-white" height={30} />
            <div class="text-lg font-semibold text-white self-center ml-2">@kode_statistika</div>
          </div>
          <div class="flex mt-4">
            <Icon icon={'ic:baseline-whatsapp'} class="text-white" height={30} />
              <div class="text-lg font-semibold text-white self-center ml-2">085737354721</div>
          </div>
        </div>
        </div>
    </div>
  </div>
  <div class="footer w-full mt-20 bg-greenSoftDark p-5 flex justify-center">
    <div class="text-lg font-semibold text-white">
      © 2023 Kode Statistika. All Rights Reserved.
    </div>
  </div>
</div>

