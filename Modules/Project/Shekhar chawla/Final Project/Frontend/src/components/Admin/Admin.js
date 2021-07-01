import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import CreateCar from './Car/CreateCar'
import DeleteCar from './Car/DeleteCar'
import ListCar from './Car/ListCar'
import UpdateCar from './Car/UpdateCar'

import CreateMake from './Make/CreateMake'
import ListMake from './Make/ListMake'
import UpdateMake from './Make/UpdateMake'
import DeleteMake from './Make/DeleteMake'

export default function Admin() {
  return (
    <BrowserRouter>
      <div className="my-5 py-5 container">
        <Switch>
          <Route path="/admin" exact component={MyAdmin}></Route>
          <Route path='/admin/cars' exact component={ListCar} ></Route>
          <Route path="/admin/cars/update/:carname" exact component={UpdateCar} ></Route>
          <Route path="/admin/cars/create" exact component={CreateCar} ></Route>
          <Route path="/admin/cars/delete" exact component={DeleteCar} ></Route>
          

          <Route path='/admin/make' exact component={ListMake} ></Route>
          <Route path="/admin/make/update/:makename" exact component={UpdateMake} ></Route>
          <Route path="/admin/make/create" exact component={CreateMake} ></Route>
          <Route path="/admin/make/delete" exact component={DeleteMake} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}


const MyAdmin = () => {
  return (
    <div>
      <h4>
        <Link to="/admin/cars">
          Cars
        </Link>
      </h4>
      <h4>
        <Link to="/admin/make">
          Makes
        </Link>
      </h4>
    </div>
  )
}