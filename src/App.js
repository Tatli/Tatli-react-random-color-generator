import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialHex = randomColor();
  const [colorHex, setColorHex] = useState(initialHex);

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

      <label label htmlFor="hue">
        Hue: <input name="hue" id="hue"></input>
      </label>

      <br />

      <label label htmlFor="lightness">
        Lightness: <input name="lightness" id="lightness"></input>
      </label>

      <br />

      <div style={{ backgroundColor: colorHex }}>
        Generated Color: {colorHex}
      </div>

      <br />

      {/* If hue and lightness is empty set random color */}
      <button
        onClick={() => {
          // Get values of both input fields
          const hueInput = document.querySelector('#hue').value;
          const lightnessInput = document.querySelector('#lightness').value;

          // Generate random color depending on what fields are filled
          if (hueInput && lightnessInput) {
            setColorHex(
              randomColor({
                hue: hueInput,
                lightness: lightnessInput,
              }),
            );
            console.log('Inside hue & lightness block');
          } else if (hueInput) {
            setColorHex(
              randomColor({
                hue: hueInput,
                lightness: 'random',
              }),
            );
            console.log('Inside hue block');
          } else if (lightnessInput) {
            setColorHex(
              randomColor({
                hue: 'random',
                lightness: lightnessInput,
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
