import page from '/lib/documents/page';
import legallyOk from '/lib/fields/legallyOk';

export default page({
	name: 'page-privacy',
	title: 'Datenschutz',
	fields: [legallyOk],
});
