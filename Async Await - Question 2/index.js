async function picnicDecision() {
    // Write your code here
     try {
      // Write your code here
      function checkWeather()
      {
        return new Promise((resolve,reject) => {
          setTimeout(function() {
            const promise = Math.random() > 0.5;
            if(promise)
              {
                resolve('Let us go for picnic');
              }
            else
              {
                 reject('Error: It is cloudy');
              }
           
          },3000);
        });
      }
      const step1=await checkWeather();
      console.log(step1);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  
  picnicDecision();
  
  // Do not touch the code below:
  module.exports = { picnicDecision };
  