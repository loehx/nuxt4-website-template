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
      <img :src="photo.fields.file.url" style="width: 50%">
      <br>
      by {{ author.fields.name }}
    </div>
  </article>
</template>