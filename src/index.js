module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let array = [];
	for(let i = 0; i<str.length; i++){
	  	for(let j = 0; j<bracketsConfig.length; j++){
	  		if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
	  			if (array[array.length-1] === str[i]){
	  					array.pop();
	  			} else {
	  				array.push(str[i]);
	  			} 
	  		}
	  		else if (str[i] === bracketsConfig[j][0]) {
	  			array.push(j+1);
	  		}
	  		else if (str[i] === bracketsConfig[j][1]){
	  			if ((array[array.length-1] - (j+1)) === 0){
	  				array.pop();
	  			} 
	  			else {
	  				return false;
	  			}
	  		}
	  	}
	}
	return array.length === 0 ? true : false;
}
