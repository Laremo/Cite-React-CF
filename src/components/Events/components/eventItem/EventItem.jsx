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
    <li>
      <img
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </li>
  );
};

export default EventItem;
