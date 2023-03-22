import Head from 'next/head'
import Footer from "../components/Footer/Footer";
import FirstScreen from "../components/FirstScreen/FirstScreen";
import Games from "../components/Games/Games";
import ProgramOverview from "../components/ProgramOverview/ProgramOverview";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Calculator from "../components/Calculator/Calculator";
import SelectPlan from "../components/SelectPlan/SelectPlan";
import GamersCollaborateWith from "../components/GamersCollaborateWith/GamersCollaborateWith";
import Mission from "../components/Mission/Mission";
import TrustBlock from "../components/TrustBlock/TrustBlock";
import FAQ from "../components/FAQ/FAQ";
import { eng } from '../international/en'
import ListOfPros from "../components/ListOfPros/ListOfPros";
import SignUpPopup from "../components/SignUpPopup/SignUpPopup";
import Script from "next/script";
import FeatureInside from "../components/FeatureInside/FeatureInside";
import ReadMore from "../components/ReadMore/ReadMore";
import {ru} from "../international/ru";
import withBaseFunc from "../hocs/withBaseFunc";
import React from "react";
import HomePageProps from "../types/mainPage";

const Home: React.FC<HomePageProps> = ({
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
                <title>Video Games Coaching Programm | Legionfarm.com</title>
                <meta name="description" content="Become a game coach with Legionfarm coaching program! Start earning by playing video games right now!" />
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
                <FirstScreen text={eng.FirstScreen} scrollToHandler={scrollToHandler} buttonClickHandler={buttonClickHandler} setShowPopup={setShowPopup} showPopup={showPopup} setPopupType={setPopupType} auth={auth}/>
                <Games text={eng.Games}/>
                <ProgramOverview text={eng.OverView} />
                <Calculator text={eng.Calculator} scrollToHandler={scrollToHandler}/>
                <Mission text={eng.Mission}/>
                <SelectPlan text={eng.SelectPlan} setScrollTo={setScrollTo} buttonClickHandler={buttonClickHandler}/>
                <GamersCollaborateWith text={eng.Gamers}/>
                <ListOfPros text={eng.ListOfPros}/>
                <FeatureInside text={eng.Inside}/>
                <HowItWorks text={eng.HowItWorks}/>
                <ReadMore text={eng.ReadMore}/>
                <TrustBlock text={eng.Reviews}/>
                <FAQ text={eng.FAQ}/>
            </main>

            <Footer text={eng.Footer}/>
            {showPopup && <div className='popupWrapper'>
                <SignUpPopup
                    text={ru.Popup}
                    setShowPopup={setShowPopup}
                    popupType={popupType}
                    setPopupType={setPopupType}/>
            </div>}
        </>
    )
}

export default withBaseFunc(Home);
