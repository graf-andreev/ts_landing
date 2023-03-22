import React, {useState} from 'react';
import styles from './Calculator.module.scss';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import rank_1 from '../../public/coaching_landing_images/rank_1.svg';
import rank_2 from '../../public/coaching_landing_images/rank_2.svg';
import rank_3 from '../../public/coaching_landing_images/rank_3.svg';
import rank_4 from '../../public/coaching_landing_images/rank_4.svg';
import rank_5 from '../../public/coaching_landing_images/rank_5.svg';
import Image from "next/image";
import informationIcon from '../../public/coaching_landing_images/infIcon.svg';
// @ts-ignore
import AnimatedNumber from "animated-number-react";

interface CalculatorProps {
    text: {
            topText: string,
            header: string,
            skill: string,
            hours: string,
            result: string,
            PC: string,
            plans: string,
            after: string,
            months: string,
            toolTipHeader: string,
            toolTipText: string,
            toolTipHeader2: string,
            toolTipText2: string,
    },
        scrollToHandler: React.MouseEventHandler<HTMLButtonElement>
}

const Calculator: React.FC<CalculatorProps> = ({text, scrollToHandler}) => {

    const [skillValue, setSkillValue] = useState(3);
    const [hoursValue, setHoursValue] = useState(40);
    const [isPC, setIsPC] = useState(false);

    const countedHours = () => {
        if (skillValue < 4) {
            return 500
        } if (skillValue === 4) {
            return 400
        } else return 300
    }

    const monthValue = Math.round(countedHours() / hoursValue / 4);

    const revenue1 = Math.round(hoursValue * 13 * Math.pow(1.12, skillValue) * (isPC ? 1.2 : 1));
    const revenue2 = Math.round(hoursValue * 24 * Math.pow(1.12, skillValue) * (isPC ? 1.2 : 1));
    const revenue3 = Math.round(hoursValue * 35 * Math.pow(1.12, skillValue) * (isPC ? 1.2 : 1));

    const havePChandler = () => {
        setIsPC(!isPC)
    }

    const renderEmoji = () => {
        switch (skillValue){
            case 1:
                return <Image className={styles.smile} src={rank_1} alt='emoji'/>
            case 2:
                return <Image className={styles.smile} src={rank_2} alt='emoji'/>
            case 3:
                return <Image className={styles.smile} src={rank_3} alt='emoji'/>
            case 4:
                return <Image className={styles.smile} src={rank_4} alt='emoji'/>
            case 5:
                return <Image className={styles.smile} src={rank_5} alt='emoji'/>
            default:
                console.log('Something wrong')
        }
    }

    const formatValue = (value: number) => value.toFixed(0);

    return (
        <div className={styles.calcWrapper}>
            <p className={styles.topText}>{text.topText}</p>
            <h2 className={styles.header}>{text.header}</h2>
            <div className={styles.innerWrapper}>
                <div className={styles.calcBlock}>
                    <div className={styles.rangeContainer}>
                        <div className={styles.wrapper}>
                            <p className={styles.rateSkill}>{text.skill}</p>
                            <div className={styles.tooltipWrapper}>
                                <Image src={informationIcon} alt='info'/>
                                <div className={styles.toolTip}>
                                    <p>{text.toolTipHeader2}</p>
                                    <span>{text.toolTipText2}</span>
                                </div>
                            </div>
                        </div>
                        {renderEmoji()}
                        <InputRange
                            maxValue={5}
                            minValue={1}
                            step={1}
                            value={skillValue}
                            onChange={skillValue => setSkillValue(skillValue)}
                            onChangeComplete={renderEmoji}
                        />
                        <div className={styles.rangeBottom}>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </div>
                    </div>
                    <div className={styles.rangeContainer}>
                        <p className={styles.textHours}>{text.hours}</p>
                        <p className={styles.hours}>{hoursValue}</p>
                        <InputRange
                            maxValue={50}
                            minValue={10}
                            step={1}
                            value={hoursValue}
                            onChange={hoursValue => setHoursValue(hoursValue)}
                        />
                        <div className={styles.rangeBottom}>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                            <p>50</p>
                        </div>
                    </div>
                </div>
                <div className={styles.calcBlock}>
                    <div className={styles.topWrapper}>
                        <p className={styles.result}>{text.result}</p>
                        <button onClick={scrollToHandler} className={styles.plansButton}>{text.plans}</button>
                    </div>
                    <div className={styles.pcBlock}>
                        <input onChange={havePChandler} className={styles.pcCheckBox} type="checkbox" checked={isPC} id='pc'/>
                        <label htmlFor="pc">
                            <div className={styles.checkboxLabel}>
                                <p></p>
                            </div>
                            {text.PC}
                        </label>
                        <div className={styles.tooltipWrapper}>
                            <Image src={informationIcon} alt='info'/>
                            <div className={styles.toolTip}>
                                <p>{text.toolTipHeader}</p>
                                <span>{text.toolTipText}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.graphsWrapper}>
                        <div className={styles.graphWrapper}>
                            <p className={styles.revenue}><span className={styles.revIndex}>$</span>
                                <AnimatedNumber
                                    className={styles.revenue}
                                    formatValue={formatValue}
                                    duration={500}
                                    value={revenue1 < 1000 ? 1000 : revenue1}
                                />
                            </p>
                            <div className={styles.graph1}>
                                <p className={styles.months}>{text.after} <br/> {monthValue} {text.months}</p>
                            </div>
                        </div>
                        <div className={styles.graphWrapper}>
                            <p className={styles.revenue}><span className={styles.revIndex}>$</span>
                                <AnimatedNumber
                                    className={styles.revenue}
                                    formatValue={formatValue}
                                    duration={500}
                                    value={revenue2 < 1000 ? 1000 : revenue2}
                                /></p>
                            <div className={styles.graph2}>
                                <p className={styles.months}>{text.after} <br/> {monthValue + 6} {text.months}</p>
                            </div>
                        </div>
                        <div className={styles.graphWrapper}>
                            <p className={styles.revenue}><span className={styles.revIndex}>$</span>
                                <AnimatedNumber
                                    className={styles.revenue}
                                    formatValue={formatValue}
                                    duration={500}
                                    value={revenue3 < 1000 ? 1000 : revenue3}
                                />
                            </p>
                            <div className={styles.graph3}>
                                <p className={styles.months}>{text.after} <br/> {monthValue + 12} {text.months}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
