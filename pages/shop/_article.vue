<template>
  <div class="grid">
    <figure
      class="
        grid grid-cols-1
        p-1
        mb-3
        md:grid-cols-2
        place-content-end
        md:mb-6
        lg:mb-8
        xl:mb-8
      "
    >
      <picture class="h-auto max-w-full p-2 max-h-96">
        <source type="image/webp" :srcset="page.image + '.webp'" />
        <source type="image/png" :srcset="page.image + '.png'" />
        <img
          :src="page.image + '.png'"
          :alt="page.title"
          class="h-auto max-w-full p-2 max-h-96"
        />
      </picture>
      <section class="grid items-center grid-cols-3 place-content-end">
        <h1
          class="
            col-span-2
            pb-2
            text-xl text-bluegray-800
            dark:text-bluegray-100
            sm:text-2xl
            md:text-3xl
            font-branch
            lg:text-4xl
            xl:text-5xl
            2xl:text-6xl
          "
        >
          {{ page.title }}
        </h1>
        <span
          class="text-xl xl:text-2xl fontt-medium text-lemon-500 font-kyivsans"
          >{{ page.price }} €</span
        >
      </section>
    </figure>

    <div class="prose md:prose-lg xl:prose-xl dark:prose-dark font-kyivsans">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = params.article

    const page = await $content('shop/' + article).fetch()
    return { page }
  },
}
</script>
