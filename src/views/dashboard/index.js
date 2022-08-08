import React, { useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../src/components/card'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import lay1 from '../../assets/images/layouts/1.png'
import lay5 from '../../assets/images/layouts/5.png'
import lay13 from '../../assets/images/layouts/13.png'
import lay16 from '../../assets/images/layouts/16.png'
import PavBhaji from "../../assets/images/layouts/Pavbhaji.jpg"
import lay40 from '../../assets/images/layouts/40.png'
import Coffee from "../../assets/images/layouts/coffee.png"
import Manchurian from "../../assets/images/layouts/manchurian.jpg"
import Sandwich from "../../assets/images/layouts/sandwich.jpg"
import FrenchFries from "../../assets/images/layouts/frenchfies.jpg"
import Pulaao from "../../assets/images/layouts/pulao.jpg"
import MisalPav from "../../assets/images/layouts/misalpav.jpg"
import SevPuri from "../../assets/images/layouts/sevpuri.jpg"
import Bhel from "../../assets/images/layouts/bhel.jpg"
import GarlicBread from "../../assets/images/layouts/garlicbread.jpg"
import Pasta from "../../assets/images/layouts/pasta.jpg"
import OreoShake from "../../assets/images/layouts/oreoshake.jpg"
import Noodles from "../../assets/images/layouts/noodles.jpg"
import CholaKulcha from "../../assets/images/layouts/cholakulcha.jpg"
import ColdCoffee from "../../assets/images/layouts/coldcoffee.jpg"
import Papad from "../../assets/images/layouts/papad.jpg"
import ButterMilk from "../../assets/images/layouts/buttermilk.jpg"
import ButterScotch from "../../assets/images/layouts/butterscothicecream.jpg"
import Pizza from "../../assets/images/layouts/35.png"
import Burger from "../../assets/images/layouts/8.png"

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


SwiperCore.use([Navigation]);


const Index = () => {

    const RestaurantItems = [
        {
            id: 0,
            name: "Pav Bhaaji",
            image: PavBhaji,
            price: 180,
            descrption: "Cooked in tomato gravy and served."
        },
        {
            id: 1,
            name: "Margherita Pizza",
            image: lay13,
            price: 375,
            descrption: "It is a simple pizza hailing from Naples."
        },
        {
            id: 2,
            name: "Manchurian",
            image: Manchurian,
            price: 120,
            descrption: "Made by roughly chopping and deep-frying."
        },
        {
            id: 3,
            name: "Sandwich",
            image: Sandwich,
            price: 60,
            descrption: " Consisting of vegetables, sliced cheese."
        },
        {
            id: 4,
            name: "Tawa Pulaao",
            image: Pulaao,
            price: 150,
            descrption: "Pulao is a rice dish, cooked in seasoned broth."
        },
        {
            id: 5,
            name: "Misal Pav",
            image: MisalPav,
            price: 129,
            descrption: "It consists of misal and pav."
        },
        {
            id: 6,
            name: "Sev Poori",
            image: SevPuri,
            price: 65,
            descrption: "An Indian cuisine snack and a type of chaat."
        },
        {
            id: 7,
            name: "Bombay Bhel",
            image: Bhel,
            price: 40,
            descrption: "The combination of puffed rice, papadis."
        },
        {
            id: 8,
            name: "Cheese Garlic Bread",
            image: GarlicBread,
            price: 119,
            descrption: "Bread topped with garlic and olive oil."
        },
        {
            id: 9,
            name: "Red Sauce Pasta",
            image: Pasta,
            price: 90,
            descrption: "A type of food made from a mixture of flour."
        },
        {
            id: 10,
            name: "Chocolate Oreo Shake",
            image: OreoShake,
            price: 150,
            descrption: "Made of Vanilla ice cream, Oreo cookies, milk."
        },
        {
            id: 11,
            name: "Hakka Noodles",
            image: Noodles,
            price: 105,
            descrption: "Boiled noodles with fried vegetable.s"
        },
        {
            id: 12,
            name: "Chola with Kulcha",
            image: CholaKulcha,
            price: 140,
            descrption: "It is made with white peas and mixed spices."
        },
        {
            id: 13,
            name: "Cold Coffee",
            image: ColdCoffee,
            price: 175,
            descrption: "An iced coffee is a cold version"
        },
        {
            id: 14,
            name: "Roasted Papad",
            image: Papad,
            price: 20,
            descrption: "Papad is a thin Indian wafer."
        },
        {
            id: 15,
            name: "Mushroom",
            image: lay16,
            price: 330,
            descrption: "It is made up of tomatoes and bread."
        },
        {
            id: 16,
            name: "ButterScotch Ice-cream",
            image: ButterScotch,
            price: 160,
            descrption: "Butterscotch is a type of soft-crack candy."
        },
        {
            id: 17,
            name: "Butter Milk",
            image: ButterMilk,
            price: 15,
            descrption: "Buttermilk is reminiscent of yogurt "
        },
        {
            id: 18,
            name: "French Fries",
            descrption: "French fries, also called chips, finger chips",
            image: FrenchFries,
            price: 20,
        },

    ]

    const MyCart = [
        {
            id: 0,
            name: "Cold Coffee",
            image: ColdCoffee,
            items: 2,
            price: 175
        },
        {
            id: 1,
            name: "Pav Bhaaji",
            image: PavBhaji,
            items: 1,
            price: 180
        },
        {
            id: 2,
            name: "Roasted Papad",
            image: Papad,
            items: 4,
            price: 80
        },
        {
            id: 3,
            name: "Butter-Milk",
            image: ButterMilk,
            items: 2,
            price: 30
        }
    ]

    const MenuCategory = [
        {
            id: 0,
            name: "All",
            image: lay1,
        },
        {
            id: 1,
            name: "Coffee",
            image: Coffee,
        },
        {
            id: 0,
            name: "Pizza",
            image: Pizza,
        },
        {
            id: 0,
            name: "Burger",
            image: Burger,
        },
        {
            id: 0,
            name: "HotDog",
            image: lay5,
        },

    ]
    useEffect(() => {
        if (typeof gsap !== typeof undefined) {
            if (typeof ScrollTrigger !== typeof undefined) {
                gsap.registerPlugin(ScrollTrigger);
            }

            const gsapAnimate = {
                onStart: (elem) => {
                    const option = {
                        opacity: 0,
                        scale: 1,
                        position: {
                            x: 0,
                            y: 0,
                        },
                        ease: "",
                        duration: 1,
                        delay: .4,
                        rotate: 0
                    }

                    option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0)

                    option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0)

                    option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0)

                    option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1)

                    option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0)

                    option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, .4)

                    option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5)

                    option.ease = gsapAnimate.validValue(elem.dataset.iqEase, '')

                    const setOption = { opacity: option.opacity, scale: option.scale, x: option.position.x, y: option.position.y, ease: option.ease, rotate: option.rotate, duration: option.duration, delay: option.delay }

                    if (typeof ScrollTrigger !== typeof undefined) {
                        if (elem.dataset.iqTrigger === 'scroll') {
                            const scrub = elem.dataset.iqScrollScrub === 'true' ? true : false

                            setOption.scrollTrigger = {
                                trigger: elem,
                                start: () => "top 95%",

                                scrub: scrub,
                                markers: false
                            }
                        }
                    }

                    gsap.from(elem, setOption)

                },

                validValue: (attr, defaultVal) => {
                    if (attr !== undefined && attr !== null) {
                        return attr
                    }
                    return defaultVal
                }
            }


            const gsapElem = document.querySelectorAll('[data-iq-gsap="onStart"]')

            Array.from(gsapElem, (elem) => {
                gsapAnimate.onStart(elem)
                return null
            })


            if (document.querySelectorAll('auth-login').length) {
                gsap.from('.first-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: .4 })
                gsap.from('.second-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: .6 })
                gsap.from('.third-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: .8 })
                gsap.from('.fourth-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: 1.2 })
                gsap.from('.fifth-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: 1.4 })
                gsap.from('.six-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: 1.6 })
                gsap.from('.seventh-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: 1.6, })
                gsap.from('.eight-img', { opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay: 1.8, })
            }
        }


    }, []);

    return (
        <>
            <Row>
                <Col md="12" lg="8">
                    <div className="card-transparent bg-transparent mb-5" >
                        <div className="card-header border-0  ">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>POS</h3>
                            </div>
                            <div className="input-group search-input mt-3">
                                <span className="input-group-text" id="search-input">
                                    <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                                <input type="search" className="form-control" placeholder="Search..." />
                            </div>
                            <Col xl="12" lg="8" className='mt-5'>
                                <Card>
                                    <Card.Header className="d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">User Information</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="new-user-info">
                                            <form>
                                                <div className="row">
                                                    <Form.Group className="col-md-6 form-group">
                                                        <Form.Label htmlFor="fname">First Name:</Form.Label>
                                                        <Form.Control type="text" id="fname" placeholder="First Name" />
                                                    </Form.Group>
                                                    <Form.Group className="col-md-6 form-group">
                                                        <Form.Label htmlFor="lname">Last Name:</Form.Label>
                                                        <Form.Control type="text" id="lname" placeholder="Last Name" />
                                                    </Form.Group>
                                                    <Form.Group className="col-md-6  form-group">
                                                        <Form.Label htmlFor="mobno">Mobile Number:</Form.Label>
                                                        <Form.Control type="text" id="mobno" placeholder="Mobile Number" />
                                                    </Form.Group>
                                                </div>
                                            </form>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <Card.Body>
                            <Swiper
                                slidesPerView={4}
                                loop={false}
                                spaceBetween={30}
                                className="d-slider2"
                                breakpoints={{
                                    320: { slidesPerView: 2 },
                                    550: { slidesPerView: 2 },
                                    991: { slidesPerView: 4 },
                                    1400: { slidesPerView: 6 }
                                }}>
                                {MenuCategory.map((i) => {
                                    return (
                                        <SwiperSlide>
                                            <Card className="category-menu">
                                                <Card.Body>
                                                    <div className="text-center iq-menu-category"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-position-y="-40"
                                                        data-iq-duration=".6"
                                                        data-iq-delay=".6"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none">
                                                        <img src={i.image} alt="header" className="img-fluid rounded-pill mb-3" style={{ width: 150, height: 110 }} />
                                                        <h6 className="heading-title fw-bolder fs-6 pb-4">{i.name}</h6>
                                                        <div className="category-icon pt-4">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="24" height="24" rx="12" fill="currentColor" />
                                                                <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    )
                                })}
                                <Col xl="12" lg="12" className="dish-card-horizontal mt-2">
                                    <Row className="row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-4">
                                        {RestaurantItems.map((i) => {
                                            return (
                                                <Col className='shadow-xl'>
                                                    <Card className="card-white dish-card profile-img mb-0 shadow-xl">
                                                        <div className="profile-img21">
                                                            <img
                                                                src={lay16}
                                                                className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                                alt="profileimage" />
                                                            <img
                                                                src={i.image}
                                                                className="img-fluid rounded-pill avatar-170 hover-image "
                                                                alt="profileimage"
                                                                data-iq-gsap="onStart"
                                                                data-iq-opacity="0"
                                                                data-iq-scale=".6"
                                                                data-iq-rotate="180"
                                                                data-iq-duration="1"
                                                                data-iq-delay="1"
                                                                data-iq-trigger="scroll"
                                                                data-iq-ease="none" />
                                                        </div>
                                                        <Card.Body className="menu-image">
                                                            <h6 className="heading-title fw-bolder mt-4 mb-0">{i.name}</h6>
                                                            <div className="card-rating stars-ratings">
                                                                <small>{i.descrption}</small>
                                                            </div>

                                                            <div className="d-flex justify-content-between mt-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="text-primary fw-bolder me-2">{i.price} Rs</span>
                                                                </div>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor" />
                                                                    <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor" />
                                                                    <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </Col>
                            </Swiper>
                        </Card.Body>
                    </div>
                </Col>
                <Col md="12" lg="4">
                    <Row>
                        <Col md="12" lg="12">
                            <Card
                                data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="0"
                                data-iq-duration=".6"
                                data-iq-delay="1.2"
                                data-iq-trigger="scroll"
                                data-iq-ease="none"
                            >
                                <div className="card-header">
                                    <h4 className="list-main">My Cart</h4>
                                </div>
                                <Card.Body>
                                    {MyCart.map((i) => {
                                        return (
                                            <div className="rounded-pill bg-soft-primary iq-my-cart">
                                                <div className="d-flex align-items-center justify-content-between profile-img4">
                                                    <div className="profile-img11">
                                                        <img src={lay13} className="img-fluid rounded-pill avatar-115 blur-shadow position-end" alt="img" />
                                                        <img src={i.image} className="img-fluid rounded-pill avatar-115" alt="img"
                                                            data-iq-gsap="onStart"
                                                            data-iq-opacity="0"
                                                            data-iq-scale=".6"
                                                            data-iq-rotate="180"
                                                            data-iq-duration="1"
                                                            data-iq-delay="1"
                                                            data-iq-trigger="scroll"
                                                            data-iq-ease="none"
                                                        />
                                                    </div>
                                                    <div className="d-flex align-items-center profile-content">
                                                        <div>
                                                            <h6 className="mb-1 heading-title fw-bolder" style={{ fontSize: 13 }}>{i.name}</h6>
                                                            <span className="d-flex align-items-center "><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="0.875" y="2.05469" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 0.875 2.05469)" fill="#EA6A12" />
                                                                <rect x="2.05469" y="9.125" width="1.66666" height="10" rx="0.833332" transform="rotate(-135 2.05469 9.125)" fill="#EA6A12" />
                                                            </svg><small className="text-dark ms-1">{i.items}</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="me-4 text-end">
                                                        <span className="mb-1">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.4" d="M19.6449 9.48924C19.6449 9.55724 19.112 16.298 18.8076 19.1349C18.6169 20.8758 17.4946 21.9318 15.8111 21.9618C14.5176 21.9908 13.2514 22.0008 12.0055 22.0008C10.6829 22.0008 9.38936 21.9908 8.1338 21.9618C6.50672 21.9228 5.38342 20.8458 5.20253 19.1349C4.88936 16.288 4.36613 9.55724 4.35641 9.48924C4.34668 9.28425 4.41281 9.08925 4.54703 8.93126C4.67929 8.78526 4.86991 8.69727 5.07026 8.69727H18.9408C19.1402 8.69727 19.3211 8.78526 19.464 8.93126C19.5973 9.08925 19.6644 9.28425 19.6449 9.48924" fill="#E60A0A" />
                                                                <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="#E60A0A" />
                                                            </svg>
                                                        </span>
                                                        <p className="mb-0 text-dark">Rs {i.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    <div className="text-center mt-5 b-2">
                                        <Link type="button" to="/special-pages/add-to-cart" className="btn btn-primary rounded-pill ml-0">Settle</Link>
                                        <Link type="button" to="/special-pages/add-to-cart" className="btn btn-primary rounded-pill mx-2">Submit</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12" lg="12">
                            <div className="position-relative">
                                <img src={lay40} alt="img-1" className="img-fluid img-user" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Index


