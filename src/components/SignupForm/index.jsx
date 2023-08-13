import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClear = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register('name', { required: true })} />
      </label>
      <label>
        Age
        <input {...register('age', { required: true })} />
      </label>
      <label>
        Adress
        <input {...register('adress', { required: true })} />
      </label>
      <label>
        Zipcode
        <input {...register('zipcode', { required: true })} />
      </label>
      <label>
        Phone
        <input {...register('phone', { required: true })} />
      </label>
      <button onClick={handleClear}>Clear</button>
      <button type='submit'>Continue</button>
    </form>
  );
};

export default SignupForm;
