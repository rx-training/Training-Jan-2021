import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../../../global.config'

export default function List(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get(`${config.api}/admin/make`).then(res => {
      setList(res.data)
    })
  }, [])


  return (
    <div>
      <div className="mb-2">
        <Link to={`/admin/make/create`} className="btn btn-primary mr-2">Create Make</Link>
        <Link to={`/admin`} className="btn btn-secondary mr-2">Back to Admin</Link>
      </div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Make</th>
            <th scope="col">Created</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.makeName}</td>
                <td>{item.createdAt}</td>
                <td>
                  <Link to={`/admin/make/update/${item.makeMaskingName}`} className="btn btn-secondary">Update</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
