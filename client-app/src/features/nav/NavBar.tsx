import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

export const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/paper-plane-inverted.png" alt="logo" style={{marginRight: '10px'}}/>
                    Greetings
                </Menu.Item> 
                <Menu.Item name='Activites'/>
                <Menu.Item>
                    <Button positive content='Create Activity'/>
                </Menu.Item> 
            </Container>
        </Menu>
    )
}

export default NavBar;
