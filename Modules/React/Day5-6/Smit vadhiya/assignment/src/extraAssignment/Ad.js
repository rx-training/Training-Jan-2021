import React, { Component } from 'react'


function LeftBarOne(props) {
    return (
        <div className="card m-2">
            <div className="card-body text-right">
                <button className="btn btn-sm btn-white text-danger" onClick={() => props.delete(props.data.id)}>X</button>
                <img src={props.data.img} className="img-fluid w-100" alt="" />
            </div>
            <div className="card-footer">
                <a href={props.data.url} className="lead">Learn More</a>
            </div>
        </div>
    )
}
const data = [
    {
        id : 1,
        img : "https://img77.uenicdn.com/image/upload/v1566978966/business/5dc9897c-babf-4c3a-99c7-2923749939b4/upjuusnrl2qgchaenougjpg.jpg",
        url : "#",
    },
    {
        id : 2,
        img : "http://adbazzaar.com/uploads/vedic%20maths_97_4951.jpeg",
        url : "#",
    },
    {
        id : 3,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAxrMfVGrWS7UDe0VFBDZ513kS5H_pbh-zRJtxPkDS4Oi-9m0_5-AoHCqkXk5ErlpuKE&usqp=CAU",
        url : "#",
    }
]
export default class Ad extends Component {
    constructor(props){
        super(props)
        this.state = {info : data}
    }

    deleteAd = (id) =>{
        const newData = this.state.info.filter((data) => data.id !== id)
        this.setState({info : newData})
    }

    render() {
        return (
            <div className="d-inline">
                {this.state.info.map((info => <LeftBarOne key={info.id} data={info} delete={this.deleteAd}/>))}
            </div>
        )
    }
}
