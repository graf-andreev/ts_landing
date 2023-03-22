import Head from 'next/head'
import Footer from "../components/Footer/Footer";
import FirstScreen from "../components/FirstScreen/FirstScreen";
import Games from "../components/Games/Games";
import ProgramOverview from "../components/ProgramOverview/ProgramOverview";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import SelectPlan from "../components/SelectPlan/SelectPlan";
import GamersCollaborateWith from "../components/GamersCollaborateWith/GamersCollaborateWith";
import Mission from "../components/Mission/Mission";
import TrustBlock from "../components/TrustBlock/TrustBlock";
import FAQ from "../components/FAQ/FAQ";
import { ru } from '../international/ru'
import Calculator from "../components/Calculator/Calculator";
import ListOfPros from "../components/ListOfPros/ListOfPros";
import SignUpPopup from "../components/SignUpPopup/SignUpPopup";
import Script from "next/script";
import FeatureInside from "../components/FeatureInside/FeatureInside";
import ReadMore from "../components/ReadMore/ReadMore";

import React from 'react';
import withBaseFunc from "../hocs/withBaseFunc";
import HomePageProps from "../types/mainPage";


const HomeRu: React.FC<HomePageProps> = ({
                    scrollToHandler,
                    buttonClickHandler,
                    setShowPopup,
                    popupType,
                    setPopupType,
                    setScrollTo,
                    showPopup,
                    auth
        }) => {

    return (
        <>
            <Head>
                <title>Профессия: игровой тренер и контент-мейкер  | Legionfarm.com</title>
                <meta name="description" content="Станьте игровым тренером с программой обучения от Legionfarm! Начните зарабатывать, играя в видеоигры уже сейчас!" />
                <link rel="icon" href="coaching_landing_images/favicon.ico" />
            </Head>

            <Script id='script' strategy="afterInteractive" dangerouslySetInnerHTML={{
                                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N8RZCRH');`
            }}></Script>
            <Script id='script1' strategy="afterInteractive" dangerouslySetInnerHTML={{
                __html: ` (function(m, o, n, t, e, r, _){
            m['__GetResponseAnalyticsObject'] = e;m[e] = m[e] || function() {(m[e].q = m[e].q || []).push(arguments)};
            r = o.createElement(n);_ = o.getElementsByTagName(n)[0];r.async = 1;r.src = t;r.setAttribute('crossorigin', 'use-credentials');_.parentNode .insertBefore(r, _);
        })(window, document, 'script', 'https://info.legionfarm.com/script/5af25fe6-09f4-4e35-8bbd-86972667490d/ga.js', 'GrTracking');`
            }}></Script>

            <main>
                <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8RZCRH"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                <FirstScreen text={ru.FirstScreen} scrollToHandler={scrollToHandler} buttonClickHandler={buttonClickHandler} setShowPopup={setShowPopup} showPopup={showPopup} setPopupType={setPopupType} auth={auth}/>
                <Games text={ru.Games}/>
                <ProgramOverview text={ru.OverView} />
                <Calculator text={ru.Calculator} scrollToHandler={scrollToHandler}/>
                <Mission text={ru.Mission}/>
                <SelectPlan text={ru.SelectPlan} setScrollTo={setScrollTo} buttonClickHandler={buttonClickHandler}/>
                <GamersCollaborateWith text={ru.Gamers}/>
                <ListOfPros text={ru.ListOfPros}/>
                <FeatureInside text={ru.Inside}/>
                <HowItWorks text={ru.HowItWorks}/>
                <ReadMore text={ru.ReadMore}/>
                <TrustBlock text={ru.Reviews}/>
                <FAQ text={ru.FAQ}/>
            </main>

            <Footer text={ru.Footer}/>
            {showPopup &&
                <SignUpPopup
                    text={ru.Popup}
                    setShowPopup={setShowPopup}
                    popupType={popupType}
                    setPopupType={setPopupType}/>}
        </>
    )
}

export default withBaseFunc(HomeRu);
