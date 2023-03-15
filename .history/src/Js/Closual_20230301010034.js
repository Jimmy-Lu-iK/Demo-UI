export default function Closual() {

  function nihao() {
    let hello = 1;

    function add() {
      hello = hello+1
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

  return <div>
    Closual
  </div>
}