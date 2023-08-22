import { useForm } from 'react-hook-form';
import styles from './MyInfo.module.css';
import { useEffect } from 'react';

const USER_DATA = 'userData';

export default function MyInfo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};

      setValue('name', userData?.name);
      setValue('email', userData?.email);
      setValue('age', userData?.age);
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert('Usuario Actualizado!');
    } catch (error) {
      alert(`Algo ha salido mal: ${error.message}`);
    }
  };

  return (
    <form
      className={styles.myInfoForm}
      onSubmit={handleSubmit(handleFormSubmit)}>
      <label>
        Name
        <input
          {...register('name', {
            required: true,
            minLength: 3,
            maxLength: 120,
          })}
        />
      </label>
      <label>
        Email
        <input
          {...register('email', {
            required: true,
            minLength: 3,
            maxLength: 120,
          })}
        />
      </label>
      <label>
        Age
        <input
          {...register('age', {
            required: true,
            min: 1,
            max: 120,
            valueAsNumber: true,
          })}
          type='number'
        />
      </label>
      <button
        type='submit'
        className={styles.submitBtn}>
        Guardar
      </button>
    </form>
  );
}
