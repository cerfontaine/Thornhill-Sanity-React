export default {
    name: 'about',
    title: 'About Post',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of the post (will not be used in the front end)',
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
            name: 'post',
            title: 'Post',
            type: 'blockContent',
        },
        {
            title: 'Is the post, the main post ? [WARNING] Only one',
            name: 'mainpost',
            type: 'boolean',
        }
    ],
}
