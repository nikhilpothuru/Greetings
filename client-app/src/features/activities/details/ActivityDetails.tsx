import React, { useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import {observer} from 'mobx-react-lite'; 
import ActivityStore from "../../../app/stores/activityStore";
import { RouteComponentProps } from 'react-router';  
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { ActivityDetailedHeader } from './ActivityDetailedHeader';
import { ActivityDetailedInfo } from './ActivityDetailedInfo';
import { ActivityDetailedChat } from './ActivityDetailedChat';
import { ActivityDetailedSidebar } from './ActivityDetailedSidebar';


interface DetailParams {
    id: string
}

export const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({match}) => {

    const activityStore = useContext(ActivityStore);
    const {activity, loadActivity, loadingInitial} = activityStore;


    useEffect(() => {
        console.log("5) useEffect entered");
        loadActivity(match.params.id);
        console.log("7) useEffect :: Last Line")
    }, [loadActivity, match.params.id])

    if(loadingInitial || !activity){
        return <LoadingComponent content='Loading activity...' />
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDetails); 
