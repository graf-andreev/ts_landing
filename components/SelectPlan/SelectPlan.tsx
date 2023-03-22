import React, {useEffect, useRef, Dispatch, SetStateAction} from 'react';
import styles from './SelectPlan.module.scss';
import PlanCard from "./PlanCard";

type Items = {
    topLabel?: string,
    topText: string,
    header: string,
    header2?: string,
    prefix?: string,
    checkerText1?: string,
    checkerText2?: string,
    subheader?: string,
    borderText?: string,
    info: string[],
    info2?: string[],
}

interface SelectPlanProps {
    text: {
        header: string,
        buttonText: string,
        items: Items[],
    }
    setScrollTo: Dispatch<SetStateAction<number>>,
    buttonClickHandler: React.MouseEventHandler<HTMLButtonElement>,
}

const SelectPlan: React.FC<SelectPlanProps> = ({text, setScrollTo, buttonClickHandler }) => {

    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (blockRef.current !== null) {
            setScrollTo(blockRef.current.offsetTop)
        }
    }, []);

    return (
        <div className={styles.planWrapper} ref={blockRef}>
            <h2 className={styles.planHeader}>{text.header}</h2>
            <div className={styles.itemsWrapper}>
                {text.items.map((item, index) =>
                    <PlanCard
                    key={item.header}
                    header={item.header}
                    header2={item.header2}
                    subheader={item.subheader}
                    topText={item.topText}
                    topLabel={item.topLabel}
                    info={item.info}
                    info2={item.info2}
                    prefix={item.prefix}
                    buttonText={text.buttonText}
                    borderText={item.borderText}
                    checkerText1={item.checkerText1}
                    checkerText2={item.checkerText2}
                    buttonClickHandler={buttonClickHandler}
                    index={index}
                />)}
            </div>
        </div>
    );
};

export default SelectPlan;
