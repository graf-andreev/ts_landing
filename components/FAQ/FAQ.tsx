import React from 'react';
import styles from './FAQ.module.scss';
import FAQItem from "./FAQItem";

type Item = {
    question: string,
    answer: string,
    listTop?: string,
    list?: string[],
    listBottom?: string
}

interface FAQProps {
    text: {
        text: string,
        header: string,
        items: Item[],
    },

}

const FAQ: React.FC<FAQProps> = ({text}) => {
    return (
        <div className={styles.faqWrapper}>
            <p className={styles.faqText}>{text.text}</p>
            <h2 className={styles.faqHeader}>{text.header}</h2>
            {text.items.map((item) =>
                <FAQItem
                    key={item.question}
                    header={item.question}
                    answer={item.answer}
                    listTop={item.listTop}
                    list={item.list}
                />)}
        </div>
    );
};

export default FAQ;
