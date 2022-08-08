export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the Restaurant',
      validation: Rule => Rule.required(),
    },
    {
      name: 'genre',
      type: 'string',
      title: 'Genre of the Restaurant',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating of the Restaurant',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    },
  ],
};
