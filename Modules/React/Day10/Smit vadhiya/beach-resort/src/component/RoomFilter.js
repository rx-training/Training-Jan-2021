import React from 'react'
import {useContext} from 'react'
import { RoomContext } from '../context'
import { Title } from './Title'
const getUnique = (item,value) =>{
   return [...new Set(item.map(item => item[value]))]
}

export const RoomFilter = ({rooms}) => {
   const context = useContext(RoomContext)

   const {
      handleChange,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
   } = context
   
   console.log(context,context.minSize,context.maxSize);

   let types = getUnique(rooms,'type')
   types = ['all',...types]

   types = types.map((item,index) => {
      return (<option key={index} value={item}>{item}</option>)
   })

   let people = getUnique(rooms,'capacity')


   people = people.map((item,index) => {
      return (<option key={index} value={item}>{item}</option>)
   })

   return (
      <section className="filter-container">
         <Title title= "search rooms"></Title>
         <form action="" className="filter-form">
            {/* select type */}
            <div className="form-group">
               <label htmlFor="type">room type</label>
               <select 
                  name="type" 
                  id="type" 
                  value={type} 
                  className="form-control"
                  onChange={handleChange}
               >
                  
                  {types}
               </select>
            </div>
            {/* select type end */}
            
            {/* Guest  */}
            <div className="form-group">
               <label htmlFor="capacity">Guest</label>
               <select 
                  name="capacity" 
                  id="capacity" 
                  value={capacity} 
                  className="form-control"
                  onChange={handleChange}
               >
                  
                  {people}
               </select>
            </div>
            {/* Guest end */}

            {/* Room price */}
            <div className="form-group">
               <label htmlFor="price"> room price ${price}
               </label>
               <input 
                  type="range" 
                  name="price"
                  id="price"
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  onChange={handleChange}
                  className="form-control"
               />
            </div>
            {/* end od Room price */}

            {/* size */}
            <div className="form-group">
               <label htmlFor="size">Room size</label>
               <div className="">
                  <input 
                     type="number" 
                     className="size-input" 
                     name="minSize"
                     id="size"
                     value ={minSize}
                     onChange={handleChange}
                  />
                  <input 
                     type="number" 
                     className="size-input" 
                     name="maxSize"
                     id="size"
                     value ={maxSize}
                     onChange={handleChange}
                  />
               </div>
            </div>

            {/* END SIZE */}

            {/* extras */}
            <div className="form-froup">
               <div className="single-extra">
                  <input 
                     type="checkbox"
                     name="breakfast"
                     id="breakfast"
                     checked={breakfast}
                     onChange={handleChange}
                  />
                  <label htmlFor="breakfast">breakfast</label>
               </div>
               <div className="single-extra">
                  <input 
                     type="checkbox"
                     name="pets"
                     id="pets"
                     checked={pets}
                     onChange={handleChange}
                  />
                  <label htmlFor="pets">pets</label>
               </div>
            </div>
            {/* extras end */}

         </form>
      </section>
   )
}
