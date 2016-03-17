define(['1'] , function(first) {

return {
  second: function() {
    return first.first() + '  '  + ' from second';
  }
}
});
