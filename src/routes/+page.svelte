<script>
  import "../app.postcss";
  import Icon from "@iconify/svelte";
  import HeaderButton from "$components/HeaderButton.svelte";
  import logo from "$assets/logo_kode_statistika.png";
  import mainIllust from "$assets/home_illust.png";
  import CollapsibleContainer from "$components/CollapsibleContainer.svelte";
</script>

<div>
  <header class="sticky top-0 z-50 p-1 flex bg-white space-between">
    <div class="p-2 flex-1 flex">
      <img src={logo} height="40" width="40" alt="Logo Kode Statistika" />
      <div class="text-2xl font-bold text-primaryDark ml-2 self-center">
        KodeStatistika
      </div>
    </div>
    <div class="flex">
      <HeaderButton label="Home" target="home" />
      <HeaderButton label="Services" target="services" />
      <HeaderButton label="FAQs" />
      <HeaderButton label="About" />
    </div>
  </header>
  <main class="relative">
    <div id="home" class="md py-10 flex">
      <div class="flex-1 self-center p-10">
        <div class="self-end">
          <div class="text-7xl font-bold text-primaryDark">Kode Statistika</div>
          <div class="font-semibold text-xl text-accent">
            Jasa Pembuatan Aplikasi dan Olah Statistika
          </div>
          <p class="text-xl text-blueDeepDark mt-4">
            Melayani juga private les bagi kamu yang ingin lebih menekuni koding
            dan statistika. Terdapat juga beberapa artikel yang dapat diakses
            secara gratis.
          </p>
          <div class="flex mt-10">
            <a
              href="#home"
              class="rounded-2xl bg-primaryDark p-2 px-6 mr-4 text-center text-white font-bold text-xl"
            >
              Mulai Konsultasi
            </a>
            <a
              href="#home"
              class="text-accent font-bold text-xl px-4 leading-10 border-b-4 border-accent self-center text-center"
            >
              Lihat Services
            </a>
          </div>
        </div>
      </div>
      <div class="flex-1 p-10">
        <img src={mainIllust} alt={"Main Illustration"} />
      </div>
    </div>
    <div
      id="services"
      class="relative flex-none snap-end snap-always xl:flex bg-greenSoft bg-opacity-20"
    >
      <div class="max-w-screen-2xl flex xl:px-16 xl:py-10 w-full">
        <div>
          <div class="text-5xl font-bold text-accent">Services.</div>
          <div class="text-xl font-semibold text-blueDeepDark mt-4 w-[350px]">
            Kami memiliki beberapa layanan yang membantu anda menyelesaikan
            permasalahan yang anda alami!
          </div>
        </div>
        <div class="flex-1 w-full pl-16 flex-column">
          <div class="flex flex-nowrap">
            <div class="flex-1 w-full mr-8">
              <Icon
                icon="mdi:graph-box-plus-outline"
                class="text-greyDark"
                height={64}
              />
              <div class="text-2xl font-bold text-accent mt-4">
                Olah Statistika.
              </div>
              <div class="text-xl font-semibold text-blueDeepDark mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div class="flex-1 w-full ml-8">
              <Icon icon="ph:pen-bold" class="text-greyDark" height={64} />
              <div class="text-2xl font-bold text-accent mt-4">
                Penulisan Karya Ilmiah.
              </div>
              <div class="text-xl font-semibold text-blueDeepDark mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div class="flex flex-nowrap mt-8">
            <div class="flex-1 w-full mr-8">
              <Icon
                icon="fluent-mdl2:website"
                class="text-greyDark"
                height={64}
              />
              <div class="text-2xl font-bold text-accent mt-4">
                Pembuatan Website.
              </div>
              <div class="text-xl font-semibold text-blueDeepDark mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div class="flex-1 w-full ml-8">
              <Icon
                icon="carbon:application-mobile"
                class="text-greyDark"
                height={64}
              />
              <div class="text-2xl font-bold text-accent mt-4">
                Pembuatan Mobile App.
              </div>
              <div class="text-xl font-semibold text-blueDeepDark mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="faq">
      <CollapsibleContainer />
    </div>
  </main>
  <footer />
</div>
