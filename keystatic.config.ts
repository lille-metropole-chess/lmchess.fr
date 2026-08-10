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
    tournaments: collection({
      label: 'Tournaments',
      slugField: 'name',
      path: 'src/content/tournaments/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Tournament Name' } }),
        tourEditionSlug: fields.text({
          label: 'Chess Tour Edition Slug',
          description:
            'Laisser vide pour un tournoi ordinaire. Pour un tournoi du Chess Tour, doit correspondre au slug de l\'édition (ex. edition-25-26)',
        }),
        date: fields.date({ label: 'Date' }),
        rounds: fields.integer({ label: 'Number of Rounds', defaultValue: 9 }),
        results: fields.array(
          fields.object({
            place: fields.integer({ label: 'Place' }),
            fideId: fields.text({
              label: 'FIDE ID',
              description: 'FIDE licence number — used to identify the same player across tournaments. Leave empty if none.',
            }),
            name: fields.text({ label: 'Player Name' }),
            rating: fields.integer({ label: 'Rating' }),
            category: fields.text({ label: 'Category (e.g. SenM, JunF)' }),
            club: fields.text({ label: 'Club' }),
            score: fields.number({ label: 'Score (e.g. 7.5 for 7½)' }),
          }),
          {
            label: 'Results',
            itemLabel: (props) =>
              `${props.fields.place.value}. ${props.fields.name.value} — ${props.fields.score.value} pts`,
          }
        ),
        poster: fields.image({
          label: 'Affiche',
          directory: 'public/img/tournaments',
          publicPath: '/img/tournaments/',
        }),
        helloAssoUrl: fields.text({ label: 'Lien HelloAsso (inscription)' }),
        keyInfo: fields.array(
          fields.object({
            label: fields.text({ label: 'Libellé' }),
            value: fields.text({ label: 'Valeur' }),
          }),
          {
            label: 'Informations clés',
            itemLabel: (props) => props.fields.label.value || 'Info',
          }
        ),
        accommodations: fields.array(
          fields.object({
            name: fields.text({ label: 'Nom de l’hôtel' }),
            url: fields.text({ label: 'Lien' }),
            phone: fields.text({ label: 'Téléphone' }),
            discountCode: fields.text({ label: 'Code de réduction' }),
            discountInfo: fields.text({
              label: 'Comment en bénéficier',
              multiline: true,
            }),
          }),
          {
            label: 'Hébergement',
            itemLabel: (props) => props.fields.name.value || 'Hôtel',
          }
        ),
        ffeResultsUrl: fields.text({ label: 'Lien résultats FFE' }),
        winnerPhotos: fields.array(
          fields.image({
            directory: 'public/img/tournaments',
            publicPath: '/img/tournaments/',
          }),
          { label: 'Photos des gagnants' }
        ),
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
  },
});
