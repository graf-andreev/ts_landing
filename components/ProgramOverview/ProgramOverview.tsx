import React, {useEffect, useState} from 'react';
import styles from './ProgramOverview.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

interface ProgramProps {
    text: {
        top: string,
        header: string
        secondHeader: string
        secondText: string
        secondText2: string
        thirdHeader: string
        thirdTexts: string[],
        buttonText: string
    }
}

const ProgramOverview: React.FC<ProgramProps> = ({text}) => {

    const [ru, setRu] = useState(false);
    const [activeBlock, setActiveBlock] = useState(0);

    useEffect(() => {
        window.location.pathname === '/coaching/ru' || window.location.pathname === '/ru' ? setRu(true) : setRu(false);
    }, []);


    const blockClasses = cx({
        image3: activeBlock === 0,
        image4: activeBlock === 1,
        image5: activeBlock === 2,
        image3ru: ru && activeBlock === 0,
        image4ru: ru && activeBlock === 1,
        image5ru: ru && activeBlock === 2,
    });

    const defineActive = (index: number) => {
        setActiveBlock(index);
    }

    return (
        <div className={styles.overView}>
            <p className={styles.overTop}>{text.top}</p>
            <h2 className={styles.overHeader}>{text.header}</h2>
            <div className={styles.overItemReverse}>
                <div className={styles.image2}></div>
                <div className={styles.textBlock}>
                    <h3 className={styles.itemHeader}>{text.secondHeader}</h3>
                    <p className={styles.itemText}>{text.secondText}</p>
                    <p className={styles.itemText}>{text.secondText2}</p>
                </div>
            </div>
            <div className={styles.overItem}>
                <div className={styles.textBlock}>
                    <h3 className={styles.itemHeaderBottom}>{text.thirdHeader}</h3>
                    <div className={styles.textsWrapper}>
                        {text.thirdTexts.map((item, index) => <p onClick={() => defineActive(index)} key={index} className={index === activeBlock ? styles.activeText : styles.text}>{item}</p>)}
                    </div>
                </div>
                <div className={blockClasses}></div>
            </div>
        </div>
    );
};

export default ProgramOverview;
