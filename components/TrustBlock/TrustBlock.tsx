import React from 'react';
import styles from './TrustBlock.module.scss'
import ReviewItem from "./ReviewItem";
import star from '../../public/coaching_landing_images/greenstars.svg';
import trustLogo from '../../public/coaching_landing_images/trustLogo.svg';
import Image from "next/image";

type Review = {
    photo: string,
    name: string,
    country: string,
    text: string,
}

interface TrustBlockProps {
    text: {
        topText: string,
        header: string,
        buttonText: string,
        Excellent: string,
        reviewsText: string,
        reviews: Review[],
    }
}

const TrustBlock: React.FC<TrustBlockProps> = ({text}) => {

    const showTrust = () => {
        window.open('https://www.trustpilot.com/review/legionfarm.com?stars=5');
    }

    return (
        <div className={styles.trustWrapper}>
            <p className={styles.topText}>{text.topText}</p>
            <h2 className={styles.trustHeader}>{text.header}</h2>
            <div onClick={showTrust} className={styles.trustBlock}>
                <span>{text.Excellent}</span>
                <Image className={styles.trustStars} src={star} alt='green star'/>
                <p><span>3,436</span> {text.reviewsText}</p>
                <Image src={trustLogo} alt='trust logo'/>
            </div>
            <div className={styles.reviewsWrapper}>
                <div className={styles.reviewColumn}>
                    <ReviewItem
                        review={text.reviews[0].text}
                        country={text.reviews[0].country}
                        name={text.reviews[0].name}
                        photo={text.reviews[0].photo}
                    />
                    <ReviewItem
                        review={text.reviews[1].text}
                        country={text.reviews[1].country}
                        name={text.reviews[1].name}
                        photo={text.reviews[1].photo}
                    />
                    <ReviewItem
                        review={text.reviews[2].text}
                        country={text.reviews[2].country}
                        name={text.reviews[2].name}
                        photo={text.reviews[2].photo}
                    />
                </div>
                <div className={styles.reviewSecondColumn}>
                    <ReviewItem
                        review={text.reviews[3].text}
                        country={text.reviews[3].country}
                        name={text.reviews[3].name}
                        photo={text.reviews[3].photo}
                    />
                    <ReviewItem
                        review={text.reviews[4].text}
                        country={text.reviews[4].country}
                        name={text.reviews[4].name}
                        photo={text.reviews[4].photo}
                    />
                    <ReviewItem
                        review={text.reviews[5].text}
                        country={text.reviews[5].country}
                        name={text.reviews[5].name}
                        photo={text.reviews[5].photo}
                    />
                </div>

            </div>
            <div className={styles.hideBlock}/>
            <a href='https://www.trustpilot.com/review/legionfarm.com?stars=5' target="_blank" className={styles.trustButton} rel="noreferrer">{text.buttonText}</a>
        </div>
    );
};

export default TrustBlock;
