// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  function enoughRevenue(obj) {
    return obj.revenue >= revenue;
  }
  return drivers.filter(enoughRevenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const objArray = driversWithRevenueOver(drivers, revenue);
  return objArray.map(function(elt) {
    return elt.name;
  });
}

function exactMatch(drivers, attrObj) {
  const attrKey = Object.keys(attrObj)[0];
  function attrMatch(obj) {
    return obj[attrKey] === attrObj[attrKey];
  }
  return drivers.filter(attrMatch);
}

function exactMatchToList(drivers, attrObj) {
  const objArray = exactMatch(drivers, attrObj);
  return objArray.map(function(elt) {
    return elt.name;
  });
}
