import { useRef } from "react";
import SectionTitle from "../../UI/section-title/setion-title.component";
import { NonfloatedCard } from "../../UI/card/card.component";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courses = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    return (
        <div className="bg-secondary py-5">
            <SectionTitle type="reversed">Popular Courses</SectionTitle>
            <div className="container mx-auto">
                {/* <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    <SwiperSlide>
                        <NonfloatedCard 
                            imageURL="https://iihtsrt.com/wp-content/uploads/2022/04/React.jpg"
                            courseName="Introduction to ReactJS"
                            courseInstructor="Mohammed Ahmed"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <NonfloatedCard 
                            imageURL="https://chriscourses.com/img/blog/redux/redux.jpg"
                            courseName="Redux in depth"
                            courseInstructor="Mohammed Ahmed"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <NonfloatedCard 
                            imageURL="https://cdn.exvar.com/wp-content/uploads/2022/03/27210938/Node.JS-and-Observability-1-1024x536-1.png"
                            courseName="NodeJS from zero to hero"
                            courseInstructor="Mohammed Ahmed"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <NonfloatedCard 
                            imageURL="https://iihtsrt.com/wp-content/uploads/2022/04/React.jpg"
                            courseName="Introduction to ReactJS"
                            courseInstructor="Mohammed Ahmed"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <NonfloatedCard 
                            imageURL="https://chriscourses.com/img/blog/redux/redux.jpg"
                            courseName="Redux in depth"
                            courseInstructor="Mohammed Ahmed"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <NonfloatedCard 
                            imageURL="https://cdn.exvar.com/wp-content/uploads/2022/03/27210938/Node.JS-and-Observability-1-1024x536-1.png"
                            courseName="NodeJS from zero to hero"
                            courseInstructor="Mohammed Ahmed"
                        />
                    </SwiperSlide>

                    <div ref={navigationPrevRef} className="absolute top-1/2">PREV</div>
                    <div ref={navigationNextRef}>NEXT</div>
                    
                </Swiper> */}

                <div className="flex justify-center flex-wrap">
                    <NonfloatedCard 
                        imageURL="https://iihtsrt.com/wp-content/uploads/2022/04/React.jpg"
                        courseName="Introduction to ReactJS"
                        courseInstructor="Mohammed Ahmed"
                        classname="mr-10 mb-10"
                    />
                
                    <NonfloatedCard 
                        imageURL="https://chriscourses.com/img/blog/redux/redux.jpg"
                        courseName="Redux in depth"
                        courseInstructor="Mohammed Ahmed"
                        classname="mr-10 mb-10"
                    />
                
                    <NonfloatedCard 
                        imageURL="https://cdn.exvar.com/wp-content/uploads/2022/03/27210938/Node.JS-and-Observability-1-1024x536-1.png"
                        courseName="NodeJS from zero to hero"
                        courseInstructor="Mohammed Ahmed"
                        classname="mr-10 mb-10"
                    />

                    <NonfloatedCard 
                        imageURL="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
                        courseName="MongoDB for Node developers"
                        courseInstructor="Mohammed Ahmed"
                        classname="mr-10 mb-10"
                    />
                
                    <NonfloatedCard 
                        imageURL="https://blog.dyma.fr/content/images/size/w750/2021/09/javascript1200x628.png"
                        courseName="Become a JS Ninja"
                        courseInstructor="Mohammed Ahmed"
                        classname="mr-10 mb-10"
                    />
                
                    <NonfloatedCard 
                        imageURL="https://frontendmasters.com/static-assets/learn/og-learning-path-angular.jpg"
                        courseName="Learn Angular"
                        courseInstructor="Mohammed Ahmed"
                        classname="mr-10 mb-10"
                    />
                </div>
            </div>
        </div>
    )
}

export default Courses;