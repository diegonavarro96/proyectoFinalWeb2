import React from "react";
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import ButtonAddDel from './Components/ButtonsAddDelete'
import AddDelForm from './Components/AddDelForm'

import {
  BrowserRouter as Router,
  Switch,
  Route
  //Link,
  //useRouteMatch,
  //useParams
} from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/SignIn">
            <SignIn/>
          </Route>
          <Route path="/Inventory">
           <InventoryPage/>
          </Route>
          <Route path="/Sales">
            <Sidebar/>
            <Sales/>
          </Route>
          <Route path ="/SignUp">
            <SignUp/>
          </Route>
          <Route path ="/del">
            <AddDelForm/>
          </Route>
          <Route path="/">
            <SignIn/>
          </Route>>

          
        </Switch>
    </Router>
  );
}


function InventoryPage() {
  return  <div>
            <ButtonAddDel/>
            <Table/>

          </div>;
}
function Sales() {
  return <h2>Sales department</h2>;
}











// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
