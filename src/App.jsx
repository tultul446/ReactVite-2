
import './App.css'
import Navbar from './components/Shared/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Incidents  from './components/Step2/Incidents.jsx';

import Dashboard from './components/Step1/Dashboard'
import GetStart from './components/Step2/GetStart.jsx';
import NewIncident from './components/Step2/NewIncident.jsx';
import NewIncidentFrom from './components/Step2/NewIncidentFrom.jsx';

import IncidentMap from './components/Step2/IncidentMap.jsx';
import Location from './components/Step3/Location.jsx';


function App() {


  return (
  
    <Router>
 <Navbar/> 
 
 <Routes>
  <Route path='/Dashboard' element={<Dashboard />}/> 
  
  <Route path='/Incidents' element={<Incidents />}/> 
 <Route path='/Location' element={ <Location/>}/>
<Route path='/GetStart' element={<GetStart />}/>

<Route path='/NewIncident' element={<NewIncident />}/>
<Route path='/NewIncidentFrom' element={<NewIncidentFrom />}/>
 <Route path='/IncidentMap' element={<IncidentMap />}/> 



</Routes>



 




 </Router>
    
  )
}

export default App
