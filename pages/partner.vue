<template>
  <section class="w-full text-center">
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
      Handelspartner
    </h1>
    <br />
    <figure
      class="
        flex flex-col
        items-center
        w-full
        p-2
        my-2
        border-2
        rounded-md
        border-lemon-500
        xl:p-4
      "
    >
      <picture class="w-24 h-24 p-2 xl:w-36 xl:h-36">
        <source type="image/webp" srcset="/images/partner/construction.webp" />
        <source type="image/png" srcset="/images/partner/construction.png" />
        <img
          loading="lazy"
          src="/images/partner/construction.png"
          alt="Construction Icon"
          width="720"
          height="720"
        />
      </picture>
      <figcaption
        class="
          text-justify text-lemon-500
          md:text-lg
          lg:text-xl
          xl:text-2xl
          font-kyivsans
        "
      >
        Dieser Abschnitt befindet sich noch in Arbeit.<br />
        Schau gerne noch einmal später vorbei 😉
      </figcaption>
    </figure>
  </section>
</template>
