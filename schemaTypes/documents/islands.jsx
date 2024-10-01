import {orderRankField} from '@sanity/orderable-document-list';

export default {
    type: 'document',
    name: 'islands',
    title: 'Inseln',
    preview: {
        select: {
            title: 'title',
            categoryColor: 'category.color',
            categoryName: 'category.shortName',
        },
        prepare({title, categoryColor, categoryName}) {
            return {
                title,
                subtitle: categoryName,
                media: (
                    <div
                        style={{height: '100%', width: '100%', backgroundColor: categoryColor?.hex}}
                    ></div>
                ),
            };
        },
    },
    fields: [
        orderRankField({
            type: 'islands',
        }),

        {
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (R) => R.required(),
        },

        {
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            validation: (R) => R.required(),
            options: {
                source: 'title',
            },
        },

        {
            type: 'text',
            name: 'islandText',
            title: 'Insel Text',
            description: 'Formatiere den Titel für eine schöne Darstellung in der Insel',
            rows: 2,
        },

        {
            type: 'reference',
            name: 'category',
            title: 'Kategorie',
            to: [{type: 'categories'}],
            options: {
                disableNew: true,
            },
            validation: (R) => R.required(),
        },

        {
            name: 'initiators',
            title: 'Initiantinnen & Initianten',
            description: 'Vor- und Nachname',
            type: 'array',
            of: [
                {
                    name: 'person',
                    title: 'Name der Person',
                    type: 'string',
                    validation: (R) => R.required(),
                },
            ],
            options: {
                layout: 'tags',
            },
        },

        {
            type: 'portableText',
            name: 'description',
            title: 'Beschreibung',
        },

        {
            type: 'picture',
            name: 'image',
            title: 'Bild',
            options: {
                collapsed: true,
            },
        },

        {
            type: 'picture',
            name: 'illustration',
            title: 'Illustration',
            options: {
                collapsed: true,
            },
        },
    ],
};
