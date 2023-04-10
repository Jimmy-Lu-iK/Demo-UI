import Toast from './Toast';
import { useState } from 'react';
import './ToastExamples.css'

export default function ToastExamples() {
  const [showToast, setShowToast] = useState(false);
  const [text, setText] = useState('Hello you')
  const [duration, setDuration] = useState(3000)

  const handleTextInput = (e) => {
    setText(e.target.value)
  }

  const handleDurationInput = (e) => {
    setDuration(e.target.value)
  }

  const [showAsyncToast, setShowAsyncToast] = useState(false);
  const [toastText, setToastText] = useState('');
  const [toastDuration, setToastDuration] = useState(0);
  const [toastProgress, setToastProgress] = useState(null);

  async function sendRequest() {
    setShowAsyncToast(true);
    setToastText('Sending request, please wait...');
    setToastDuration(30000);
    setToastProgress(0);

    // 模拟异步请求
    for (let i = 1; i <= 60; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setToastProgress(i);
    }

    const success = Math.random() < 0.5;
    console.log('laile jici?')
    setToastText(success ? 'Request succeeded!' : 'Request failed!');
    setToastDuration(3000);
    setToastProgress(null);
  }

  function handleClose() {
    console.log('close')
    setShowAsyncToast(false);
    setToastText('');
    setToastDuration(0);
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
      <button onClick={() => setShowToast(showToast => !showToast)}>Show Toast</button>
      {showToast && (
        <Toast
          text={text}
          duration={duration}
          onClose={() => setShowToast(false)}
        />
      )}
      <br/>
      <br/>
      <p>Mock Async API request toast: </p>
      <button onClick={sendRequest}>Send Request</button>
      {showAsyncToast && (
        <Toast
          text={toastText}
          duration={toastDuration}
          onClose={handleClose}
          progress={toastProgress}
        />
      )}
    </div>
  )
}