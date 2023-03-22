import React from 'react';
import styles from './FeatureInside.module.scss';

interface FeatureProps {
    text: {
        topText: string,
        header: string,
        firstHeader: string,
        firstText: string,
        secondHeader: string,
        secondText: string,
        ThirdHeader: string,
        ThirdText: string,
        FourthHeader: string,
        FourthText: string,
    }
}

const FeatureInside: React.FC<FeatureProps> = ({text}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.topText}>{text.topText}</p>
            <h2 className={styles.blockHeader}>{text.header}</h2>
            <div className={styles.featuresWrapper}>
                <div className={styles.featureItem1}>
                    <p className={styles.header}>{text.firstHeader}</p>
                    <p className={styles.text}>{text.firstText}</p>
                </div>
                <div className={styles.featureItem2}>
                    <p className={styles.header}>{text.secondHeader}</p>
                    <p className={styles.text}>{text.secondText}</p>
                </div>
                <div className={styles.featureItem3}>
                    <p className={styles.header}>{text.ThirdHeader}</p>
                    <p className={styles.text}>{text.ThirdText}</p>
                </div>
                <div className={styles.featureItem4}>
                    <p className={styles.header}>{text.FourthHeader}</p>
                    <p className={styles.text}>{text.FourthText}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureInside;
