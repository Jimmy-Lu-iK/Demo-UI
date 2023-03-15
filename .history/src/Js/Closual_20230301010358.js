export default function Closual() {

  function nihao() {
    let hello = 1;

    return {
      add: function() {
        hello = hello+1
      },
      get: function() {
        return hello
      },
      set: function(value) {
        console.log('nihao set', value)
        hello = value
      }
    }
  }

  nihao().add()
  console.log('nihao get', nihao().get())
  nihao().set(1000)
  console.log('nihao get', nihao().get())

  return <div>
    Closual
  </div>
}