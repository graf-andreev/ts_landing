import React from 'react';
import styles from './HowItWorks.module.scss';

interface HowItWorksItemProps {
    header: string,
    text: string,
    index: number,
}

const HowItWorksItem: React.FC<HowItWorksItemProps> = ({header, text, index}) => {

    return (
        <div className={styles.howItem}>
            <p className={styles.howIndex}>{index}</p>
            <p className={styles.howItemHeader}>{header}</p>
            <p className={styles.howItemText}>{text}</p>
        </div>
    );
};

export default HowItWorksItem;
