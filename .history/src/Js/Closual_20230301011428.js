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

  var c1 = create_counter();
  c1.inc(); // 1
  c1.inc(); // 2
  c1.inc(); // 3
  console.log('c1.inc()',c1.inc())

  var c2 = create_counter(10);
  c2.inc(); // 11
  c2.inc(); // 12
  c2.inc(); // 13
  console.log('c2.inc()',c2.inc())

  return <div>
    Closual
  </div>
}