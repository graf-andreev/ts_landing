import React from 'react';
import styles from './TrustBlock.module.scss'
import Image from "next/image";

interface ReviewItemProps {
    photo: string,
    name: string,
    country: string,
    review: string,
}

const ReviewItem: React.FC<ReviewItemProps> = ({photo, name, country, review}) => {
    return (
        <div className={styles.reviewItem}>
            <div className={styles.topBlock}>
                <Image src={photo} alt={name} width={44} height={44}/>
                <div>
                    <p className={styles.reviewName}>{name}</p>
                    <p className={styles.reviewCountry}>{country}</p>
                </div>
            </div>
            <p className={styles.review}>{review}</p>
        </div>
    );
};

export default ReviewItem;
