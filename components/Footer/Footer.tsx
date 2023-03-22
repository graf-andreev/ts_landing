import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import inst from '../../public/coaching_landing_images/inst.svg'
import fb from '../../public/coaching_landing_images/fb.svg'
import twit from '../../public/coaching_landing_images/twit.svg'
import twitch from '../../public/coaching_landing_images/twitch.svg'
import youtube from '../../public/coaching_landing_images/youtube.svg'

interface FooterProps {
    text: {
        header: string,
        subHeader: string,
        placeholder: string,
        buttonText: string,
        follow: string,
        company: string,
        forCommunity: string,
        about: string,
        blog: string,
        career: string,
        job: string,
        terms: string,
        privacy: string,
        ccpa: string,
        termsLink: string,
        policyLink: string,
    }
}

const Footer: React.FC<FooterProps> = ({text}) => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.bottomBlock}>
                <div className={styles.innerWrapper}>
                    <div>
                        <p className={styles.followText}>{text.follow}</p>
                        <div className={styles.socialWrapper}>
                            <a href="https://www.instagram.com/legionfarm/" target="_blank" rel="noreferrer">
                                <Image src={inst} alt='instagram'/>
                            </a>
                            <a href="https://www.facebook.com/legionfarm" target="_blank" rel="noreferrer">
                                <Image src={fb} alt='facebook'/>
                            </a>
                            <a href="https://twitter.com/legionfarm" target="_blank" rel="noreferrer">
                                <Image src={twit} alt='twitter'/>
                            </a>
                            <a href="https://www.twitch.tv/legionfarm_official" target="_blank" rel="noreferrer">
                                <Image src={twitch} alt='twitch'/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCdFPh-1NgBYqqHYkQIDxUPg" target="_blank" rel="noreferrer">
                                <Image src={youtube} alt='youtube'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.bottomText}>
                        <p className={styles.copyright}>© {new Date().getFullYear()} Legionfarm</p>
                        <div className={styles.bottomTextLinks}>
                            <a href={text.termsLink} target="_blank" rel="noreferrer">{text.terms}</a>
                            <div className={styles.bottomDivider}></div>
                            <a href={text.policyLink} target="_blank" rel="noreferrer">{text.privacy}</a>
                            <div className={styles.bottomDivider}></div>
                            <a href="https://promo.legionfarm.com/ccpa" target="_blank" rel="noreferrer">{text.ccpa}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
