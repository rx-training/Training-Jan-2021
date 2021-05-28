import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUnique = (items , value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    
    const {
        handleChange , type , capacity , price , minPrice , maxPrice , minSize , maxSize , breakfast , pets
    } = context

    //get unique types

    let types = getUnique(rooms , 'type')

    types = ['all',...types];

    types = types.map((item, index)=> {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms , 'capacity')
    
    people = people.map((item , index)=> {
        return <option key={index} value={item} > {item} </option>
    })

    // console.log(types);
    return (
        <section className="filter-container">
            <Title title="search rooms"> </Title>
            <form className="filter-form">
                <div className="form-group">
                    <lable htmlFor="type">Rooms Type</lable>
                    <select name="type" id="type" className="form-control" value={type} onChange={handleChange}>
                        {types}
                    </select>
                    
                </div>

            {/* for guest */}

                <div className="form-group">
                    <lable htmlFor="capacity">Guests</lable>
                    <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}>
                        {people}
                    </select>
                    
                </div>

                {/* for price */}

                <div className="form-group" >
                    <lable htmlFor="price">room price${price}</lable>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>

                {/* for size */}

                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize}
                        onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize}
                        onChange={handleChange} className="size-input" />
                    </div>
                </div>

                {/* for extras */}

                <div className="form-group">
                    <div className="single-extra">
                    <input  type="checkbox" name="breakfast"  id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor="breakfast">breakfast</label>
                    </div>

                    <div className="single-extra">
                    <input  type="checkbox" name="pets"  id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor="pets">pets</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
