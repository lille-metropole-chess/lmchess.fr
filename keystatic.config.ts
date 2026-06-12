import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.KEYSTATIC_STORAGE_KIND === 'github'
    ? {
        kind: 'github',
        repo: {
          owner: 'lille-metropole-chess',
          name: 'lmchess.fr',
        },
      }
    : { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        tournament: fields.relationship({
          label: 'Related Tournament',
          collection: 'tournaments',
          description: 'Link this post to a Chess Tour edition',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
    players: collection({
      label: 'Players',
      slugField: 'name',
      path: 'src/content/players/*',
      schema: {
        name: fields.slug({ name: { label: 'Player Name' } }),
        rating: fields.integer({ label: 'Current Rating' }),
        joinDate: fields.date({ label: 'Join Date' }),
        bio: fields.text({
          label: 'Bio',
          description: 'Player biography or notes',
        }),
      },
    }),
    tournaments: collection({
      label: 'Tournaments',
      slugField: 'name',
      path: 'src/content/tournaments/*',
      schema: {
        name: fields.slug({ name: { label: 'Tournament Name' } }),
        edition: fields.text({ label: 'Edition (e.g., 26-27)' }),
        date: fields.date({ label: 'Tournament Date' }),
        location: fields.text({ label: 'Location' }),
        rounds: fields.integer({ label: 'Number of Rounds', defaultValue: 9 }),
        description: fields.text({
          label: 'Description',
          description: 'Tournament details and rules',
        }),
      },
    }),
    chessTours: collection({
      label: 'Chess Tour Editions',
      slugField: 'title',
      path: 'src/content/chessTours/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/img',
              publicPath: '/img/',
            },
          },
        }),
      },
    }),
    tournamentResults: collection({
      label: 'Tournament Results',
      slugField: 'slug',
      path: 'src/content/tournamentResults/*',
      schema: {
        slug: fields.slug({
          name: { label: 'Result Slug' },
        }),
        tournament: fields.relationship({
          label: 'Tournament',
          collection: 'tournaments',
          description: 'Select the tournament for these results',
        }),
        edition: fields.text({ label: 'Edition' }),
        playerName: fields.text({ label: 'Player Name' }),
        score: fields.text({ label: 'Score (e.g., 7/9)' }),
        points: fields.number({ label: 'Points Earned' }),
        placement: fields.integer({ label: 'Final Placement' }),
        rating: fields.integer({ label: 'Rating at Time' }),
        notes: fields.text({
          label: 'Notes',
          description: 'Performance notes or results details',
        }),
      },
    }),
  },
});
