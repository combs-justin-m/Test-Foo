window.Foo = (function() {

  function Foo() {
    this.plusOne = function(n){return n + 1;};
    this.sortArray = function(arr){
      var clone = arr.slice().sort();
      return clone};
    this.hasValue = function(list, item) {
      return list.indexOf(item) >= 0;};
  }

  Foo.greet = function(val) {
    return "Hello, " + val + "!";
    };

  return Foo;

})();