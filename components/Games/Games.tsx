import React from 'react';
import styles from './Games.module.scss';
import wzIcon from '../../public/coaching_landing_images/wz-game-logo.svg';
import apexIcon from '../../public/coaching_landing_images/apex-game-logo.svg';
import d2Icon from '../../public/coaching_landing_images/d2-game-logo.svg';
import wowIcon from '../../public/coaching_landing_images/wow-game-logo.svg';
import lolIcon from '../../public/coaching_landing_images/lol-game-logo.svg';
import Image from "next/image";

interface GamesProps {
    text: {
        header: string,
        games: string,
    }
}

const Games: React.FC<GamesProps> = ({text}) => {

    return (
        <div className={styles.gamesBlock}>
            <div className={styles.innerWrapper}>
                <h2 className={styles.gamesHeader}>{text.header}</h2>
                <div className={styles.games}>
                    <Image src={wzIcon} alt='wz'/>
                    <Image src={apexIcon} alt='apex'/>
                    <Image src={d2Icon} alt='d2'/>
                    <Image src={wowIcon} alt='wow'/>
                    <Image src={lolIcon} alt='lol'/>
                    <p>{text.games}</p>
                </div>
            </div>
        </div>
    );
};

export default Games;
