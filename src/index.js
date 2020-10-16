module.exports = function check(str, bracketsConfig) {

 itemArr = bracketsConfig.map(item => item.join(''));

 for ( let i = 0; i < itemArr.length; i++) {
   if (str.includes(itemArr[i])) {
     str = str.replace(itemArr[i], '');
     i = -1;
   }
 }
 return str.length === 0 ? true : false;
}
