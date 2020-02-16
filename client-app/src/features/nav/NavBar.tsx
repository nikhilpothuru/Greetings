import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {observer} from 'mobx-react-lite'; 
import { Link, NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
    
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={Link} to='/'>
                    <img src="/assets/paper-plane-inverted.png" alt="logo" style={{marginRight: '10px'}}/>
                    Greetings
                </Menu.Item> 
                <Menu.Item name='Meetups' as={NavLink} to='/activities'/>
                <Menu.Item>
                    <Button
                        as={NavLink} to='/createActivity' 
                        color='red' 
                        content='Create Meetup' 
                    />
                </Menu.Item> 
            </Container>
        </Menu>
    )
}

export default observer(NavBar);
