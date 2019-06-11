import React from "react";

import FormContainer from "./FormContainer";
import formStyles from "./FirstForm.module.css";

const FirstForm = ({ fields, onChangeField }) => {
  function idTransform(field) {
    return `FirstForm-${field.name.split(" ").join("")}`;
  }

  const fieldValues = fields.filter(field => Boolean(field.value));
  return (
    <div>
      <div>
        {fields.map(field => (
          <div key={idTransform(field)} className={formStyles.formContainer}>
            <input
              className={formStyles.fieldContainer}
              name={field.name}
              value={field.value}
              placeholder={field.name}
              onChange={onChangeField}
            />
          </div>
        ))}
      </div>

      {fieldValues.map(val => (
        <div>
          {val.name}: {val.value}
        </div>
      ))}
    </div>
  );
};

export default FormContainer("first")(FirstForm);
