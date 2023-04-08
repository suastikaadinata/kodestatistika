<script>
  import "../app.postcss";
  import HeaderButton from "$components/HeaderButton.svelte";
  import logo from "$assets/logo_kode_statistika.png";
  import mainIllust from "$assets/home_illust.png";
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
      <HeaderButton label="Home" />
      <HeaderButton label="Services" />
      <HeaderButton label="About Us" />
    </div>
  </header>
  <main class="relative">
    <div id="home" class="flex md py-10">
      <div class="flex-1 self-center p-10">
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
      <div class="flex-1 p-10">
        <img src={mainIllust} alt={"Main Illustration"} />
      </div>
    </div>
  </main>
  <footer />
</div>
