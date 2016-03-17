define(['2'] , function(second) {
return {
  third: function() {
    return second.second() + " from third";
  }
}
})
