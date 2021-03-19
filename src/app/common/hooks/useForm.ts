import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormResponse<T, P> {
  values: T;
  errors: P;
  handleChange: (event: HTMLAllInputElement | CustomHTMLElement) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

type HTMLAllInputElement = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

export type CustomHTMLElement = { name: string; value: string | boolean | number };

const useForm = <T, P>(initialValues: T, onSubmit: any, validateFunction: any): UseFormResponse<T, P> => {
  const [values, setValues] = useState(initialValues || ({} as T));
  const [errors, setErrors] = useState({} as P);

  const getValueFromHTMLElement = (event: HTMLAllInputElement): CustomHTMLElement => {
    event.persist();
    const target = event.target;
    const name = target.name;

    switch (target.type) {
      case 'checkbox':
        return { name, value: (target as EventTarget & HTMLInputElement).checked };
      case 'text':
        return { name, value: target.value };
      default:
        return { name, value: target.value };
    }
  };

  const handleChange = (event: HTMLAllInputElement | CustomHTMLElement): void => {
    const { name, value } = (event as HTMLAllInputElement).target
      ? getValueFromHTMLElement(event as HTMLAllInputElement)
      : (event as CustomHTMLElement);
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    if (event) event.preventDefault();
    const newErrors = validateFunction(values);
    setErrors({ ...newErrors });
    onSubmit(values, newErrors);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
