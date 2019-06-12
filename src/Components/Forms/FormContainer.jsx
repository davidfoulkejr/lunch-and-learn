import React from "react";

const FormContainer = WrappedComponent => {
  class FormComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: []
      };
      this.onChangeField = this.onChangeField.bind(this);
    }

    onChangeField(e) {
      this.setState({
        fields: {
          ...this.state.fields,
          [e.target.name]: e.target.value
        }
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          fieldValues={this.state.fields}
          onChangeField={this.onChangeField}
        />
      );
    }
  }

  return FormComponent;
};

export default FormContainer;
