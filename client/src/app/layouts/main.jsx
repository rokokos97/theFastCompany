import React from "react";
import {Carousel, CarouselItem, Image} from "react-bootstrap";
const Main = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center"> The Fast Company </h1>
            <Carousel
                controls={false}
                fade
                interval={5000}
                variant="dark"
            >
                <CarouselItem >
                    <div className="d-flex justify-content-center flex-wrap">
                        <Image fluid src="https://robohash.org/set_set5/bgset_bg2/3.12418959?size=270x270" alt="Some face"/>
                        <Image fluid src="https://robohash.org/set_set5/bgset_bg2/3.13418959?size=270x270" alt="Some face"/>
                        <Image fluid src="https://robohash.org/set_set5/bgset_bg2/3.14418959?size=270x270" alt="Some face"/>
                        <Image fluid src="https://robohash.org/set_set5/bgset_bg2/3.15418959?size=270x270" alt="Some face"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="d-flex justify-content-center flex-wrap">
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.22418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.23418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.24418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.25418959?size=270x270" alt="Some face"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="d-flex justify-content-center flex-wrap">
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.2418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.3418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.4418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.5418959?size=270x270" alt="Some face"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="d-flex justify-content-center flex-wrap">
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.112418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.133418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.114418959?size=270x270" alt="Some face"/>
                        <Image src="https://robohash.org/set_set5/bgset_bg2/3.125418959?size=270x270" alt="Some face"/>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    );
};
export default Main;
