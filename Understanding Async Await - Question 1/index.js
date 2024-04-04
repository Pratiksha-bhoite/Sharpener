// Write your code here:
async function boardingBus() {
    try {
      // Write your code here
      function boardBusAt10()
      {
        return new Promise((resolve,reject) => {
          setTimeout(function() {
            const promise = Math.random() > 0.5;
            if(promise)
              {
                resolve('Board the bus');
              }
            else
              {
                 reject('Error: Bus is late');
              }
           
          },3000);
        });
      }
      const step1=await boardBusAt10();
      console.log(step1);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  boardingBus();
  
  // Do not touch the code below:
  module.exports = { boardingBus };
  