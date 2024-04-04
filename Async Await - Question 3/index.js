async function happyMeal() {
    // Write your code here
     function orderPizza()
      {
        return new Promise((resolve,reject) => {
          setTimeout(function() {
            const promise = Math.random() > 0.5;
            if(promise)
              {
                resolve('Pizza has been delivered!');
              }
            else
              {
                 reject('Pizza delivery failed.');
              }
           
          },2000);
        });
      }
    function orderDessert()
      {
        return new Promise((resolve,reject) => {
          setTimeout(function() {
            const promise = Math.random() > 0.5;
            if(promise)
              {
                resolve('Dessert has been delivered!');
              }
            else
              {
                 reject('Dessert delivery failed.');
              }
           
          },2000);
        });
      }
      const step1=await orderPizza();
      console.log(step1);
    const step2=await orderDessert();
    console.log(step2);
  }
  
  happyMeal();
  
  // Do not touch the code below:
  module.exports = { happyMeal };