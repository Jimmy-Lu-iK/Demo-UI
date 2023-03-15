function FlattenObject() {

  const flattenObject = (obj) => {
    const flattened = {}
  
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
  
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flattened, flattenObject(value))
      } else {
        flattened[key] = value
      }
    })
  
    return flattened
  }

  const obj = {
    a:10,
    b:{
      c:100,
      d: {
        e:25,
        f:35,
        g: {
          h:200,
          j:300
        }
      }
    }
  }

  console.log('here: ', flattenObject(obj))


  return <div>
    hello
  </div>
}

export default FlattenObject