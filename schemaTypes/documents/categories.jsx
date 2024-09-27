export default {
    type: 'document',
    name: 'categories',
    title: 'Kategorien',
    preview: {
        select: {
            name: 'shortName',
            color: 'color',
        },
        prepare({name, color}) {
            return {
                title: name,
                media: (
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: color?.hex,
                        }}
                    ></div>
                ),
            };
        },
    },
    fields: [
        {
            type: 'number',
            name: 'id',
            title: 'ID',
            validation: (R) => R.required(),
        },

        {
            type: 'string',
            name: 'shortName',
            title: 'Name Kurzform',
            validation: (R) => R.required(),
        },

        {
            type: 'string',
            name: 'name',
            title: 'Name',
        },

        {
            type: 'color',
            name: 'color',
            title: 'Farbe',
        },
    ],
};
