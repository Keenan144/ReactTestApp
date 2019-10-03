import React from 'react';
import { Experiment, Variant, emitter } from '@marvelapp/react-ab-test';
import Img from 'react-image'



export default class App extends React.Component {
  experimentRef = React.createRef();

  onButtonClick(e) {
    this.experimentRef.current.win();
  }

  render() {
    return (
      <div>
        <Experiment ref={this.experimentRef} name="My Example">
          <Variant name="A">
            <Img
              src={['https://images.unsplash.com/photo-1553264646-7eb44743436f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80', 'https://www.example.com/bar.jpg']}
            />
          </Variant>
          <Variant name="B">
            <Img
              src={['https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'https://www.example.com/bar.jpg']}
            />
          </Variant>
        </Experiment>
      </div>
    );
  }
}

// Called when the experiment is displayed to the user.
emitter.addPlayListener(function(experimentName, variantName) {
  console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});

// Called when a 'win' is emitted, in this case by this.experimentRef.current.win()
emitter.addWinListener(function(experimentName, variantName) {
  console.log(
    `Variant ${variantName} of experiment ${experimentName} was clicked`
  );
});