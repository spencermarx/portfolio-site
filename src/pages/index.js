import React, { Component } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { Container } from 'react-bootstrap';

class IndexPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Layout>
                    <Container>
                        <Hero />
                        <Skills/>
                        <Projects />
                    </Container>
                </Layout>
            </React.Fragment>
        )
    }
}

export default IndexPage;