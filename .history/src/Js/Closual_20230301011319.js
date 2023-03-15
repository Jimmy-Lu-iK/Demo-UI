export default function Closual() {

  function nihao() {
    var hello = 1;

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
        console.log('nihao set hello', hello)
      }
    }
  }

  nihao().add()
  console.log('nihao get', nihao().get())
  nihao().set(1000)
  console.log('nihao get', nihao().get())

  function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
  }

  return <div>
    Closual
  </div>
}