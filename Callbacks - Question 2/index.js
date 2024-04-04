function writeLetter(callback)
{
  setTimeout(function() {
    console.log('Wrote Letter');
    callback();
  },2000);
  
}
function postLetter()
{
  setTimeout(function() {
    console.log('Letter Posted');
  },1000);
}
writeLetter(postLetter);




// Do not touch the code below:
module.exports = {
  writeLetter,
  postLetter,
};
