function XO(str){
  let arg = str;
function numberX () {
  let resault = arg.toLowerCase().split("x").length - 1;
  return resault
};

function numberO () {
  let resault = arg.toLowerCase().split("o").length - 1;
  return resault
};
if (numberX() == numberO() ){
  return true
};
else if (numberX() == 0 && numberO() == 0) {
	return true
};
else {
  return false
  };
};
