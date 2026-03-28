import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: `heroSection`,
  title: `Hero Section`,
  type: `object`,
  fields: [
    defineField({
      name: `titleTag`,
      title: `Title Tag`,
      type: `string`,
      description: `The small text above the main title`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: `supportingText`,
      title: `Supporting Text`,
      type: `text`,
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: `image`,
      title: `Hero Image`,
      type: `image`,
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
