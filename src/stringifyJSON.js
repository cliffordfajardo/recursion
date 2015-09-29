// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:




var stringifyJSON = function(obj) {
  //handling string, number, booleans,null,undefined, functions
  if(isNumber(obj))  return obj + "";
  if(isBoolean(obj)) return obj + "";
  if(isNull(obj))    return obj + "";
  if(isString(obj))  return '"' + obj + '"';
  if(isUndefined(obj)) return;
  if(isFunction(obj))  return;

  //Handling Arrays
  if(isArray(obj)){
    if(obj.length === 0) return "[]"; //handling empty arrays
    var results = [];
    for(var i = 0; i < obj.length; i++){
      if(isUndefined( obj[i]) || isFunction(obj[i])) continue;
      results.push(stringifyJSON(obj[i]));
    }
    return "[" + results + "]";
  }
  

  //Handling Objects
  if(isObject(obj)){
    if(Object.keys(obj).length === 0) return "{}"; 

    var temp = [];
    for(var key in obj){
      if(isFunction(obj[key]) || isUndefined(obj[key])) continue;
      temp.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]))
    }
    console.log(temp);
    return "{" + temp.join(",") + "}"
  }
};












//Function to check type of value
function isObject(obj) {
  if(Object.prototype.toString.call(obj) === "[object Object]") return true;
  return false;
}
function isArray(obj) {
  if(Object.prototype.toString.call(obj) === "[object Array]") return true;
  return false;
}

function isNumber(obj) {
  if(Object.prototype.toString.call(obj) === "[object Number]") return true;
  return false;
}

function isString(obj) {
  if(Object.prototype.toString.call(obj) === "[object String]") return true;
  return false;
}

function isFunction(obj){
  if(Object.prototype.toString.call(obj) === "[object Function]") return true;
  return false;
} 

function isBoolean(obj){
  if(Object.prototype.toString.call(obj) === "[object Boolean]") return true;
  return false;
} 

function isNull(obj){
  if(Object.prototype.toString.call(obj) === "[object Null]") return true;
  return false;
} 

function isUndefined(obj){
  if(Object.prototype.toString.call(obj) === "[object Undefined]") return true;
  return false;
} 
