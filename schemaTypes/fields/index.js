import picture from '/lib/fields/picture';
import textWithCount from '/lib/fields/textWithCount';
import portableText from './portableText';
import link, {createLink} from '/lib/fields/link';

export default [
  link,
  createLink({
    name: 'linkReadMore',
    title: 'Mehr Lesen',
    useDestinations: ['pdf', 'url'],
    fields: [
      {
        name: 'label',
        type: 'string',
        initialValue: 'mehr lesen',
      },
    ],
  }),
  picture,
  textWithCount,
  portableText,
];
