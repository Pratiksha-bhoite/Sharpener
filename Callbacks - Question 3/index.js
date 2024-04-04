function learnJavaScript(callback)
{
  setTimeout(function() {
    console.log('JavaScript Learned');
    callback();
  },2000);
}
function learnReact()
{
  setTimeout(function() {
    console.log('React Learned');
  },1000);
}
learnJavaScript(learnReact);



// Do not touch the code below:
module.exports = {
  learnJavaScript,
  learnReact,
};