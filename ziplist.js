function ziplist(x,y){
  let combine = [];

  for(let i  =0 ; i <= x.length + 1; i++) {
    combine.push(_.first(x));
    combine.push(_.first(y));
    x.shift();
    y.shift();
  }
  return combine;

}
const list1 = ['a', 'b','c'];
const list2 = ['1', '2', '3'];
console.log(ziplist(list1, list2));
