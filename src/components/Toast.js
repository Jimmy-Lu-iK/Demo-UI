import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import './Toast.css';

const Toast = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(null);
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);
  
  const ToastRef = useRef(null)

  useImperativeHandle(ref, () => ({
    show: () => show()
  }))

  useEffect(() => {
    if(!visible) return
    if(!duration) return 
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, visible]);

  useEffect(() => {
    setContent(props.text)
    setDuration(props.duration)
    if(!props.progress) {
      setProgress(null)
    } else {
      setProgress(props.progress)
    }
  }, [props])

  const show = () => {
    if(visible) return
    setVisible(true)
  }

  return (
    <div className={`toast ${visible ? 'toast-visible' : ''}`} ref={ToastRef}>
      <div className="toast-content">
        <div>{content}</div>
        {progress && (
          <div className="toast-progress" style={{ width: `${progress/60 * 250}px` }} />
        )}
      </div>
      <button className="toast-close" onClick={() => {
        setVisible(false);
      }}>
        X
      </button>
    </div>
  );
})

export default Toast
