import React from 'react'
import PropTypes from 'prop-types'

class Person extends React.Component {

    render() {
        const { name, image, age } = this.props
        return (
            <>
                <img src={image} alt={name} ></img>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </>
        )
    }
}
// propTypes, isRequired
Person.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number
};
// defaultProps
Person.defaultProps = {
    name: 'User',
    image: "https://www.floresdevida.org/wp-content/uploads/2018/06/default-user-thumbnail-1.png"
}


class PersonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    id: 1,
                    // name: "a",
                    // image: "https://randomuser.me/api/portraits/thumb/men/10.jpg",
                    age: 45
                },
                {
                    id: 2,
                    name: "b",
                    image: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
                    age: 34
                }
            ]
        }
    }


    render() {
        return (
            <div>
                {this.state.persons.map( (item) => (
                    <div key={item.id} >
                        <Person name={item.name} image={item.image} age={item.age} />
                    </div>
                ))}
            </div>
        )
    }
}


export default PersonList