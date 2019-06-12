import React from "react";

import FormContainer from "./FormContainer";
import formStyles from "./FirstForm.module.css";
import { FormField } from "./FormField";

const FirstForm = ({ fieldValues, onChangeField }) => {
  const displayFields = Object.keys(fieldValues)
    .filter(f => fieldValues[f])
    .map(f => ({
      name: f,
      value: fieldValues[f]
    }));
  return (
    <div>
      <div className={formStyles.formContainer}>
        <div className={formStyles.fieldContainer}>
          <FormField
            name="Hello"
            value={fieldValues["Hello"] || ""}
            onChange={onChangeField}
          />
        </div>
        <div className={formStyles.fieldContainer}>
          <FormField
            name="World"
            value={fieldValues["World"] || ""}
            variant="outlined"
            onChange={onChangeField}
          />
        </div>
      </div>

      {displayFields.map(val => (
        <div>
          {val.name}: {val.value}
        </div>
      ))}
    </div>
  );
};

export default FormContainer(FirstForm);
