<script lang="ts" setup>
const { title, photo, imageCaption, author } = await getPostByAuthor("Janine McKay");
</script>

<template>
  <article>
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
    <div>
      {{ imageCaption }}
      <br>
      by {{ author.fields.name }}
    </div>
  </article>
</template>