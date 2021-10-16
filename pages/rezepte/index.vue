<template>
  <div class="grid">
    <section>
      <h1
        class="
          pb-2
          text-2xl text-bluegray-800
          dark:text-bluegray-100
          md:text-3xl
          font-branch
          lg:text-4xl
          xl:text-5xl
        "
      >
        Rezepte
      </h1>
      <a
        href="https://unsplash.com/photos/YNMjGIPgD_c/info"
        target="_blank"
        rel="noopener"
      >
        <img
          loading="lazy"
          src="/images/rezepte/fluffy-mint.jpg"
          alt="Limonade mit Strohhalm"
          width="2761"
          height="3451"
          class="
            z-0
            float-right
            h-auto
            m-3
            mt-1
            transition
            duration-300
            rounded-lg
            xl:mt-1
            lg:mt-1
            drop-shadow-lg
            md:ml-4
            lg:m-4 lg:ml-6
            xl:ml-8
            w-36
            lg:w-44
            xl:w-48
            filter
            hover:blur-sm
          "
        />
      </a>
      <p
        class="
          text-justify
          lg:text-lg
          text-bluegray-700
          dark:text-bluegray-300
          font-kyivsans
        "
      >
        Fluffy Limonade ent&shy;spricht dem Trend nach natür&shy;licher und
        ge&shy;sunder Er&shy;nährung: Ein alkohol&shy;freies
        Erfrisch&shy;ungs&shy;getränk, das auf natürliche Art her&shy;gestellt
        wird. Fluffy Limonade ist von Haus aus calcium&shy;reich aber
        natriumarm. Mit den ent&shy;haltenen Mineralien stellt es ein wichtigen
        Bau&shy;stein zur gesunden Er&shy;nährung dar, und dieses Tag für Tag.
        <br />
        Jüngste Forschungs&shy;ergebnisse hab&shy;en ge&shy;zeigt, dass
        Fluffy&shy;limonade überaus geeignet ist, die tägliche Ver&shy;sorgung
        mit Mineral&shy;stoffen und Spuren&shy;elementen sicher&shy;zustellen.
      </p>
    </section>
    <section>
      <ul
        class="
          grid
          w-full
          grid-rows-3
          gap-2
          my-2
          lg:grid-cols-3 lg:gap-4 lg:my-6
          xl:gap-6
          md:my-4
          place-content-center place-items-center
        "
      >
        <li
          class="
            grid
            w-full
            transition
            duration-500
            rounded-md
            shadow-lg
            hover:translate-y-1
            bg-blue-50
            dark:bg-bluegray-800
            hover:shadow-xl
            place-items-center
            text-bluegray-600 text-md
            lg:text-xl
            2xl:text-3xl
            font-kyivsans
          "
          v-for="item in recipes"
          :key="(item.img, item.name, item.url)"
        >
          <img
            v-bind:src="item.img"
            v-bind:alt="item.name"
            loading="lazy"
            class="rounded-t-md"
          />
          <a
            v-bind:href="item.url"
            rel="preload"
            class="
              pb-2
              mx-auto
              my-2
              no-underline
              hover:underline
              dark:text-bluegray-200
              text-bluegray-800
            "
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          url: '/rezepte/der-magische-trunk',
          img: '/images/rezepte/der-magische-trunk.jpg',
          name: 'Der magische Trunk',
        },
        {
          url: '/rezepte/der-schnelle-laeufer',
          img: '/images/rezepte/der-schnelle-laeufer.jpg',
          name: 'Der schnelle Läufer',
        },
        {
          url: '/rezepte/der-erfrischer',
          img: '/images/rezepte/der-erfrischer.jpg',
          name: 'Der Erfrischer',
        },
      ],
    }
  },
}
</script>
