import React, { useState, useEffect } from 'react';
import './Toast.css';

export default function Toast({ text, duration, onClose, progress }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      console.log('timeout to close')
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast ${visible ? 'toast-visible' : ''}`}>
      <div className="toast-content">
        <div>{text}</div>
        {progress && (
          <div className="toast-progress" style={{ width: `${progress/60 * 250}px` }} />
        )}
      </div>
      <button className="toast-close" onClick={() => {
        setVisible(false);
        console.log('click to close')
        onClose();
      }}>
        X
      </button>
    </div>
  );
}
