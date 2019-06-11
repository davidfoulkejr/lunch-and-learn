import React from "react";

const fieldsMap = {
  first: ["Hello", "There", "This", "Is A", "Test"]
};

function getFields(key) {
  return Promise.resolve({ data: fieldsMap[key] });
}

const FormContainer = getFieldsUrl => WrappedComponent => {
  class FormComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        fields: []
      };

      this.onChangeField = this.onChangeField.bind(this);
    }

    onChangeField(e) {
      const fields = this.state.fields.map(field => {
        if (e.target.name === field.name) {
          return { name: e.target.name, value: e.target.value };
        } else {
          return field;
        }
      });
      this.setState({ fields });
    }

    async componentDidMount() {
      const res = await getFields(getFieldsUrl);
      const fields = res.data.map(field => ({ name: field, value: "" }));
      this.setState({ fields });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          fields={this.state.fields}
          onChangeField={this.onChangeField}
        />
      );
    }
  }

  return FormComponent;
};

export default FormContainer;
