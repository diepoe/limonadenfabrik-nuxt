<template>
  <div class="grid">
    <section class="mb-4 md:mb-6">
      <!--TODO: Mitarbeiterbild-->
      <!--TODO: Bild Hamburg-->
      <h1
        class="pb-2 text-2xl text-bluegray-800 dark:text-bluegray-100 md:text-3xl font-branch lg:text-4xl xl:text-5xl"
      >
        Über das Unternehmen
      </h1>
      <br />
      <a href="https://unsplash.com/" target="_blank" rel="noopener">
        <picture
          class="float-left m-2 mt-1 mr-3 -mb-1 transition duration-500 rounded-lg lg:mb-1 xl:mt-1 lg:mt-1 drop-shadow-lg md:ml-1 md:mr-5 lg:ml-1 lg:mr-5 xl:mr-8 lg:w-44 xl:w-48 filter hover:blur-sm"
        >
          <source type="image/webp" srcset="/images/about/hamburg.webp" />
          <source type="image/jpeg" srcset="/images/about/hamburg.jpg" />
          <img
            loading="lazy"
            src="/images/about/hamburg.jpg"
            alt="Speicherstadt Hamburg"
            width="2400"
            height="1352"
            class="w-48 h-auto rounded-lg sm:w-60 md:w-80 lg:w-full"
          />
        </picture>
      </a>
      <p
        class="text-justify lg:text-lg text-bluegray-700 dark:text-bluegray-300 font-kyivsans"
      >
        Fluffy GmbH ist ein junges, innovatives Unter&shy;nehmen mit zur Zeit 34
        Mit&shy;arbeitern, das alkohol&shy;freie Erfrischungs&shy;getränke
        aus&shy;schließlich bio&shy;logisch herstellt. Das Unter&shy;nehmen hat
        seinen Sitz in Hamburg Altona. Es ist aus der ehe&shy;maligen Altonaer
        Traditions&shy;brauerei hervor&shy;gegangen. Die Basis all unserer
        Getränke ist das wert&shy;volle Mineral&shy;wasser aus dem Harz. Diese
        besondere Quelle zeichnet sich durch besondere Rein&shy;heit und vielen
        Spuren&shy;elementen aus.
      </p>
    </section>
    <section
      class="p-2 mx-2 my-2 bg-yellow-100 rounded-md shadow-md dark:bg-yellow-300 lg:pt-4 lg:pr-5"
    >
      <a
        href="https://unsplash.com/photos/hINQgaTqg7Q"
        target="_blank"
        rel="noopener"
      >
        <picture
          class="float-left h-auto m-2 mt-1 mr-3 transition duration-500 rounded-lg xl:mt-1 lg:mt-1 drop-shadow-lg md:ml-4 md:mr-5 lg:m-4 lg:ml-6 lg:mr-5 xl:ml-8 w-36 lg:w-44 xl:w-48 filter hover:blur-sm"
        >
          <source
            type="image/webp"
            srcset="/images/about/lemonade-fruit.webp"
          />
          <source type="image/jpeg" srcset="/images/about/lemonade-fruit.jpg" />
          <img
            loading="lazy"
            src="/images/about/lemonade-fruit.jpg"
            alt="Zitrone am Zitronenbaum"
            width="4912"
            height="6140"
            class="rounded-lg"
          />
        </picture>
      </a>
      <p class="p-2 text-justify lg:text-lg text-bluegray-600 font-kyivsans">
        Die Marke Fluffy als Garant für leckere Limo&shy;naden&shy;sorten, wurde
        2001 ent&shy;wickelt und er&shy;freut sich seitdem wachsend&shy;er
        Beliebt&shy;heit. Die Getränke&shy;sorten der Marke Fluffy sind alle
        rein durch und durch bio&shy;logisch her&shy;gestellt und ent&shy;halten
        keinen zu&shy;sätzlichen Zucker. Sie wird somit besonders von
        ernährungs&shy;bewußten Kunden bevor&shy;zugt.
      </p>
      <p
        class="p-2 mt-2 text-justify xl:mt-4 lg:text-lg text-bluegray-600 font-kyivsans"
      >
        Überzeugen sie sich selbst und bestellen sie die leckere Fluffy Limonade
        in unserem <a href="/shop" class="underline">Onlineshop</a>.
      </p>
    </section>
  </div>
</template>

<script lang="ts">

export default{
  head() {
      return {
        title: "Über das Unternehmen",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Erfahren sie mehr über das Unternehmen hinter der Fluffy Limonadenfabrik!'
          }
        ]
      }
    }
}
</script>