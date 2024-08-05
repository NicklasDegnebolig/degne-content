import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  content: {
    blogPost: group({
      title: 'Blog Post',
      description: 'Schema for blog posts',
      fields: {
        title: field({
          type: 'text',
          title: 'Title',
          description: 'The title of the blog post',
          default: '',
          required: true
        }),
        description: field({
          type: 'textarea',
          title: 'Description',
          description: 'A brief description of the blog post',
          default: '',
          required: true
        }),
        image: field({
          type: 'text',
          title: 'Image URL',
          description: 'URL of the image for the blog post',
          default: '',
          required: true
        }),
        slug: field({
          type: 'text',
          title: 'Slug',
          description: 'URL-friendly identifier for the blog post',
          default: '',
          required: true
        })
      }
    })
  }
})