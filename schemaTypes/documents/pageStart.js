import page from '/lib/documents/page';

export default page({
    name: 'page-start',
    title: 'Start',
    fields: [
        {
            type: 'object',
            name: 'cta',
            title: 'Action Knopf',
            options: {
                collapsed: true,
            },
            fields: [
                {
                    name: 'useCta',
                    title: 'Aktivieren',
                    type: 'boolean',
                    initialValue: false,
                },
                {
                    name: 'label',
                    title: 'Label',
                    type: 'text',
                    rows: 1,
                    hidden: ({parent}) => parent?.useCta !== true,
                },
                {
                    name: 'link',
                    type: 'link',
                    hidden: ({parent}) => parent?.useCta !== true,
                },
            ],
        },
        {
            type: 'array',
            name: 'images',
            title: 'Bilder',
            options: {
                layout: 'grid',
            },
            of: [
                {
                    type: 'picture',
                    name: 'picture',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            type: 'object',
            name: 'textAbout',
            title: 'Über Kirche Mit Zug',
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
});
