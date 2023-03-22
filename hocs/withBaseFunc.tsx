import React, {useEffect, useState} from 'react';


export default function withBaseFunc<T>
    (ExtensibleComponent: React.ElementType) {
    return function ComponentWithBaseFunc(props: T) {

        const [showPopup, setShowPopup] = useState(false);
        const [location, setLocation] = useState('');
        const [popupType, setPopupType] = useState('');
        const [scrollTo, setScrollTo] = useState(0);
        const [auth, setIsAuth] = useState(false);

        useEffect(() => {
            const body: HTMLBodyElement | null = document.querySelector('body')

            if (body !== null){
                if(showPopup){
                    body.classList.add('lock')
                } else {
                    body.classList.remove('lock')
                }
            }
        }, [showPopup]);

        useEffect(() => {
            if (window.localStorage.getItem('auth')) {
                setIsAuth(true);
            }
            setLocation(window.location.hostname)
        }, []);

        useEffect(() => {
            window.localStorage.setItem('coaching', '1');
            if (process.env.NODE_ENV === 'production' && window.location.hostname === "legionfarm.com") {
                if (window.navigator.language === 'en-EN' || window.navigator.language === 'en') {
                    window.location.pathname = 'coaching'
                }
            }
            else return
        }, []);

        const scrollToHandler = () => {
            window.scroll({
                top: scrollTo,
                behavior: 'smooth',
            })
        }

        const buttonClickHandler = () => {
            if (auth) {
                window.location.pathname = 'client/coaching/home'
            } else {
                setShowPopup(true)
            }
        }

        return <ExtensibleComponent
            scrollToHandler={scrollToHandler}
            buttonClickHandler={buttonClickHandler}
            setShowPopup={setShowPopup}
            popupType={popupType}
            setPopupType={setPopupType}
            setScrollTo={setScrollTo}
            showPopup={showPopup}
            auth={auth}
        />;
    };
}
