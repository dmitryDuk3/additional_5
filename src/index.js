module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let array = str.split('');
  for(let i = 0; i < bracketsConfig.length; i++) {
   let open = 0;
   let close = 0;
    for(let k = 0; k < array.length; k++) {
     if (array[k] === bracketsConfig[i][0]) {
       
       if(k + 1 < array.length) {
         for(let j = 0; j < bracketsConfig.length; j++) {
           if(str[k + 1] === bracketsConfig[j][1]) {
             if(i === j) {
               continue;
             }
              return false;
           }
         }
       }
       
       open++;
     }
     
     if (array[k] === bracketsConfig[i][1]) {
       close++;
     }
      if(close > open) {
       return false;
     }
   }
    if(close !== open) {
     return false;
   }
 }
  return true;
}
