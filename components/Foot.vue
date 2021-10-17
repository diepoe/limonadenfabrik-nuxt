<template>
  <footer
    class="
      flex flex-row
      items-center
      justify-center
      py-4
      mt-4
      space-x-2
      lg:text-xl
      font-cyrene
      text-bluegray-900
      dark:text-bluegray-300
      xl:text-2xl
    "
  >
    <section>&copy; {{ year }}</section>
    <section>
      <NuxtLink to="/impressum" class="flex underline">Impressum</NuxtLink>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return { year: null }
  },
  beforeMount() {
    const date = new Date()
    this.year = date.getFullYear()
  },
}
</script>
