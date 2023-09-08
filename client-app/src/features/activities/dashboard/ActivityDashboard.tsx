import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
}

function ActivityDashboard({activities}: Props){
    return (
        <Grid>
            <Grid.Column witdh='10'>
            <ActivityList activities={activities}></ActivityList>
            </Grid.Column>
        </Grid>
    )
}


export default ActivityDashboard;