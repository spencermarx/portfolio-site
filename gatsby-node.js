const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;

//     if (node.internal.type === 'ContentfulProject') {
//         const slug = node.slug;
//         console.log("----", slug);

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Get path to template
    const projectTemplate = path.resolve('./src/templates/ProjectPage.js');

    // Get Contentful data
    const response = await graphql(`
        query {
            allContentfulProject {
            edges {
                node {
                slug
                }
            }
            }
        }
    `);

    // Create new pages
    response.data.allContentfulProject.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/project/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            }
        })
    })
}