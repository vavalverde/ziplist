const list1 = ['a','b','c'];
const list2 = [1, 2, 3];
function ziplist(first, second){
  const result =[];
  for(let i =0; i< first.length; i++) {
    result.push(first[i], second[i]);
  }
  return result;
}
console.log(ziplist(list1, list2));

const zipListTheSimpleWay =(first, second) => _.flatten(first, second);
console.log (zipListTheSimpleWay(list1, list2));