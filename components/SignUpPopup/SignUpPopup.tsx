import React, {
    useEffect,
    useLayoutEffect, useRef,
    useState
} from 'react';
import styles from './SignUpPopup.module.scss';
import Image from "next/image";
import closeImg from '../../public/coaching_landing_images/closeIcon.svg';
import emailError from '../../public/coaching_landing_images/emailError.svg';
import className from 'classnames/bind';
import {postData} from "../../helpers/postData";
import discordIcon from '../../public/coaching_landing_images/discordIcon.svg';
import useOutsideClick from "../../hooks/useOutsideClick";
import {request} from "../../helpers/getData";

const cx = className.bind(styles);

interface PostResponse {
    data: {
        redirect_auth: string,
        errors: {
            email: string,
        }
    }
}

interface ProviderList {
    url: string;
    name: string,
}

interface ProviderResponse {
        data: {
            oauth_provider_list: ProviderList[],
            reset_password_timeout_seconds: number,
        },
        errors: string[],
        message: string,
        success: boolean,
}

interface SignUpPopupProps {
    text: {
        create: string,
        subheader: string,
        email: string,
        google: string,
        error: string,
        or: string,
        signUpText: string,
        signUpText2: string,
        signIn: string,
        signInText: string,
        signInText2: string,
        password: string,
        discordText: string,
    },
    setShowPopup: (value: boolean) => void,
    popupType: string,
    setPopupType: (value: string) => void,
}

const SignUpPopup: React.FC<SignUpPopupProps> = ({text, setShowPopup, popupType, setPopupType}) => {

    const [errorSignIn, setErrorSignIn] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [ru, setRu] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const [buttonLoading, setButtonLoading] = useState(false);
    const [oauthProviderList, setOauthProviderList] = useState<ProviderList[]>([]);

    const ref = useRef(null);

    useOutsideClick(ref, () => setShowPopup(false));

    const buttonClasses = cx({
        createButtonLoading: buttonLoading,
        createButton: true,
    });

    useEffect(() => {
        window.location.pathname === '/coaching/ru' ? setRu(true) : setRu(false);
    }, []);

    const focusHandler = () => {
        setIsFocused(true)
    }

    const blurHandler = () => {
        setIsFocused(false);
    }

    const signInEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginEmail(e.target.value);
        setErrorSignIn('');
    }

    const signInPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginPassword(e.target.value);
        setErrorSignIn('');
    }

    const hidePopup = () => {
        setShowPopup(false);
        setPopupType('');
    }

    useLayoutEffect(() => {
        request<ProviderResponse>('https://pwp-staging-gateway.legionfarm.com/auth/buyer/get-form-settings')
            .then(data => setOauthProviderList(data?.data?.oauth_provider_list));
    },[])


    const onAuthClick = (url: string) => () => {
        if (buttonLoading) {
            return null
        }
        setTimeout(() => {
            window.location.href = `${url}&product=coaching&lang=${ru ? 'ru' : 'en'}`;
        }, 300);
    };

    const signInHandler = () => {
        if (buttonLoading) {
            return null
        }
        setButtonLoading(true);
            postData<PostResponse>('https://pwp-staging-gateway.legionfarm.com/auth/buyer/sign-in',  {
                email: loginEmail,
                password: loginPassword,
            })
                .then((data) => {
                    if (data?.data?.redirect_auth) {
                        window.location.href = data?.data?.redirect_auth;
                        localStorage.setItem('auth', JSON.stringify(true));
                    } else {
                        setErrorSignIn(data.data.errors.email);
                        setButtonLoading(false);
                    }
                });
    }

    return (
        <div className={styles.popupOverlay}>
            <div ref={ref} className={styles.popupWrapper}>
                <Image onClick={hidePopup} className={styles.closeImg} src={closeImg} alt='closeImg'/>
                <div className={styles.innerWrapper}>
                    {popupType === 'signIn' ?
                        <>
                            <p className={styles.popupHeader}>{text.signIn}</p>
                            <div className={styles.inputWrapper}>
                                <input onChange={(e) => signInEmailHandler(e)} value={loginEmail}
                                       onBlur={blurHandler}
                                       onFocus={focusHandler}
                                       type="email" className={styles.emailInput} placeholder={text.email}/>
                                {errorSignIn && <p className={styles.errorState}><Image src={emailError} alt='error'/>{errorSignIn}</p>}

                                <div className={styles.dividerBlock}></div>

                                <input onChange={(e) => signInPasswordHandler(e)} value={loginPassword}
                                       onBlur={blurHandler}
                                       onFocus={focusHandler}
                                       type={inputType} className={styles.emailInput} placeholder={text.password}/>
                            </div>
                            <button disabled={!!errorSignIn || !loginEmail.length && !loginPassword.length} onClick={signInHandler}
                                    className={buttonClasses}>{text.signIn}</button>
                            <p className={styles.divider}>{text.or}</p>
                            <button onClick={onAuthClick(oauthProviderList[1]?.url)}
                                    className={buttonClasses}><Image src={discordIcon} alt='discord'/>{text.discordText}</button>
                            <p className={styles.changeBlock}>{text.signUpText} <span
                                onClick={() => setPopupType('signUp')}>{text.signUpText2}</span></p>
                        </> : <>
                            <p className={styles.popupHeader}>{text.create}</p>
                            <button onClick={onAuthClick(oauthProviderList[1]?.url)}
                                    className={buttonClasses}><Image src={discordIcon} alt='discord'/>{text.discordText}</button>
                            <p className={styles.changeBlock}>{text.signInText} <span
                                onClick={() => setPopupType('signIn')}>{text.signInText2}</span></p>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default SignUpPopup;
