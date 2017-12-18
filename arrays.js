var chocolateBars =["snickers" , "hundred grand","kitkat", "skittles"]
function addElemantToBeginningofArray (arr, ele){
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningofArray (arr,ele){
  arr = [ele,...arr]
}