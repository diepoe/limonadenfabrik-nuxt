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
        Shop
      </h1>
      <br />
      <p
        class="
          text-justify
          lg:text-lg
          text-bluegray-700
          dark:text-bluegray-300
          font-kyivsans
        "
      >
        Fluffy&shy;limonade kann zur Zeit nur Online bestellt werden. Wir sind
        aber bestrebt, Fluffy in Zukunft in ihrem Super&shy;markt
        <q><i>um die Ecke</i></q>
        anbieten zu können. An&shy;sonsten rufen Sie uns an und be&shy;stellen
        ent&shy;sprechende Produkte. Wir werden diese Ihnen dann umgehend
        zukommen lassen.
      </p>
      <!--TODO: Liste mit Artikeln-->
    </section>
    <section
      class="
        grid grid-cols-1
        gap-3
        my-4
        justify-items-center
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        lg:gap-y-6
      "
    >
      <ShopItem
        v-for="item in articles"
        :key="
          (item.description, item.title, item.price, item.thumbnail, item.path)
        "
        v-bind="item"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('shop').fetch()

    return { articles }
  },
}
</script>
