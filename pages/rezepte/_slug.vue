<template>
  <article class="prose md:prose-lg xl:prose-xl dark:prose-dark font-kyivsans">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
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
