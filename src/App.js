import * as emoji from 'node-emoji';
import { useState } from 'react';

export default function App() {
  // {emoji: 😀, name: 'smiley'}
  const initialEmoji = emoji.random();

  const [emojiIcon, setEmojiIcon] = useState(initialEmoji.emoji);
  const [emojiName, setEmojiName] = useState(initialEmoji.name);

  const hasEmoji = emoji.has(emojiName);

  return (
    <>
      <h1>Random Emoji Generator</h1>
      <input
        value={emojiName}
        onChange={(event) => {
          // set Emoji name to input value
          setEmojiName(event.currentTarget.value);
          // get Emoji from input value
          const foundEmojiIcon = emoji.get(event.currentTarget.value);
          // set Emoji icon to found emoji
          setEmojiIcon(foundEmojiIcon);
        }}
      />
      <button
        onClick={() => {
          const newEmoji = emoji.random();
          setEmojiIcon(newEmoji.emoji);
        }}
      >
        Generate Random
      </button>
      <div style={{ fontSize: '100px' }}>{emojiIcon}</div>
      {!hasEmoji && (
        <div style={{ backgroundColor: 'red' }}>This emoji doesn't exist</div>
      )}
      {/* {hasError ? (
        <div style={{ backgroundColor: 'red' }}>This emoji doesn't exist</div>
      ) : (
        ''
      )} */}
    </>
  );
}
