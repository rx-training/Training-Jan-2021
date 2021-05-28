import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../component/Banner'
import { Hero } from '../component/Hero'

export const Error = () => {
   return (
      <div>
         <Hero>
            <Banner title="404" subtitle="page nort found"> 
               <Link to="/" className="btn-primary">
                  return home
               </Link>
            </Banner>
         </Hero>
      </div>
   )
}
