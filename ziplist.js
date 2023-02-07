const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
function zipList(first, second) {
  const retList = [];
  let retList1 = retList;
  for (let i = 0; i < first.length; i++) {
    retList1.push(first[i], second[i]);
  }
  return retList1;
}
console.log(zipList(list1, list2));
 const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));
 console.log(zipListTheSimpleWay(list1, list2));