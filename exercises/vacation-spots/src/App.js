import React from 'react';

const App = () => {
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter" 
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

  const displaySpots = vacationSpots.map((vacationSpot, i) => {
    return <VacationSpot key={vacationSpot.place+1}
                         place={vacationSpot.place}
                         price={vacationSpot.price}
                         timeToGo={vacationSpot.timeToGo} />
  })
  return (
    <div>
      {displaySpots}
    </div>
  )
}

export default App;