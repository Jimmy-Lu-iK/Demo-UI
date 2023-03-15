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
      
    }

    function get() {
      return hello
    }

    function set(value) {
      hello = value
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