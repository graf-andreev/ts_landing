import React from 'react';
import styles from './ListOfPros.module.scss';
import Image from "next/image";
import twitchIcon from '../../public/coaching_landing_images/twitch_player.svg';
import youtubeIcon from '../../public/coaching_landing_images/youtube_player.svg';
import trnIcon from '../../public/coaching_landing_images/trn_player.svg';
import webIcon from '../../public/coaching_landing_images/webIcon.svg'

interface ListItemProps {
    index: number,
    name: string,
    photo: string,
    youtube?: string,
    twitch: string,
    trn: string,
    internet: string,
}

const ListItem: React.FC<ListItemProps> = ({index, name, photo, twitch, youtube, trn, internet}) => {

    return (
        <div className={styles.listItem}>
            <div className={styles.middleWrapper}>
                <p className={styles.indexText}>{index}</p>
                <Image className={styles.avatar} src={photo} alt={name} width={48} height={48}/>
                <p className={styles.name}>{name}</p>
                {twitch && <a href={twitch} target="_blank" rel='noreferrer'><Image src={twitchIcon} alt='twitch'/></a>}
                {youtube && <a href={youtube} target="_blank" rel='noreferrer'><Image src={youtubeIcon} alt='youtube'/></a>}
                {trn && <a href={trn} target="_blank" rel='noreferrer'><Image src={trnIcon} alt='trn'/></a>}
                {internet && <a href={internet} target="_blank" rel='noreferrer'><Image src={webIcon} alt='webIcon'/></a>}
            </div>
        </div>
    );
};

export default ListItem;
