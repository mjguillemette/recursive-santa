export function deliverPresents(houses) {
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
    return 0
  }

  var half = Math.ceil(houses.length / 2)
  var firstHouses = houses.splice(0, half)
  
  // console.log(half)
  // console.log(firstHouses)
  
  deliverPresents(firstHouses)
  deliverPresents(houses)
}
