import React from "react";

const holidayData = [
  {
    id: 1,
    title: "Maharaja's Express",
    image: "../img/exterior.jpg",
    text: "Redefining Royalty, Luxury and Comfort, Maharaja’s express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.",
  },
  {
    id: 2,
    title: "International Packages",
    image: "../img/Thailand.jpg",
    text: "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
  },
  {
    id: 3,
    title: "Domestic Air Packages",
    image: "../img/Kashmir.jpg",
    text: "Be it the spiritual devotee seeking blessings of Tirupati,Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
  },
];

const Holidays = () => {
  return (
    <section className="d-none d-md-block">
      <div className="container text-center py-3">
        <h1>HOLYDAYS</h1>
        <div className="card-deck row mt-5">
          {holidayData.map((item) => {
            return (
              <div className="card col-md-4" key={item.id}>
                <img className="card-image-top" src={item.image} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Holidays;
