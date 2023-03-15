function ArrayBuiltIn() {

  
  let arr=[1,2,3,4,5];


  Array.prototype.newMap = function(fn,thisArgs) {
    let length=this.length;
    console.log('this',this)
    console.log('thisArgs',thisArgs)
    let res=[];
    if(!Array.isArray(this)) throw new TypeError('this is not an array');
    if(typeof fn!=='function'){
        throw "error";
    }
    if(length==0){
        return res;
    }
    for(let i=0;i<length;i++){
        res.push(fn.call(thisArgs,this[i],i,this));
    }
    return res;
  }

  Array.prototype.CreateMap = function(fn, thisArgs) {
    let length = this.length
    let res = []

    if(!Array.isArray(this)) {
      throw new Error('This is not an array')
    }

    if(typeof fn!=='function') {
      throw new Error('This is not an fn')
    }

    if(length === 0) {
      return res
    } else {
      for(let i=0;i<length;i++) {
        res.push(fn.call(thisArgs,this[i],i,this))
      }
    }

    return res
  }

  var p= arr.newMap((item,index,arr)=>{
    return item+1;
  })
  let h = arr.CreateMap((item,index,arr)=>{
    return item+1;
  })
 console.log('p: ',p)
 console.log('h : ',h )

 Array.prototype.reduceArr=function(fn,initvalue){
    if(typeof fn!='function'){
        throw new Error('current params in not correct');
    }
    let arr=this;
    let initIndex;
    let acc;
    initIndex=arguments.length==1?1:0;
    acc=arguments.length===1?arr[0]:initvalue;
    for(let i=initIndex;i<arr.length;i++){
      acc=  fn(acc,arr[i],i,arr);
    }
    return acc;
  }
console.log(arr.reduceArr((pre,cur)=>{
  return pre+cur;
},20))


Array.prototype.filterArr=function(callback,thisArg){
  let arr=this;
  if(!Array.isArray(arr)){
      throw "error";
  }
  if(typeof callback!='function'){
      throw 'error';
  }
  let length=arr.length;
  let res=[];
  for(let i=0;i<length;i++){
      if(callback.call(thisArg,arr[i],i,arr)){
          res.push(arr[i]);
      }
  }
  return res;
}
var p=arr.filterArr(item=>{
 return item>3
})
console.log(p)

Array.prototype.newForEach=function(fn,thisArgs){
  let length=this.length;
    console.log('this',this)
    console.log('thisArgs',thisArgs)
    let res=[];
    if(!Array.isArray(this)) throw new TypeError('this is not an array');
    if(typeof fn!=='function'){
        throw "error";
    }
    if(length==0){
      return;
    }
    for(let i=0;i<length;i++){
      fn.call(thisArgs,this[i],i,this);
    }
}

arr.newForEach(item=>{
  console.log('hello:', item)
 })


  return <div>
    ArrayBuiltIn
  </div>
}

export default ArrayBuiltIn