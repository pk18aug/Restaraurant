
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from "./component/Home"
import RestrauntCreate from "./component/RestrauntCreate"
import RestrauntDetails from "./component/RestrauntDetails"
import RestrauntList from "./component/RestrauntList"
import RestrauntSearch from "./component/RestrauntSearch"
import RestrauntUpdate from "./component/RestrauntUpdate"
import Login from './component/Login';

import Logout from './component/Logout';
// import Protected from './component/Protected';
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse ,faCirclePlus,faCircleInfo,faList,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
function App() {
   return (
      <div>
          <Router>
         {/* <Navbar bg="light" expand="lg">
            <Container>
               <Navbar.Brand href="#home">Resto</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home"> <Link to='/'><FontAwesomeIcon icon={faHouse} /> Home</Link></Nav.Link>
                     <Nav.Link href="#link"><Link to='/create'><FontAwesomeIcon icon={faCirclePlus} /> Create</Link></Nav.Link>
                        
                     <Nav.Link href="#home"><Link to='/list'><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                     <Nav.Link href="#link"><Link to='/search'><FontAwesomeIcon icon= {faMagnifyingGlass} /> Search</Link> </Nav.Link>
                     <Nav.Link href="#link"><Link to='/login'><FontAwesomeIcon icon= {faMagnifyingGlass} /> Login</Link> </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar> */}
         
            <Switch>
               
               <Route path='/create'>
                  <RestrauntCreate />
               </Route>
               <Route path='/details'>
                  <RestrauntDetails />
               </Route>
               <Route path='/update/:id'
                   render={props=>(
                     <RestrauntUpdate {...props} />
                   )}    
              >           
               </Route>
               <Route path='/login'
                   render={props=>(
                     <Login {...props} />
                   )}    
              >           
               </Route>
               <Route path='/logout'>
                  <Logout />
               </Route>
               <Route path='/list'>
                  <RestrauntList />
               </Route>
               <Route path='/search'>
                  <RestrauntSearch />
               </Route>
               <Route exact path='/'>
                  <Home />
               </Route>
              
                {/* <Protected  path="/search" Component={RestrauntSearch}/>  */}
               {/* <Protected  path="/list" component={RestrauntList}/>
               <Protected  path="/create" component={RestrauntCreate}/>
               <Protected exact path="/" component={Home}/>  */}
            </Switch>
         </Router>

      </div>

   );

}
export default App;


