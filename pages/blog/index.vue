<template>
    <div>
      <h1>Blog</h1>
      <div v-for="post in posts" :key="post.slug">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <img :src="post.image" :alt="post.title" />
        <nuxt-link :to="`/blog/${post.slug}`">Read more</nuxt-link>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const { data: posts, error } = await useAsyncData('posts-list', async () => {
  try {
    const result = await queryContent('/blog').find()
    console.log('Fetched posts:', result)
    return result
  } catch (err) {
    console.error('Error fetching posts:', err)
    throw err
  }
})

if (error.value) {
  console.error('Error fetching posts:', error.value)
} else {
  console.log('Fetched posts:', posts.value)
}
  </script>