function checkCar()
{
  return new Promise((resolve,reject) =>
    {
      setTimeout(() => 
        {
          let weatherSunny = Math.random()>0.5;
          if(weatherSunny)
            {
              resolve('Car is ready');
            }
          else
            {
              reject('Error: Car needs maintenance');
            }
        },2000);
    });
}

function packForPicnic()
{
  return new Promise((resolve,reject) =>
    {
      setTimeout(() => 
        {
          let pack = Math.random()>0.5;
          if(pack)
            {
              resolve('Packed everything for picnic');
            }
          else
            {
              reject('Error: Not have some essentials');
            }
        },1000);
    });
}

checkCar()
.then((msg) => {
  console.log(msg);
  return packForPicnic();
})
.then((msg1) => {
  console.log(msg1);
  console.log('Go for picnic');
})
.catch((err) => {
  console.log(err);
  console.log('Picnic cancelled');
});













// Do not touch the code below:
module.exports = { checkCar, packForPicnic };
