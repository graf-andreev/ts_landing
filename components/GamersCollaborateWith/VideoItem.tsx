import React, {useState} from 'react';
import styles from './GamersCollaborateWith.module.scss';
import Image from "next/image";
import playIcon from '../../public/coaching_landing_images/play_icon.svg'

interface VideoItemProps {
    text: string,
    buttonText: string,
    link: string,
    photo: string
}

const VideoItem: React.FC<VideoItemProps> = ({text, buttonText, link, photo}) => {

    const [showYoutube, setShowYoutube] = useState(false);

    const showHandler = () => {
        setShowYoutube(true)
    }

    function extractVideoID(url: string) {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        if (match && match[7].length === 11) {
            return match[7];
        }
        return null;
    }

    return (
        <div className={styles.videoItem}>
            <div onClick={showHandler} className={styles.videoBlock}>
                {!showYoutube ? (
                    <>
                        <Image className={styles.bgImage} src={photo} alt={text} width={640} height={360}/>
                        <Image className={styles.playIcon} src={playIcon} alt='play'/>
                    </>
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${extractVideoID(link)}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
            <div className={styles.bottomBlock}>
                <p className={styles.name}>{text}</p>
                <a className={styles.link} href={link} target="_blank" rel='noreferrer'>{buttonText}</a>
            </div>
        </div>
    );
};

export default VideoItem;
