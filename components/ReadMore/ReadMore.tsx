import React, {useState} from 'react';
import styles from './ReadMore.module.scss';
import Image from "next/image";

const articles = [
    {
        photo: '/coaching_landing_images/article1.jpg',
        header: 'Legionfarm raises $5.9M to connect pro gamers with wannabees',
        text: 'Over the past two decades, gaming has gone from a niche, time-killing hobby into a grand, booming sector of the entertainment industry.',
        link: 'https://venturebeat.com/games/legionfarm-raises-5-9m-to-connect-pro-gamers-with-wannabees/',
    },
    {
        photo: '/coaching_landing_images/article2.jpg',
        header: 'This 24-year-old earns $3,000 a month as a professional video game coach-here\'s what it\'s like',
        text: 'As a professional video game coach, Natesha Amber able to work whatever hours she likes and earn a steady income of $3,000 a month after taxes — all while playing her favorite game, “Apex Legends.”',
        link: 'https://www.cnbc.com/2021/06/02/24-year-old-makes-3000-dollars-a-month-as-a-pro-video-game-coach-for-apex-legends.html',
    },
    {
        photo: '/coaching_landing_images/article3.jpg',
        header: 'Cash for kills: why are people paying for coaches to get better at video games?',
        text: 'Over the past two decades, gaming has gone from a niche, time-killing hobby into a grand, booming sector of the entertainment industry.',
        link: 'https://www.theguardian.com/games/2021/aug/24/cash-for-kills-why-are-people-paying-for-coaches-to-get-better-at-video-games',
    },
    {
        photo: '/coaching_landing_images/article4.jpg',
        header: 'LegionFarm Raises $6M To Match Everyday Gamers With Pros',
        text: 'Silicon Valley Bank, Y Combinator, Scrum VC, Altair Capital, Kevin Lin of Twitch and Ankur Nagpal all participated in the round. Other investors in the company include TMT Investments and Denis Smetnev of Vimbox.',
        link: 'https://www.theguardian.com/games/2021/aug/24/cash-for-kills-why-are-people-paying-for-coaches-to-get-better-at-video-games',
    },
    {
        photo: '/coaching_landing_images/article5.png',
        header: 'Legionfarm, pairing pro gamers with amateurs, raises $6 million Series A',
        text: 'Legionfarm, the gaming platform that lets gamers play with pro players in their favorite games, has today announced the close of a $6 million Series A round. Investors in the round include SVB, Y Combinator, Scrum VC, Kevin Lin, Altair Capital, Ankur Nagpal and more.',
        link: 'https://techcrunch.com/2021/05/13/legionfarm-pairing-pro-gamers-with-amateurs-raises-6-million-series-a/?guccounter=1',
    },
]

interface ReadMoreProps {
    text: {
        header: string,
        topText: string,
        button1: string,
        button2: string,
    }
}

const ReadMore: React.FC<ReadMoreProps> = ({text}) => {

    const [fullShow, setFullShow] = useState(3);

    return (
        <div className={styles.blockWrapper}>
            <p className={styles.topText}>{text.topText}</p>
            <h3 className={styles.header}>{text.header}</h3>
            <div>
                {articles.slice(0, fullShow).map((item) =>
                    <div className={styles.articleItem} key={item.header}>
                            <Image src={item.photo} width={280} height={280} alt='article photo'/>
                        <div>
                            <p className={styles.articleHeader}>{item.header}</p>
                            <p className={styles.articleSubHeader}>{item.text}</p>
                            <button className={styles.articleButton} onClick={() => window.open(item.link)}>{text.button1}</button>
                        </div>
                    </div>)}
            </div>
            {fullShow !== 5 && <button onClick={() => setFullShow(5)} className={styles.loadButton}>{text.button2}</button>}
        </div>
    );
};

export default ReadMore;
