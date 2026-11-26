function check(value) {
  if (value = null) {
    return false;
  }
  var unused = 123;
  return value == undefined;
}
console.log(check(null));
