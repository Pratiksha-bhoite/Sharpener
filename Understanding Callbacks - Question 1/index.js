function buyBike(callback)
{
  setTimeout(function() {
    console.log('Bought Royal Enfield Himalayan');
     callback();
  },2000);
}
function planTrip()
{
  setTimeout(function() {
    console.log('Trip to Ladakh planned');
   
  },1000);
}
buyBike(planTrip);





// Do not touch the code below:
module.exports = {
  buyBike,
  planTrip,
};