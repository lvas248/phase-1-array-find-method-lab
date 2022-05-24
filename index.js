// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array){
      if(array.find(func)){
          return array.find(func).year;
      }
    }
  
  
  function func(item, index, array){
      return item.result === "W";}