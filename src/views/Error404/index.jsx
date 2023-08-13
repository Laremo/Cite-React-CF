import styles from './Error404.module.css';
import { useRouteError } from 'react-router-dom';

const Error404 = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{error.status} Oops!</h3>
      <h6 className={styles.desc}>{error.statusText || error.data}</h6>
    </div>
  );
};

export default Error404;
