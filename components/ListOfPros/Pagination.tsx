import React from 'react';
import styles from './ListOfPros.module.scss';

interface PaginationProps {
    currentPage: number,
    setCurrentPageHandler: (value: number) => void,
    renderPages: number,
}

const Pagination: React.FC<PaginationProps> = ({currentPage, setCurrentPageHandler, renderPages}) => {

    const renderArr = Array.from({length: renderPages}, (_, i) => i + 1)

    return (
        <div className={styles.pagination}>
            {renderArr.map((index) => <p onClick={() => setCurrentPageHandler(index)} className={currentPage === index ? styles.paginationActive : undefined} key={index}>{index}</p>)}
        </div>
    );
};

export default Pagination;
