import React, { useState, useEffect, Fragment } from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashBoard from '../../features/activities/dashboard/ActivityDashBoard'; 


const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
        .then((response) => {
          setActivities(response.data);
        })
  }, []); 


  return (
    <Fragment>
      <NavBar/>
      <Container style = {{marginTop: '7em'}}>
        <ActivityDashBoard activities={activities}/>
      </Container>
    </Fragment>
  );
}

export default App;
