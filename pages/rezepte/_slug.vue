<template>
  <div>
    <img
      :src="page.img"
      :alt="page.title"
      class="mx-auto mb-4 rounded max-h-64 lg:mb-6 xl:mb-8"
    />
    <article
      class="prose md:prose-lg xl:prose-xl dark:prose-dark font-kyivsans"
    >
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug

    const page = await $content('rezepte/' + slug).fetch()
    return { page }
  },
}
</script>
