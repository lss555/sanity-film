export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'url',
      title: 'Vimeo or Youtube URL',
      type: 'string',
    },
    {
      name: 'director',
      title: 'Director',
      type: 'reference',
      to: {type: 'director'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Date released',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      description: 'A little about the film, who you worked with etc.',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'director.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
