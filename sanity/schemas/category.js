export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Category',
      type: 'image',
    },
  ],
};
