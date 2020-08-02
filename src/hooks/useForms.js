import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }
  function clearForms() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForms,
  };
}

export default useForm;
