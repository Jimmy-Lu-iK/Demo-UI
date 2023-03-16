function FlattenObject() {

  const flattenObject = (obj) => {
    const flattened = {}
  
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
  
      //if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      if (Object.prototype.toString.call(value) === '[object Object]') {
        Object.assign(flattened, flattenObject(value))
      } else {
        flattened[key] = value
      }
    })
  
    return flattened
  }

  const crushObj = (obj = {}) => Object.keys(obj || {}).reduce((acc, cur) => {
    if (typeof obj[cur] === 'object' && obj[cur] !== null && !Array.isArray(obj[cur])) {
      acc = { ...acc, ...crushObj(obj[cur])}
    } else { acc[cur] = obj[cur] }
    return acc
  }, {})

  const obj = {
    a:10,
    b:{
      c:100,
      d: {
        e:[25,30,35,40,45,38],
        f:35,
        g: {
          h:200,
          j:300
        },
        k: null
      }
    }
  }

  console.log('here: ', flattenObject(obj))
  console.log('there: ', crushObj(obj))

  const flatten =  (arr)=>{
    let res = [];
    while(arr.length){
      let ele = arr.shift();
      if(Array.isArray(ele)){
        for(let i = ele.length-1;i>=0;i--){
          arr.unshift(ele[i]);
        }
      }else{
        res.push(ele);
      }
    }
    return res;
   }   

  return <div>
    hello
  </div>
}

export default FlattenObject