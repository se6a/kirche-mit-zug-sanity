import {createArrayInlineEditor} from '/lib/fields/arrayInlineEditor';
import agenda from './agenda';
import overview from './overview';
import quotesAndStills from './quotesAndStills';
import reviews from './reviews';
import sponsors from './sponsors';
import trailer from './trailer';
import contact from './contact';

export default createArrayInlineEditor({
	name: 'pageSections',
	title: 'Sektionen',
	of: [overview, trailer, agenda, quotesAndStills, reviews, contact, sponsors],
});
