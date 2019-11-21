let a= [1,1,2,33,33,4,4,5,'nihao','nihao']

function unique(array) {
  let temp =[]
  for(let i=0;i<=array.length;++i){
    if (temp.indexOf(array[i])<0) {
      temp.push(array[i])
    }
  }
  console.dir(temp)
} 

unique(a)