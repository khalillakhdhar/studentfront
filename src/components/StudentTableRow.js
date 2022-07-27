import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent() {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("are you sure wants to delete?"))
    {
    axios
      .delete(
        'http://localhost:4000/students/delete-student/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Student successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  window.location.reload();
}

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-student/' + this.props.obj._id}
            //628e2b2a980cdff69616032d
          >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
