import React, { useContext } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore';
import {observer} from 'mobx-react-lite'; 

export const NavBar: React.FC = () => {
    const activityStore = useContext(ActivityStore);
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/paper-plane-inverted.png" alt="logo" style={{marginRight: '10px'}}/>
                    Greetings
                </Menu.Item> 
                <Menu.Item name='Activites'/>
                <Menu.Item>
                    <Button color='youtube' content='Create Meetup' onClick={activityStore.openCreateForm}/>
                </Menu.Item> 
            </Container>
        </Menu>
    )
}

export default observer(NavBar);
