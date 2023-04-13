import Toast from './Toast';
import { useState, useRef } from 'react';
import './ToastExamples.css'

export default function ToastExamples() {
  const [text, setText] = useState('Hello you')
  const [duration, setDuration] = useState(3000)
  const ToastRef = useRef(null)
  const AsyncToastRef = useRef(null)

  const handleTextInput = (e) => {
    setText(e.target.value)
  }

  const handleDurationInput = (e) => {
    setDuration(e.target.value)
  }

  const [toastText, setToastText] = useState('');
  const [toastDuration, setToastDuration] = useState(0);
  const [toastProgress, setToastProgress] = useState(null);

  async function sendRequest() {
    AsyncToastRef.current.show()
    setToastText('Sending request, please wait...');
    setToastDuration(30000);
    setToastProgress(0);

    // 模拟异步请求
    for (let i = 1; i <= 50; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setToastProgress(i);
    }

    const success = Math.random() < 0.5;

    setToastText(success ? 'Request succeeded!' : 'Request failed!');
    setToastDuration(3000);
    setToastProgress(null);
  }

  return (
    <div className='toast-examples'>
      <form className='inputForm'>
        <label htmlFor='textInput'>Text to show</label>
        <input id='textInput' value={text} onChange={handleTextInput}></input>
        <label htmlFor='durationInput'>Duration</label>
        <input id='durationInput' value={duration} onChange={handleDurationInput}></input>
      </form>
      <button onClick={() => {
        ToastRef.current.show()
      }}>Show Toast</button>
      <Toast
        text={text}
        duration={duration}
        ref={ToastRef}
      />
      <br/>
      <br/>
      <p>Mock Async API request toast: </p>
      <button onClick={sendRequest}>Send Request</button>
      <Toast
        ref={AsyncToastRef}
        text={toastText}
        duration={toastDuration}
        progress={toastProgress}
      />
    </div>
  )
}