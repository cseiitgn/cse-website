import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        heroSubtitle: fields.text({
          label: 'Hero Subtitle',
          description: 'Text before the rotating research areas',
        }),
        bannerText: fields.text({
          label: 'Banner Text',
          description: 'Top banner announcement text',
        }),
        bannerLink: fields.text({
          label: 'Banner Link',
          description: 'URL for the banner CTA',
        }),
      },
    }),
  },

  collections: {
    announcements: collection({
      label: 'Announcements',
      slugField: 'title',
      path: 'src/content/announcements/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Deadline', value: 'deadline' },
            { label: 'Seminar', value: 'seminar' },
            { label: 'News', value: 'news' },
          ],
          defaultValue: 'news',
        }),
        date: fields.date({ label: 'Date' }),
        description: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        link: fields.text({ label: 'Link URL' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    seminars: collection({
      label: 'Seminars',
      slugField: 'title',
      path: 'src/content/seminars/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        speaker: fields.text({ label: 'Speaker' }),
        date: fields.date({ label: 'Date' }),
        time: fields.text({ label: 'Time' }),
        venue: fields.text({ label: 'Venue' }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Upcoming', value: 'upcoming' },
            { label: 'Past', value: 'past' },
          ],
          defaultValue: 'upcoming',
        }),
        content: fields.markdoc({ label: 'Abstract / Details' }),
      },
    }),

    news: collection({
      label: 'News',
      slugField: 'title',
      path: 'src/content/news/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Award', value: 'award' },
            { label: 'Recognition', value: 'recognition' },
            { label: 'Student Achievement', value: 'student' },
            { label: 'Grant', value: 'grant' },
            { label: 'General', value: 'general' },
          ],
          defaultValue: 'general',
        }),
        description: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog-posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        author: fields.text({ label: 'Author' }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        endDate: fields.date({ label: 'End Date (optional)' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Workshop', value: 'workshop' },
            { label: 'Conference', value: 'conference' },
            { label: 'School', value: 'school' },
            { label: 'Outreach', value: 'outreach' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'other',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
