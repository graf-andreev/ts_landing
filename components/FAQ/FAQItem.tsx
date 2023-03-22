import React, {useState} from 'react';
import styles from './FAQ.module.scss';
import chevron  from '../../public/coaching_landing_images/chevron.svg'
import Image from "next/image";
import className from 'classnames/bind';

const cx = className.bind(styles);

interface FAQItemProps {
    header: string,
    answer: string,
    list?: string[],
    listTop?: string,
}

const FAQItem: React.FC<FAQItemProps> = ({header, answer, list, listTop}) => {

    const [toggleItem, setToggleItem] = useState(false);

    const chevronClasses = cx({
        chevronRotate: toggleItem,
        chevron: true,
    });

    const toggleFaq = () => {
        setToggleItem(!toggleItem)
    }

    return (
        <div onClick={toggleFaq} className={styles.faqItem}>
            <div className={styles.headerWrapper}>
                <p className={styles.itemHeader}>{header}</p>
                <Image className={chevronClasses} src={chevron} alt='chevron'/>
            </div>
            {toggleItem && <div className={styles.itemText}>{answer}
                <p className={styles.listHeader}>{listTop}</p>
                {list && <ul>
                    {list.map((item) => <li key={item}>{item}</li>)}
                </ul>}
            </div>}
        </div>
    );
};

export default FAQItem;
