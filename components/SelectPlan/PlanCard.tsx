import React, {useEffect, useState} from 'react';
import styles from './SelectPlan.module.scss';
import flashImg from '../../public/coaching_landing_images/flash.svg'
import checkImg from '../../public/coaching_landing_images/check.svg'
import Image from "next/image";
import className from 'classnames/bind';

const cx = className.bind(styles);

interface PlanCardProps {
    topLabel?: string,
    topText: string,
    header: string,
    info: string[],
    subheader?: string,
    index: number,
    buttonText: string,
    prefix?: string,
    borderText?: string,
    checkerText1?: string,
    checkerText2?: string,
    header2?: string,
    info2?: string[],
    buttonClickHandler: React.MouseEventHandler<HTMLButtonElement>,
}


const PlanCard: React.FC<PlanCardProps> = ({topLabel, topText, header, info, subheader, index, buttonText, prefix, borderText, checkerText1, checkerText2, header2, info2, buttonClickHandler}) => {

    const [oneTime, setOnTime] = useState(false);
    const [ru, setRu] = useState(false);

    const cardClasses = cx({
        threeMonths: index === 1,
        sixMonths: index === 2,
        innerWrapper: true,
    });

    const topTextClasses = cx({
        topText: true,
        topTextRu: ru,
    });

    const oneTimeHandler = () => {
        setOnTime(!oneTime)
    }

    const headerRender = () => {
        if(!header2 || !oneTime){
            return header
        }
        else return header2
    }
    useEffect(() => {
        window.location.pathname === '/coaching/ru' || window.location.pathname === '/ru' ? setRu(true) : setRu(false);
    }, []);

    return (
        <div className={styles.planItem}>
            {topLabel && <div className={styles.topLabel}><Image src={flashImg} alt='flash'/> {topLabel}</div>}
            <div className={cardClasses}>
                <div className={styles.topBlock}>
                    <p className={topTextClasses}>{topText}</p>
                    <h3 className={styles.header}><span>{prefix}</span>{headerRender()}</h3>
                    {oneTime && <p className={styles.subheader}>{subheader}</p>}
                    {borderText && <span className={styles.borderText}>{borderText}</span>}
                    {checkerText1 && <div className={styles.tariffChecker}>
                        <input onChange={oneTimeHandler} className={styles.checkBox} type="checkbox" checked={oneTime} id='tariff'/>
                        <label htmlFor="tariff">
                            <p>{checkerText1}</p>
                            <p>{checkerText2}</p>
                            <div className={styles.checkerItem}></div>
                    </label>
                    </div>}
                </div>

                <ul className={styles.listInfo}>
                    {oneTime ? info.map((item) => <li key={item}><Image src={checkImg} alt='check'/> {item}</li>) :
                        info2 ? info2.map((item) => <li key={item}><Image src={checkImg} alt='check'/> {item}</li>) :
                            info.map((item) => <li key={item}><Image src={checkImg} alt='check'/> {item}</li>)}
                </ul>
                <button onClick={buttonClickHandler} className={styles.bottomButton}>{buttonText}</button>
            </div>
        </div>
    );
};

export default PlanCard;
