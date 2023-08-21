import './styles.css';
// para importar Módulos css es diferente...
import styles from './EventItem.module.css';
import filledHeart from '../../../../assets/hearth-filled.png';
import unfilledHeart from '../../../../assets/hearth-unfilled.png';
import useLikedEvents from '../../../../Hooks/useLikedEvents';

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

  const { isLiked, toggleLiked } = useLikedEvents(id);

  const handleLikedToggle = () => {};

  return (
    <li className='event_item_container'>
      <div className={styles.imageContainer}>
        <img
          src={isLiked ? filledHeart : unfilledHeart}
          alt='heartButton'
          className={styles.heartButton}
          onClick={toggleLiked}
        />
        <img
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      </div>
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
