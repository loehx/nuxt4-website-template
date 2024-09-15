<script lang="ts" setup>
const { headlineFont, bodyFont } = useDesign();

useHead({
  link: [
    {
      rel: "stylesheet",
      href: `https://fonts.googleapis.com/css?family=${encodeURIComponent(
        headlineFont.value
      )}`,
    },
    {
      rel: "stylesheet",
      href: `https://fonts.googleapis.com/css?family=${encodeURIComponent(
        bodyFont.value
      )}:wght@400;700&display=swap`,
    },
  ],
});
</script>

<style lang="scss">
body {
  font-family: var(--body-font);
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--headline-font);
  font-weight: 700;
}
</style>
