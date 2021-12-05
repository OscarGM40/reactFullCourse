
const moment = require('moment');


exports.isDate = (value,{ req, location, path }) => {
  if(!value){
    return false;
  }
  const fecha = moment(value);
  if(fecha.isValid()){
    return true;
  } else {  
    return false;
  }
}