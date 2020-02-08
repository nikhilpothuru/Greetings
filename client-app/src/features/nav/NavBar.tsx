import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

interface IProps {
    openCreateForm: () => void; 
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/paper-plane-inverted.png" alt="logo" style={{marginRight: '10px'}}/>
                    Greetings
                </Menu.Item> 
                <Menu.Item name='Activites'/>
                <Menu.Item>
                    <Button color='youtube' content='Create Meetup' onClick={openCreateForm}/>
                </Menu.Item> 
            </Container>
        </Menu>
    )
}

export default NavBar;
