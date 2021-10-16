<template>
  <div class="grid">
    <section class="p-3 lg:p-6 xl:p-8">
      <figure class="flex flex-col items-center w-full my-5 xl:p-6">
        <picture
          class="w-24 h-24 p-4 rounded-md shadow-lg dark:shadow-xl xl:w-36 xl:h-36"
        >
          <source type="image/webp" srcset="/icon.webp" />
          <source type="image/png" srcset="/icon.png" />
          <img
            loading="lazy"
            src="/icon.png"
            alt="Fluffy Icon"
            width="720"
            height="720"
          />
        </picture>
      </figure>
      <h1
        class="pb-2 text-2xl text-center dark:text-bluegray-100 text-bluegray-800 md:text-3xl font-branch lg:text-4xl xl:text-5xl"
      >
        Willkommen bei Fluffy, dem leckeren, spritzigen Erfrischungsgetränk!
      </h1>
    </section>
    <section class="p-3 lg:p-6 xl:p-8">
      <a
        href="https://unsplash.com/photos/cwM9uPpiAhM"
        target="_blank"
        rel="noopener"
      >
        <picture
          class="float-right m-3 transition duration-300 rounded-lg drop-shadow-lg md:m-4 lg:m-6 xl:m-8 w-36 h-36 lg:w-44 lg:h-44 xl:w-48 xl:h-48 filter hover:blur-sm"
        >
          <source type="image/webp" srcset="/images/index/lemon.webp" />
          <source type="image/jpeg" srcset="/images/index/lemon.jpg" />
          <img
            loading="lazy"
            src="/images/index/lemon.jpg"
            alt="Zitrone am Zitronenbaum"
            width="2800"
            height="2800"
            class="rounded-lg"
          />
        </picture>
      </a>
      <h2
        class="mb-2 text-xl text-bluegray-800 dark:text-bluegray-100 md:text-2xl lg:text-3xl xl:text-4xl font-branch"
      >
        Fluffy - die spritzige Limonade
      </h2>
      <p
        class="text-justify lg:text-lg text-bluegray-600 dark:text-bluegray-300 font-kyivsans"
      >
        Hergestellt wird Fluffy aus den besten Zutaten aus der Um&shy;gebung.
        Wir ver&shy;wenden fast aus&shy;schließlich öko&shy;logische
        Anbau&shy;produkte. Somit ist unsere Limo&shy;nade nicht nur ungemein
        lecker, sondern auch noch gesund.
      </p>
    </section>
    <section
      class="p-2 mx-auto rounded-md shadow-md bg-lemon-100 dark:bg-lemon-600 lg:p-4 xl:p-6 lg:pr-5 lg:w-5/6"
    >
      <h2
        class="text-xl text-bluegray-800 dark:text-bluegray-100 md:text-2xl lg:text-3xl xl:text-4xl font-branch"
      >
        Gewinnspiel
      </h2>
      <p
        class="p-2 text-justify lg:text-lg text-bluegray-700 dark:text-bluegray-50 font-kyivsans"
      >
        Machen Sie mit und Sie erhalten die Chance auf wertvolle Preise:
      </p>
      <ul
        class="p-2 mx-2 my-1 list-decimal list-inside font-kyivsans lg:text-lg text-bluegray-700 dark:text-bluegray-50"
      >
        <li>Preis: Eine Reise in den Harz</li>
        <li>Preis: Ein Jahr ein Monatsabo an Limonade</li>
        <li>
          Preis: Ein Warengutschein über 50 Euro für alle Produkte der
          Fluffy-GmbH
        </li>
      </ul>
      <picture class="float-right w-24 h-24 p-2 lg:p-4 xl:w-36 xl:h-36">
        <source type="image/webp" srcset="/images/index/question-mark.webp" />
        <source type="image/png" srcset="/images/index/question-mark.png" />
        <img
          loading="lazy"
          src="/images/index/question-mark.png"
          alt="Fragezeichen"
          width="720"
          height="720"
        />
      </picture>
      <p
        class="p-2 text-justify lg:text-lg text-bluegray-700 dark:text-bluegray-50 font-kyivsans"
      >
        Teilnehmen kann jeder der mindestens 18 Jahre alt ist. Mitmachen kann
        man noch bis zum 31.10.2007. Die Preisfrage lautet: Wieviele Mitarbeiter
        hat die Fluffy GmbH zur Zeit?
      </p>
      <p
        class="p-2 text-center lg:text-lg text-bluegray-700 dark:text-bluegray-50 font-kyivsans"
      >
        <strong>Viel Erfolg!</strong>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: 'Limonadenfabrik',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Willkommen bei Fluffy, dem leckeren, spritzigen Erfrischungsgetränk!',
        },
      ],
    }
  }
}
</script>
