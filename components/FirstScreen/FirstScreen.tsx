import React, {useEffect, useState} from 'react';
import styles from './FirstScreen.module.scss'
import Image from "next/image";
import logo from '../../public/coaching_landing_images/lf_logo.svg';
import className from 'classnames/bind';

const cx = className.bind(styles);

interface TextInterface {
    header: string,
    subheader: string,
    signInButton: string,
    firstButton: string,
    secondButton: string,
    signInButtonAuth: string,
    signInButtonBack: string,
}

interface FirstScreenProps {
    text: TextInterface,
    setShowPopup: (value: boolean) => void,
    showPopup: boolean
    setPopupType: (value: string) => void,
    buttonClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    auth: boolean,
    scrollToHandler: React.MouseEventHandler<HTMLButtonElement>,
}

const FirstScreen: React.FC<FirstScreenProps> = ({text, setShowPopup, showPopup, setPopupType, buttonClickHandler, auth, scrollToHandler}) => {

    const [offset, setOffset] = useState(0);

    const topBlockClasses = cx({
        topBlockPopup: showPopup,
        topBlockScroll: offset > 50,
        topBlock: true,
    });

    const backToLF = () => {
        window.location.pathname = '/main-page';
        localStorage.removeItem('coaching');
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setOffset(window.pageYOffset);
        })
    }, []);

    const showSignInPopup = () => {
        setShowPopup(true);
        setPopupType('signIn')
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.innerWrapper}>
                <div className={topBlockClasses}>
                    <div className={styles.innerTop}>
                        <Image src={logo} alt={logo}/>
                        <div className={styles.buttonWrapper}>
                            {auth ?
                                <>
                                    <button onClick={backToLF} className={styles.signInButton}>{text.signInButtonBack}</button>
                                    <button onClick={buttonClickHandler} className={styles.topButton}>{text.signInButtonAuth}</button>
                                </>
                                :
                                <>
                                    <button onClick={showSignInPopup} className={styles.signInButton}>{text.signInButton}</button>
                                    <button onClick={buttonClickHandler} className={styles.topButton}>{text.firstButton}</button>
                                </>
                            }

                        </div>
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <h1 className={styles.pageHeader}>{text.header}</h1>
                    <p className={styles.pageSubHeader}>{text.subheader}</p>
                    <button onClick={scrollToHandler} className={styles.secondButton}>{text.secondButton}</button>
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;
