import React from "react";
import generateText from "lorem-hipsum";

const getItems = () => {
  return Promise.resolve(
    Array(4)
      .fill(0)
      .map((_, idx) => ({
        id: idx,
        title: generateText({
          count: 2,
          units: "words"
        })
      }))
  );
};

const StateContainer = WrappedComponent => {
  class StateContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        activeItem: null
      };

      this.changeItem = this.changeItem.bind(this);
    }

    changeItem(event) {
      this.setState({ activeItem: event.target.value });
    }

    async componentDidMount() {
      const items = await getItems();
      this.setState({ items });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          changeItem={this.changeItem}
        />
      );
    }
  }

  return StateContainer;
};

export default StateContainer;
