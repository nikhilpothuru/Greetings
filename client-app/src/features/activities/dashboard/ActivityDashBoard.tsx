import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList'; 
import {observer} from 'mobx-react-lite'; 
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';

export const ActivityDashBoard: React.FC = () => 
{
    const rootStore = useContext(RootStoreContext); 
    const {loadActivities, loadingInitial} = rootStore.activityStore;

    useEffect(() => {
        loadActivities(); 
    }, [loadActivities]); 
  
    if(loadingInitial){
      return <LoadingComponent content='Loading meetups...' />
    }

    return (
        <Grid> 
            <Grid.Row centered> 
                <Grid.Column width={12}> 
                    <ActivityList/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default observer(ActivityDashBoard);