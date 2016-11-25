import React from 'react';
import ReactDOM from 'react-dom';

/// UI组件
class MyComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <p>{this.props.text}</p>
        <input defaultValue={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default MyComponent;
