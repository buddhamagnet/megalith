import React, { Component } from "react";

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
            placeholder="add option"
          />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove All
      </button>
    </div>
    {options.length === 0 && (
      <p className="widget__message">Please add an option to get started!</p>
    )}
    {options.map((option, index) => (
      <Option
        key={option}
        count={index + 1}
        optionText={option}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);

const Option = ({ handleDeleteOption, count, optionText }) => (
  <div className="option">
    <p className="option__text">
      {count}: {optionText}
    </p>
    <button
      className="button button--link"
      onClick={(e) => {
        handleDeleteOption(optionText);
      }}
    >
      remove
    </button>
  </div>
);

export { AddOption, Options };
