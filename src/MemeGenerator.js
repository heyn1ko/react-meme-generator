import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';

// const memeOptions = [
//   'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif',
//   // Add more meme URLs here if needed
// ];

export default function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState();
  const [memeTemplate, setMemeTemplate] = useState(
    'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif',
  );
  const [url, setUrl] = useState();

  const saveFile = () => {
    saveAs(
      `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const memeOptions = useEffect(() => {
  //     async fetch('https://api.memegen.link/images')
  //     .then((r) =>r.json()
  //     .then(memeOptions),
  //   );
  // });
  const memeOptions = ['https://api.memegen.link/images/templates.png'];
  return (
    <main>
      <h1>MEME GENERATOR</h1>
      <div className="App">
        <div>
          <input
            placeholder="Write Your Top Text"
            type="text"
            value={topText}
            onChange={(event) => setTopText(event.currentTarget.value)}
          />
          <br />
          <input
            placeholder="Write Your Lower Text"
            type="text"
            value={bottomText}
            onChange={(event) => setBottomText(event.currentTarget.value)}
          />
          <br />
          <br />
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <select
                  name="Meme template"
                  placeholder="Select meme type"
                  value={memeTemplate}
                  onChange={(e) => {
                    setMemeTemplate(e.currentTarget.value);
                  }}
                >
                  {memeOptions.map((option, index) => (
                    <option key={index} value={option}>
                      Option {index + 1}
                    </option>
                  ))}
                </select>
              </form>
              <br />
              <button onClick={saveFile}>Download</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
