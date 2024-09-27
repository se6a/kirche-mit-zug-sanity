export function createPicture(conf = {}) {
    const {fields = [], restConf = {}} = conf;
    return {
        type: 'image',
        name: 'picture',
        title: 'Bild',
        fields: [
            {
                type: 'string',
                name: 'alt',
                title: 'Alternativ-Text',
                // description:
                // 	'Ein Alt-Text (kurz für Alternativtext) ist eine kurze Bildbeschreibung oder eine kurze sprachliche Übersetzung eines visuellen Inhalts im Internet, die blinden Benutzern von Hilfsmitteln wie Screenreadern anstelle des Bildes vorgelesen wird.',
                validation: (R) => R.required(),
            },

            {
                type: 'string',
                name: 'caption',
                title: 'Bild Legende',
            },

            // {
            // 	type: 'url',
            // 	name: 'captionLink',
            // 	title: 'Bild Legende: Link',
            // },

            ...fields,
        ],
        ...restConf,
    };
}

export default createPicture();
