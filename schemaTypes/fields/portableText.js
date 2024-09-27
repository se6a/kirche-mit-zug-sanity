import {createPortableText} from '/lib/fields/portableText';
import {styles, decorators, annotations, lists} from '/lib/fields/portableText/elements';

export default createPortableText({
	styles: styles.filter((style) => ['title', 'subtitle1'].includes(style.value)),
	decorators,
	annotations,
	lists,
});
