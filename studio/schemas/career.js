export default {
    name: 'career',
    title: 'Career offer',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Job name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'location',
            title: 'Location',
            type: 'reference',
            to: {type: 'location'},
        },
        {
            name: 'jobtype',
            title: 'Job type',
            type: 'reference',
            to: {type: 'jobtype'},
        },
        {
            name: 'description',
            title: 'Job Description',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        },
        {
            name: 'requirements',
            title: 'Job Requirements',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [{title: 'Bullet', value: 'bullet'}],
                },
            ],
        },
        {
            name: 'apply',
            title: 'How to apply',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        },
    ],
}
