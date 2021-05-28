import React from "react";
import Image from "./Image";
import Personal from "./Personal";
import College from "./College";

class StudentIDCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false };
  }

  toggleInfo = () => {
    this.setState({ showMore: !this.state.showMore });
  };
  render() {
    let student = this.props.student;
    return (
      <div className="col-lg-4 col-md-6">
        <div className="my-2 p-3 student-id">
          <div className="row">
            <div className="col-4 col-sm-4">
              <Image image={student.image} />
            </div>
            <div className="col-8 col-sm-8">
              <Personal
                id={student.id}
                firstName={student.firstName}
                lastName={student.lastName}
                dob={student.dob}
              />
            </div>
          </div>
          <College
            collageName={student.collageName}
            address={student.address}
            collegeLogo={student.collegeLogo}
          />
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={() => this.props.deleteItem(student.id)}
          >
            Delete
          </button>
          <span
            id="toggleIcon"
            className="text-muted mx-4"
            onClick={this.toggleInfo}
          >
            {this.state.showMore ? "Show Less" : "Show More"}
          </span>
          <div className="m-2 text-center">
            {this.state.showMore ? this.props.children : null}
          </div>
        </div>
      </div>
    );
  }
}

export default StudentIDCard;
