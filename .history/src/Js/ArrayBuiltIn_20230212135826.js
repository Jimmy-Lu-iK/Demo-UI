function ArrayBuiltIn() {


  Array.prototype.newMap = function(fn,thisArgs) {
    let length=this.length;
    console.log(this)
    console.log(thisArgs)
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


  return <div>
    ArrayBuiltIn
  </div>
}

export default ArrayBuiltIn