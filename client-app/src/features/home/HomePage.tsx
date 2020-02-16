import React from 'react'
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/paper-plane-inverted.png' alt='logo' style={{marginBottom: 12}}/>
                    Greetings
                </Header>
                <Header as='h2' inverted content='Welcome to Greetings' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to the activities!
                </Button>
            </Container>
        </Segment>
    );
}

export default HomePage;
