// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(element) {return element['revenue'] > revenue;});
}

function driverNamesWithRevenueOver() {
  let driverNames = driversWithRevenueOver(driver, revenue).map(function (element) {return element['name'];});
  return driverNames
}

function exactMatch() {

}

function exactMatchToList() {

}
