import Events from '../..';
import ReactPaginate from 'react-paginate';
import styles from './EventsContainer.module.css';

export default function EventsContainer({
  searchValue,
  events,
  renderParams,
  onPageClick,
}) {
  const { totalPages } = renderParams.page;
  if (renderParams.isLoading) return <div>Cargando... </div>;

  if (renderParams.error?.name) return <div>Ha ocurrido un error</div>;

  return (
    <div>
      <Events
        searchValue={searchValue}
        events={events}
      />
      <ReactPaginate
        className={styles.paginationBar}
        nextClassName={styles.next}
        previousClassName={styles.prev}
        pageClassName={styles.page}
        activeClassName={styles.activePage}
        disabledClassName={styles.disabled}
        breakLabel='...'
        nextLabel=' >'
        onPageChange={onPageClick}
        pageRangeDisplayed={4}
        pageCount={totalPages}
        previousLabel='< '
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
