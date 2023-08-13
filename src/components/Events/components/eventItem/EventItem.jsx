import './styles.css';
// para importar Módulos css es diferente...
import styles from './EventItem.module.css';
const EventItem = ({
  id,
  info = 'no info available',
  name,
  image,
  onClickEvent,
}) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onClickEvent(id);
  };

  return (
    <li className='event_item_container'>
      <img
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      {/* Esto es usando el módulo de css */}
      <div className={styles.eventInfoContainer}>
        <h4 className='event_name'>{name}</h4>
        <p className='event_info'>{info}</p>
        <button
          className='see_more_btn'
          onClick={handleSeeMoreClick}>
          {/* <Link to={`/detail/${id}`}>Ver más</Link> */}
          Ver más
        </button>
      </div>
    </li>
  );
};

export default EventItem;
