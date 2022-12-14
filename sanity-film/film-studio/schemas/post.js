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
      name: 'highlight',
      title: 'Highlight?',
      description: 'If you set Hightlight to true (green) it will be on your homepage. I recommend only having 3 set to your home page',
      type: 'boolean',
    },
    {
      name: 'about',
      title: 'About page info',
      description: "one post should have this as true (green) and that's all, the post body is your about page text.",
      type: 'boolean',
    },
    {
      name: 'publishedAt',
      title: 'Date released',
      type: 'date',
      description: 'Use Format 2022-10-18 AKA: YYYY-MM-DD',
      options: {
        dateFormat: 'YYYY-MM',
      }
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
