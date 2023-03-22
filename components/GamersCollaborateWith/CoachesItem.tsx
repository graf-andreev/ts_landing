import React from 'react';
import styles from './GamersCollaborateWith.module.scss';
import Image from "next/image";

interface CoachesItemProps {
    photo: string,
    name: string,
    link: string,
    text: string,
}

const CoachesItem: React.FC<CoachesItemProps> = ({photo, name, link, text}) => {
    return (
        <div className={styles.coachItem}>
            <Image src={photo} alt={name} width={310} height={300}/>
            <div className={styles.bottomWrapper}>
                <p className={styles.name}>{name}</p>
                <a className={styles.link} href={link} target="_blank" rel='noreferrer'>{text} ›</a>
            </div>
        </div>
    );
};

export default CoachesItem;
