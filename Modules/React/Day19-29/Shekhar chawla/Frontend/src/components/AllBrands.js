import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .brands {  
    width: 16.6667%;
  }
  .brands>img {
    width: 50%;
    display: block;
    margin:5% auto;
  }
  .brands>p {
    display: block;
    margin:5%;
  }
`;

export default function AllBrands() {
  return (
    <Styles>
      <h4>All Brands</h4>
      <div class="d-flex flex-wrap" id="brandBox">
        {brands.slice(0, 12).map((item, index) => (
          <div class="brands btn border" key={index}>
            <img src={item.image} alt={item.name}></img>
            <p class="text-center">{item.name}</p>
          </div>
        ))}

        {brands.length > 12 &&
          <div class="collapse" id="more">
            <div class="d-flex flex-wrap">
              {brands.slice(12, brands.length).map((item, index) => {
                return (
                  <div class="brands btn border">
                    <img src={item.image} alt={item.name}></img>
                    <p class="text-center m-0">{item.name}</p>
                  </div>
                )
              })
              }
            </div>
          </div>
        }

      </div>
      {brands.length > 12 && <a class="btn btn-block text-primary border py-2" data-toggle="collapse" data-target="#more" aria-expanded="true" aria-controls="more">View more Brands</a>}
    </Styles>
  )
}



const brands = [
  { image: 'images/tata.png', name: '1' },
  { image: 'images/tata.png', name: '2' },
  { image: 'images/tata.png', name: '3' },
  { image: 'images/tata.png', name: '4' },
  { image: 'images/tata.png', name: '5' },
  { image: 'images/tata.png', name: '6' },
  { image: 'images/tata.png', name: '7' },
  { image: 'images/tata.png', name: '8' },
  { image: 'images/tata.png', name: '9' },
  { image: 'images/tata.png', name: '10' },
  { image: 'images/tata.png', name: '11' },
  { image: 'images/tata.png', name: '12' },
  { image: 'images/tata.png', name: '13' },
  { image: 'images/tata.png', name: '14' },
  { image: 'images/tata.png', name: '15' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
  { image: 'images/tata.png', name: 'Tata' },
]