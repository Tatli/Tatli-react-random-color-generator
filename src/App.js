import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialHex = randomColor();
  const [colorHex, setColorHex] = useState(initialHex);
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState('');
  return (
    <>
      <h1>Random color generator</h1>
      <fieldset>
        <legend>You can use this form as follows</legend>
        <ul>
          <li>
            Specify <strong>nothing</strong>: Generate a hex code for a{' '}
            <strong>'truly random'</strong> color
          </li>
          <li>
            Specify <strong>Hue only</strong>: Generate a hex code for a
            specific <strong>color/hue</strong> and a{' '}
            <strong>random lightness</strong>
          </li>
          <li>
            Specify <strong>Lightness only</strong>: Generate a hex code for a
            specific <strong>lightness</strong> and a{' '}
            <strong>random color</strong>
          </li>
          <li>
            Specify <strong>Hue & Lightness</strong>: Generate a hex code for a
            specific <strong>color</strong> and a <strong>lightness</strong>
            color
          </li>
        </ul>
      </fieldset>
      <br />
      Hue:{' '}
      <input
        value={hue}
        onChange={(event) => setHue(event.currentTarget.value)}
      />
      <br />
      Lightness:{' '}
      <input
        value={lightness}
        onChange={(event) => setLightness(event.currentTarget.value)}
      />
      <br />
      <div style={{ backgroundColor: colorHex }}>
        Generated Color: {colorHex}
      </div>
      <br />
      {/* If hue and lightness is empty set random color */}
      <button
        onClick={() => {
          // Get values of both input fields

          // Generate random color depending on what fields are filled
          if (hue && lightness) {
            setColorHex(
              randomColor({
                hue: hue,
                lightness: lightness,
              }),
            );
            console.log('Inside hue & lightness block');
          } else if (hue) {
            setColorHex(
              randomColor({
                hue: hue,
                lightness: 'random',
              }),
            );
            console.log('Inside hue block');
          } else if (lightness) {
            setColorHex(
              randomColor({
                hue: 'random',
                lightness: lightness,
              }),
            );
            console.log('Inside lightness block');
          } else {
            setColorHex(randomColor());
            console.log('Inside else/fully random block');
          }
        }}
      >
        Generate
      </button>
      {/* If hue and lightness are specified use those */}
      {/* If only hue is specified use that */}
      {/* If only lightness is specified use that */}
    </>
  );
}
