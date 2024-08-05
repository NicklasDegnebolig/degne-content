<template>
  <main>
    <article v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <img :src="post.image" :alt="post.title" />
       <ContentDoc :path="post._path" />
    </article>
  </main>
</template>

<script setup>


const route = useRoute()
console.log('Route params:', route.params)

const { data: post, error } = await useAsyncData('post', async () => {
  try {
    const result = await queryContent('/blog').where({ slug: route.params.slug[0] }).findOne()
    console.log('Fetched post:', result)
    return result
  } catch (err) {
    console.error('Error fetching post:', err)
    throw err
  }
})

if (error.value) {
  console.error('Error fetching post:', error.value)
} else {
  console.log('Fetched post:', post.value)
}
</script>