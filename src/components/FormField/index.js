import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const filedId = `id=${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestion = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={filedId}>

        <Input
          as={tag}
          id={filedId}
          name={name}
          type={type}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `suggestionFor_${filedId}` : undefined}
        />

        <Label.Text>
          {label}
        </Label.Text>

        {
          hasSuggestion && (
          <datalist id={`suggestionFor_${filedId}`}>
            { suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${filedId}option${suggestion}`}>
                {suggestion}
              </option>
            ))}
          </datalist>
          )
}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
