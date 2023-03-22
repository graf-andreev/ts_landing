import React from 'react';
import styles from './Mission.module.scss';
import seibelImg from '../../public/coaching_landing_images/seibel.png';
import linImg from '../../public/coaching_landing_images/lin.png';
import investorsImg from '../../public/coaching_landing_images/investors.png'
import Image from "next/image";

interface MissionProps {
    text: {
        header: string,
        number: string,
        millions: string,
        firstCardText: string,
        secondCardText: string,
        secondCardBottomText: string,
        secondCardButton: string,
        twitch: string,
        thirdCard: string,
        fourCardText: string,
        fourCardBottomText: string,
    }
}

const Mission: React.FC<MissionProps> = ({text}) => {
    return (
        <div className={styles.missionWrapper}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.missionHeader}>{text.header}</h2>
            </div>
            <div className={styles.cardsWrapper}>
                <div className={styles.purpleCard}>
                    <p className={styles.topText}>{text.number}</p>
                    <p className={styles.millions}>{text.millions}</p>
                    <p className={styles.bottomText}>{text.firstCardText}</p>
                </div>
                <div className={styles.cardItem}>
                    <Image src={seibelImg} alt='seibel'/>
                    <p className={styles.investorText}>{text.secondCardText}</p>
                    <p className={styles.investorName}>{text.secondCardBottomText} <span>{text.twitch}</span></p>
                    <a className={styles.bottomLink} href="https://www.forbes.com/sites/frederickdaso/2020/03/16/legionfarm-a-b2c-esports-y-combinator-startup-enables-amateurs-to-be-trained-by-professional-gamers/?sh=5d46f9d712c0" target="_blank" rel='noreferrer'>{text.secondCardButton}</a>
                </div>
                <div className={styles.purpleCard}>
                    <p className={styles.topText}>{text.thirdCard}</p>
                    <Image src={investorsImg} alt='investors logo'/>
                </div>
                <div className={styles.cardItem}>
                    <Image src={linImg} alt='lin'/>
                    <p className={styles.investorText}>{text.fourCardText}</p>
                    <p className={styles.investorName}>{text.fourCardBottomText} <span>{text.twitch}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
