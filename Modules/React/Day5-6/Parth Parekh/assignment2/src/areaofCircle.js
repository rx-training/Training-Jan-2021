import React, { Component } from "react";

// 3. Create a circle component which computes area of Circle
export default class AreaofCircle extends Component {
    state = {
        radius: 0,
    };
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            radius: value,
        });
    };

    render() {
        const radius = this.state.radius;
        return (
            <div className="bg-dark p-3 mb-1">
                <h3 className="text-white p-3 m-2">
                    Component which computes area of Circle
                </h3>
                <form action="#">
                    <div className="form-group bg-dark text-white m-2 p-3">
                        <label className="h5">Enter Radius :</label>
                        <input
                            type="number"
                            className="form-control ml-2 "
                            placeholder="Radius"
                            onChange={this.handleChange}
                        />
                        <p className="text-success h5  mt-2">
                            Area of Circle : {radius * radius * 3.14}
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}
