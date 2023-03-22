import React, {Fragment, useEffect, useState} from 'react';
import styles from './HowItWorks.module.scss'
import { CarouselProvider, Slide, Slider} from 'pure-react-carousel';
import HowItWorksItem from "./HowItWorksItem";
import 'pure-react-carousel/dist/react-carousel.es.css';

interface HowItWorksProps {
    text: {
        header: string,
        items: Array<{
            cardHeader: string,
            cardText: string,
        }>
    }
}

const HowItWorks: React.FC<HowItWorksProps> = ({text}) => {

    const [desktop, setDesktop] = useState(false)
    const [tablet, setTablet] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 1620){
            setDesktop(true)
        } if(window.innerWidth <= 1024){
            setTablet(true)
        }
    }, []);


    return (
        <div className={styles.howWrapper}>
            <h2 className={styles.howHeader}>{text.header}</h2>
            <div className={styles.sliderWrapper}>
                {!tablet ? (
                    <CarouselProvider
                        naturalSlideWidth={desktop ? 420 : 500}
                        naturalSlideHeight={500}
                        totalSlides={text.items.length}
                        visibleSlides={desktop ? 3.1 : 3.3}
                        lockOnWindowScroll
                        touchEnabled
                        isPlaying={true}

                    >
                        <Slider>
                            {text.items.map((item, index) =>
                                <Fragment key={item.cardHeader}>
                                    <Slide index={index}>
                                        <HowItWorksItem
                                            index={index + 1}
                                            header={item.cardHeader}
                                            text={item.cardText}/>
                                    </Slide>
                                </Fragment>)}
                        </Slider>
                    </CarouselProvider>
                ) : (
                    <div className={styles.itemsWrapper}>
                        {text.items.map((item, index) =>
                            <Fragment key={item.cardHeader}>
                                <HowItWorksItem
                                    index={index + 1}
                                    header={item.cardHeader}
                                    text={item.cardText}/>
                            </Fragment>)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HowItWorks;
