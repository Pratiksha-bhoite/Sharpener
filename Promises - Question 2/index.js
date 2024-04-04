function loanSanctionPromise(){
    return new Promise((resolve,reject) =>
  
   {
     setTimeout(function() {
       const loanSanction=Math.random()>0.5;
       if(loanSanction)
         {
           resolve('Loan sanctioned');
         }
       else
         {
           reject('Loan not sanctioned');
         }
      
    },3000);
    });
  }
   loanSanctionPromise()
  .then((result)=>
    {
      console.log(result);
    })
  .catch((error)=>
    {
      console.log(error);
    })
  // Do not touch the code below:
  module.exports = loanSanctionPromise;