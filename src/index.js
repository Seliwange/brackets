module.exports = function check(str, bracketsConfig) {
  let brackets = "[]{}()||'',,";
  for(let br of str){
      let index = brackets.indexOf(br);
      if(index % 2 === 0){
          return false;
      }
      return true;
  }
}
