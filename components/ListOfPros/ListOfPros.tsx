import React, {useState} from 'react';
import styles from './ListOfPros.module.scss';
import ListItem from "./ListItem";
import Pagination from "./Pagination";

type Pros = {
    name: string,
    photo: string,
    number: number,
    twitch: string,
    youtube?: string,
    trn: string,
    internet: string,
}

interface ListOfPros {
    text: {
        topText: string,
        header: string,
        other: string,
        pros: Array<Pros>,
    }
}

const ListOfPros: React.FC<ListOfPros> = ({text}) => {

    const PLAYERS_TO_SHOW = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const renderPages = text.pros.length / PLAYERS_TO_SHOW

    const setCurrentPageHandler = (index: number) => {
        setCurrentPage(index)
    }

    return (
        <div className={styles.listWrapper}>
            <p className={styles.topText}>{text.topText}</p>
            <h2 className={styles.listHeader}>{text.header}</h2>
            {currentPage !== 5 && <div className={styles.topBlockWrapper}>
            </div>}
            {text.pros.slice(((currentPage - 1) * PLAYERS_TO_SHOW), currentPage * PLAYERS_TO_SHOW).map((item) =>
                <ListItem
                    key={item.name}
                    index={item.number}
                    photo={item.photo}
                    name={item.name}
                    twitch={item.twitch}
                    youtube={item.youtube}
                    trn={item.trn}
                    internet={item.internet}
                />)}
            {currentPage === 5 && <div className={styles.otherPlayers}>+ 286 {text.other}</div>}
            <Pagination
                renderPages={renderPages + 1}
                currentPage={currentPage}
                setCurrentPageHandler={setCurrentPageHandler}
            />
        </div>
    );
};

export default ListOfPros;
