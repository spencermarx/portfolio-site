import React from 'react';
import Layout from '../components/Layout';
import Headshot from '../components/Headshot';
import AboutDetails from '../components/AboutDetails';
import { graphql, useStaticQuery } from 'gatsby';
// import Projects from '../components/Projects';
// import ContactMe from '../components/ContactMe';
import { Container } from 'react-bootstrap';


const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulAboutPage(filter: {
            active: { eq: true}

            }, ) {
            edges {
                node {
                active
                headshot {
                    file {
                        url
                        }
                    fluid(maxWidth: 600){
                    ...GatsbyContentfulFluid
                    }
                }
                aboutDescription {
                    aboutDescription
                }
                funFacts
                }
            }
            }
        }
        `);

    const aboutData = data.allContentfulAboutPage.edges[0].node;
    console.log(aboutData)

    return (
        <React.Fragment>
            <Layout>
                <Container>
                    <Headshot headshotImage={aboutData.headshot} />
                    <AboutDetails funFacts={aboutData.funFacts} aboutDescription={aboutData.aboutDescription.aboutDescription} />
                </Container>
            </Layout>
        </React.Fragment>
    )
}

export default AboutPage;