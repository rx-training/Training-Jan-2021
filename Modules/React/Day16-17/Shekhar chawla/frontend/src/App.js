import { Switch, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
// import ListDoctors from './components/doctors/List'
// import CreateDoctors from './components/doctors/Create'
// import DetailDoctors from './components/doctors/Detail'
// import DeleteDoctors from './components/doctors/Delete'
import List from './components/students/List'
import Create from './components/students/Create'
import Read from './components/students/Read'
import Update from './components/students/Update'
import Delete from './components/students/Delete'

function App() {
  return (
    <div className="App container-fluid">
      <div className="container py-4">

        <Navbar />
        
        <Switch>
          <Route path="/" exact><div> Home </div></Route>
          <Route path="/:apiname" exact component={List}></Route>
          <Route path="/:apiname/create" exact component={Create}></Route>
          <Route path="/:apiname/view/:id" exact component={Read}></Route>
          <Route path="/:apiname/edit/:id" exact component={Update}></Route>
          <Route path="/:apiname/delete/:id" exact component={Delete}></Route>



          {/* Doctor Module */}
          {/* <Route path="/doctors" exact component={ListDoctors}></Route>
              <Route path="/add-doctor/:id" exact component={CreateDoctors}></Route>
              <Route path="/view-doctor/:id" exact component={DetailDoctors}></Route>
              <Route path="/delete-doctor/:id" exact component={DeleteDoctors}></Route> */}
        </Switch>

      </div>
    </div>
  );
}

export default App;
