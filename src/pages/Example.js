import React, { Component } from 'react';
import Number from 'elements/Form/inputNumber';

export default class Example extends Component {
  state = {
    duration: '',
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: '100vh' }}
        >
          <div className="col-auto">
            <Number
              max={30}
              suffix={' night'}
              isSuffixPlural
              onChange={this.handleChange}
              name="duration"
              value={this.state.duration}
            />
          </div>
        </div>
      </div>
    );
  }
}
