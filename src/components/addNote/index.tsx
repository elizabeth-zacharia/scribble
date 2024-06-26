import React, { useRef, useEffect, FC, useState } from 'react';

const AddNote: FC = () => {
  const [showSavebutton, setshowSavebutton] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const heightLimit = 200; // Maximum height: 200px

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const handleInput = () => {
      textarea.style.height = ''; // Reset the height
      textarea.style.height =
        Math.min(textarea.scrollHeight, heightLimit) + 'px';
    };

    textarea.addEventListener('input', handleInput);

    // Clean up the event listener
    return () => {
      textarea.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div>
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder='Add a to do'
        style={{
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        onClick={() => setshowSavebutton(true)}
      />
      {showSavebutton ? <button>Save</button> : null}
    </div>
  );
};

export default AddNote;
