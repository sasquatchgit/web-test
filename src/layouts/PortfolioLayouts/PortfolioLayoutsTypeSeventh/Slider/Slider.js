import React, { useEffect } from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';
import Oval from "../../../../components/Frame/Frame";
import { ChevronLeft, ChevronRight } from "../../../../components/Icons/Icons";

const Slider = (props) => {
    useEffect(() => {
        const portfolioSeventhSlider = new Swiper(`.${classes.swiperContainer}`, {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
            grabCursor: true,
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    initialSlide: 1,
                    centeredSlides: true,
                },
            },
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
        });

        return () => {
            if (portfolioSeventhSlider) {
                portfolioSeventhSlider.destroy();
            }
        };
    }, []);

    return (
        <div className={`${classes.slider}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.swiperContainer}>
                <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                        {props.array.map((el,index)=>{
                            return(
                                <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                    {el}
                                </div>
                            )
                        })}
                    </div>
                <div className={`swiper-button-next ${classes.swiperButtonNext}`}>
                        <Oval
                            variant={"small"}
                        >
                            <ChevronRight/>
                        </Oval>
                    </div>
                <div className={`swiper-button-prev ${classes.swiperButtonPrev}`}>
                        <Oval
                            variant={"small"}
                        >
                            <ChevronLeft/>
                        </Oval>
                    </div>
                </div>
            </div>
    );
};

export default Slider;