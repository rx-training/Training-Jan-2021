import React from 'react'
import TypeCards from './TypeCards'

export default function CarBuyingTools({ header }) {
  return (
    <div>
      <h4>{header ? header : 'Tools You May Need'}</h4>
      <div className="row">
        <div className="col col-12">
          <TypeCards title="Tool 1">This is Tool 1</TypeCards>
        </div>
        <div className="col col-12">
          <TypeCards title="Tool 1">This is Tool 1</TypeCards>
        </div>
        <div className="col col-12">
          <TypeCards title="Tool 1">This is Tool 1</TypeCards>
        </div>
        <div className="col col-12">
          <TypeCards title="Tool 1">This is Tool 1</TypeCards>
        </div>
      </div>
    </div>
  )
}
