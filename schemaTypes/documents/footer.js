export default {
    type: 'document',
    name: 'footer',
    title: 'Footer',
    preview: {
        prepare() {
            return {title: 'Footer'};
        },
    },
    __experimental_formPreviewTitle: false,
    fields: [
        {
            type: 'object',
            name: 'textContact',
            title: 'Kontakt',
            fields: [
                {
                    name: 'title',
                    title: 'Titel',
                    type: 'text',
                    rows: 2,
                },
                {
                    name: 'portableText',
                    type: 'portableText',
                    title: 'Text',
                },
            ],
        },
    ],
};
