import {defineField, defineType} from 'sanity'
import {heroSection} from '../objects/heroSection'

export const homePage = defineType({
  name: `homePage`,
  title: `Home Page`,
  type: `document`,
  fields: [
    defineField({
      name: `interalTitle`,
      title: `Internal Title`,
      type: `string`,
      initialValue: `Home Page`,
      readOnly: true,
    }),
    defineField({
      name: `heroSection`,
      title: `Hero Section`,
      type: `heroSection`,
    }),
  ],
})
