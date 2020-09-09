import React, { Component } from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { Header, Action, OptionModal, Options, AddOption } from "./components";

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      option: null,
      modalEnabled: false,
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.error(e);
    }
  }
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  handlePick = () => {
    const option = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ];
    this.setState(() => ({ option, modalEnabled: true }));
  };
  handleModalClose = () => {
    this.setState(() => ({ option: null, modalEnabled: false }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  };
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            option={this.state.option}
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          option={this.state.option}
          enabled={this.state.modalEnabled}
          handleClose={this.handleModalClose}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ["get up", "eat breakfast"],
};

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
