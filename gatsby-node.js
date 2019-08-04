module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'ContentfulProject') {
        const slug = node.slug;
        console.log("----", slug);

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}