import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagintaion = ({ onChangePage }) => {
  return (
      <ReactPaginate 
        className={styles.root}
        pageCount={3} 
        pageRangeDisplayed={4}
        breakLabel='...'
        previousLabel='<'
        nextLabel='>'
        renderOnZeroPageCount={null}
        onPageChange={event => onChangePage(event.selected + 1)} 
      />
  )
}

export default Pagintaion;