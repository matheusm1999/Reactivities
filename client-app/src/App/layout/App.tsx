import { Fragment, useEffect, useState } from 'react'
//import './App.css'
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
    })
  }, [])

  return ( 
    <>
      <NavBar></NavBar>
      <Container style ={{marginTop: '5%'}}>
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </>
  )
}

export default App
