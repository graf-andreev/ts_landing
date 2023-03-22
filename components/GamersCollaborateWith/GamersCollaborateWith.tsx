import React, {Fragment, useEffect, useState} from 'react';
import styles from './GamersCollaborateWith.module.scss';
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";
import CoachesItem from "./CoachesItem";
import VideoItem from "./VideoItem";

type Coaches = {
    photo: string,
    name: string,
    stream: string,
}

type Influencers = {
    photo: string,
    text: string,
    link: string,
    buttonText: string,
}

interface GamersCollaborateWithProps {
    text: {
        header: string,
        topTexts: Array<string>,
        watch: string,
        coaches: Coaches[]
        influencers: Influencers[],
        team: Influencers[],
    }
}

const GamersCollaborateWith: React.FC<GamersCollaborateWithProps> = ({text}) => {

    const [chosenBlock, setChosenBlock] = useState(0);
    const [proSliders, setProSliders] = useState(5);
    const [videoSliders, setVideoSliders] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    const activeBlockHandler = (index: number) => {
        setChosenBlock(index)
    }

    useEffect(() => {
        setProSliders(Number((window.innerWidth / 370).toFixed(1)));
        setVideoSliders(Number((window.innerWidth / 750).toFixed(1)));
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    }, []);


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.header}>{text.header}</h2>
            <div className={styles.checkers}>
                {text.topTexts.map((item, index) => <p className={index === chosenBlock ? styles.active : undefined} onClick={() => activeBlockHandler(index)} key={item}>{item}</p>)}
            </div>
            <div className={styles.gamersWrapper}>
                {chosenBlock === 0 && <CarouselProvider
                    naturalSlideWidth={isMobile ? 298 : 640}
                    naturalSlideHeight={isMobile ? 320 : 479}
                    totalSlides={text.team.length}
                    visibleSlides={isMobile ? 1.1 : videoSliders}
                    lockOnWindowScroll
                    touchEnabled
                >
                    <Slider>
                        {text.team.map((item, index) =>
                            <Fragment key={item.link}>
                                <Slide index={index}>
                                    <VideoItem
                                        text={item.text}
                                        photo={item.photo}
                                        link={item.link}
                                        buttonText={item.buttonText}
                                    />
                                </Slide>
                            </Fragment>)}
                    </Slider>
                    <div className={styles.buttonsWrapper}>
                        <ButtonBack className={styles.leftButton}> </ButtonBack>
                        <ButtonNext className={styles.rightButton}> </ButtonNext>
                    </div>
                </CarouselProvider>}
                {chosenBlock === 2 && <CarouselProvider
                    naturalSlideWidth={isMobile ? 298 : 640}
                    naturalSlideHeight={isMobile ? 320 : 479}
                    totalSlides={text.team.length}
                    visibleSlides={isMobile ? 1.1 : videoSliders}
                    lockOnWindowScroll
                    touchEnabled
                >
                    <Slider>
                        {text.influencers.map((item, index) =>
                            <Fragment key={item.text}>
                                <Slide index={index}>
                                    <VideoItem
                                        text={item.text}
                                        photo={item.photo}
                                        link={item.link}
                                        buttonText={item.buttonText}
                                    />
                                </Slide>
                            </Fragment>)}
                    </Slider>
                    <div className={styles.buttonsWrapper}>
                        <ButtonBack className={styles.leftButton}> </ButtonBack>
                        <ButtonNext className={styles.rightButton}> </ButtonNext>
                    </div>
                </CarouselProvider>}
                {chosenBlock === 1 && <CarouselProvider
                    naturalSlideWidth={310}
                    naturalSlideHeight={420}
                    totalSlides={text.coaches.length}
                    visibleSlides={proSliders}
                    lockOnWindowScroll
                    touchEnabled

                >
                    <Slider>
                        {text.coaches.map((item, index) =>
                            <Fragment key={item.name}>
                                <Slide index={index}>
                                    <CoachesItem
                                        name={item.name}
                                        photo={item.photo}
                                        link={item.stream}
                                        text={text.watch}
                                    />
                                </Slide>
                            </Fragment>)}
                    </Slider>
                    <div className={styles.buttonsWrapper}>
                        <ButtonBack className={styles.leftButton}> </ButtonBack>
                        <ButtonNext className={styles.rightButton}> </ButtonNext>
                    </div>
                </CarouselProvider>}

            </div>
        </div>
    );
};

export default GamersCollaborateWith;
