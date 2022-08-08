import React,{useEffect} from 'react'
import { Row,Col,Tab,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from '../../../src/components/card'

import res01 from '../../assets/images/restaurant/01.png'
import res02 from '../../assets/images/restaurant/02.png'
import res03 from '../../assets/images/restaurant/03.png'
import res04 from '../../assets/images/restaurant/04.png'
import res05 from '../../assets/images/restaurant/05.png'
import res06 from '../../assets/images/restaurant/06.png'
import res07 from '../../assets/images/restaurant/07.png'
import res09 from '../../assets/images/restaurant/09.png'
import res10 from '../../assets/images/restaurant/10.png'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Restaurant = () => {
    useEffect(() => {
        if(typeof gsap !== typeof undefined) {
            if (typeof ScrollTrigger !== typeof undefined) {
              gsap.registerPlugin(ScrollTrigger);
            }
        
            const gsapAnimate = {
              onStart : (elem) => {
                const option = {
                  opacity: 0,
                  scale: 1,
                  position: {
                    x: 0,
                    y:0,
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
        
                const setOption = {opacity: option.opacity, scale: option.scale, x: option.position.x, y: option.position.y, ease: option.ease, rotate: option.rotate, duration: option.duration, delay: option.delay}
        
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
        
            
            
            if(document.querySelectorAll('auth-login').length) {
              gsap.from('.first-img', {opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay:.4})
              gsap.from('.second-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:.6})
              gsap.from('.third-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:.8})
              gsap.from('.fourth-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.2})
              gsap.from('.fifth-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.4})
              gsap.from('.six-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.6})
              gsap.from('.seventh-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.6,})
              gsap.from('.eight-img', { opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1, delay:1.8,})
            }
        }
        
        
    },[]); 
    return (
        <>
           <Row>
                <Col lg="8">
                    <div className="mb-3 card" data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay=".4"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                        <Card.Body>
                            <Link to="#" className="">Home /</Link>
                            <Link to="#" className=""> India /</Link>
                            <Link to="#" className=""> Irish Restaurants</Link>
                            <Tab.Container  defaultActiveKey="first">
                            <div className="mt-2 mb-3">
                                <Nav  as="ul" className="nav-tabs mb-4 nav-justified" id="myTabs" role="tablist">
                                    <Nav.Item as="li" role="presentation">
                                        <Nav.Link href="#delivery" eventKey="first" id="delivery-tab" data-bs-toggle="tab" data-bs-target="#delivery" role="tab" aria-selected="true">
                                            <div className="d-flex align-items-center mb-3">
                                                <svg className="bg-primary rounded-circle me-3" width="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M55.2727 57.875C57.3855 57.875 59.0909 56.0325 59.0909 53.75C59.0909 51.4675 57.3855 49.625 55.2727 49.625C53.16 49.625 51.4545 51.4675 51.4545 53.75C51.4545 56.0325 53.16 57.875 55.2727 57.875ZM59.0909 33.125H52.7273V40H64.08L59.0909 33.125ZM24.7273 57.875C26.84 57.875 28.5455 56.0325 28.5455 53.75C28.5455 51.4675 26.84 49.625 24.7273 49.625C22.6145 49.625 20.9091 51.4675 20.9091 53.75C20.9091 56.0325 22.6145 57.875 24.7273 57.875ZM60.3636 29L68 40V53.75H62.9091C62.9091 58.315 59.4982 62 55.2727 62C51.0473 62 47.6364 58.315 47.6364 53.75H32.3636C32.3636 58.315 28.9527 62 24.7273 62C20.5018 62 17.0909 58.315 17.0909 53.75H12V23.5C12 20.4475 14.2655 18 17.0909 18H52.7273V29H60.3636ZM17.0909 23.5V48.25H19.0255C20.4255 46.5725 22.4618 45.5 24.7273 45.5C26.9927 45.5 29.0291 46.5725 30.4291 48.25H47.6364V23.5H17.0909ZM34.9091 26.25L43.8182 35.875L34.9091 45.5V38.625H22.1818V33.125H34.9091V26.25Z" fill="white"/>
                                                </svg>
                                                <span className="text-dark">Delivery</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" role="presentation">
                                        <Nav.Link href="#dining" eventKey="second" id="dining-tab" data-bs-toggle="tab" data-bs-target="#dining" role="tab" aria-selected="false">
                                            <div className="d-flex align-items-center mb-3">
                                                <svg className="bg-primary rounded-circle me-3" width="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M46.875 25C43.45 25 40.625 28.8 40.625 33.5C40.625 37.2 42.375 40.275 44.8 41.45L45 41.55V57.5H48.75V41.55L48.95 41.475C51.375 40.3 53.125 37.225 53.125 33.525C53.125 28.825 50.325 25 46.875 25ZM36.25 25C35.575 25 35 25.55 35 26.25V32.5H33.125V26.25C33.125 25.55 32.575 25 31.875 25C31.175 25 30.625 25.55 30.625 26.25V32.5H28.75V26.25C28.75 25.55 28.2 25 27.5 25C26.8 25 26.25 25.55 26.25 26.25V35.75C26.25 38.075 27.85 40.025 30 40.575V57.5H33.75V40.575C35.9 40.025 37.5 38.075 37.5 35.75V26.25C37.5 25.55 36.95 25 36.25 25ZM60 20H20V60H60V20ZM60 15C62.75 15 65 17.25 65 20V60C65 62.75 62.75 65 60 65H20C17.25 65 15 62.75 15 60V20C15 17.25 17.25 15 20 15H60Z" fill="white"/>
                                                </svg>
                                                <span className="text-dark">Dining Out</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" role="presentation">
                                        <Nav.Link href="#nightlife" eventKey="third" id="nightlife-tab" data-bs-toggle="tab" data-bs-target="#nightlife" role="tab" aria-selected="false">
                                            <div className="d-flex align-items-center mb-3">
                                                <svg className="bg-primary rounded-circle me-3" width="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.7059 52.5C29.7059 53.2639 29.0441 53.8889 28.2353 53.8889C27.4265 53.8889 26.7647 53.2639 26.7647 52.5V35.8333C26.7647 35.0694 27.4265 34.4444 28.2353 34.4444C29.0441 34.4444 29.7059 35.0694 29.7059 35.8333V52.5ZM35.5882 52.5C35.5882 53.2639 34.9265 53.8889 34.1176 53.8889C33.3088 53.8889 32.6471 53.2639 32.6471 52.5V35.8333C32.6471 35.0694 33.3088 34.4444 34.1176 34.4444C34.9265 34.4444 35.5882 35.0694 35.5882 35.8333V52.5ZM41.4706 52.5C41.4706 53.2639 40.8088 53.8889 40 53.8889C39.1912 53.8889 38.5294 53.2639 38.5294 52.5V35.8333C38.5294 35.0694 39.1912 34.4444 40 34.4444C40.8088 34.4444 41.4706 35.0694 41.4706 35.8333V52.5ZM54.7059 23.3333H53.2353V20.5556C53.2353 19.0821 52.6155 17.6691 51.5124 16.6272C50.4092 15.5853 48.913 15 47.3529 15H20.8824C19.3223 15 17.8261 15.5853 16.7229 16.6272C15.6197 17.6691 15 19.0821 15 20.5556V56.6667C15 61.2667 18.9529 65 23.8235 65H44.4118C49.2824 65 53.2353 61.2667 53.2353 56.6667H54.7059C60.3824 56.6667 65 52.3056 65 46.9444V33.0556C65 27.6944 60.3824 23.3333 54.7059 23.3333ZM20.8824 20.5556H47.3529V23.3333H34.2824L33.9353 24.2556C33.4529 25.5278 31.9853 26.2833 30.65 26.0556L29.6265 25.8944L29.1176 26.7472C28.7383 27.3921 28.1844 27.9302 27.5126 28.3065C26.8408 28.6828 26.0752 28.8838 25.2941 28.8889C22.8618 28.8889 20.8824 27.0194 20.8824 24.7222V20.5556ZM47.3529 56.6667C47.3529 57.4034 47.0431 58.1099 46.4915 58.6309C45.9399 59.1518 45.1918 59.4444 44.4118 59.4444H23.8235C23.0435 59.4444 22.2954 59.1518 21.7438 58.6309C21.1922 58.1099 20.8824 57.4034 20.8824 56.6667V30.25C22.1147 31.1306 23.6353 31.6667 25.2941 31.6667C27.6 31.6667 29.7676 30.6222 31.1441 28.8889C33.2853 28.8889 35.2118 27.8028 36.25 26.1111H47.3529V56.6667ZM59.1176 46.9444C59.1176 49.2417 57.1382 51.1111 54.7059 51.1111H50.2941V28.8889H54.7059C57.1382 28.8889 59.1176 30.7583 59.1176 33.0556V46.9444Z" fill="white"/>
                                                </svg>
                                                <span className="text-dark">NightLife</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" role="presentation">
                                        <Nav.Link href="#nutririon" eventKey="fourth" className="nav-link" id="nutririon-tab" data-bs-toggle="tab" data-bs-target="#nutririon" role="tab" aria-selected="false">
                                            <div className="d-flex align-items-center mb-3">
                                                <svg className="bg-primary rounded-circle me-3" width="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M49.8259 65H32.1741C28.7694 65 26 62.6596 26 59.7804V36.9218C26 35.6059 27.4923 32.545 29.9424 27.6606C31.3607 24.8471 33.2899 20.9966 33.3101 20.2196C33.3101 19.8311 32.6077 19.1168 32.1338 18.6437C31.3339 17.8385 30.5071 17.002 31.0246 16.0496C31.5221 15.1285 32.8866 15 34.2982 15H47.685C49.4663 15.0125 50.7434 15.2068 51.2241 16.1091C51.7215 17.0647 50.8644 17.9168 50.1082 18.6719C49.641 19.1325 48.9386 19.828 48.9386 20.2165C48.9453 20.9997 50.8275 24.8972 52.2155 27.7389C54.5716 32.5794 56 35.6153 56 36.9187V59.7772C56 62.6596 53.2238 65 49.8259 65ZM34.3856 18.1832C35.1217 18.9413 35.9081 20.016 35.9081 21.1251C35.9081 22.2122 34.8192 24.6121 32.6648 28.9764C31.1557 32.0186 29.1055 36.1793 29.1055 37.1223V59.1882C29.1055 60.8581 30.702 62.2147 32.6514 62.2147H49.3318C51.2946 62.2147 52.8877 60.8581 52.8877 59.1882V37.1223C52.8877 36.1793 50.9149 32.0499 49.4663 29.0391C47.4363 24.775 46.0683 22.206 46.0683 21.1094C46.0683 19.9878 47.1069 18.9507 47.853 18.1957C47.9068 18.1362 47.5976 17.9826 47.2917 17.9826H34.6679C34.4898 17.9826 34.3285 18.1205 34.3856 18.1832Z" fill="white"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M49.2393 55.94C49.2393 58.1363 47.4882 58.719 45.3271 58.719H36.7096C34.5485 58.719 32.8008 58.1363 32.8008 55.94V35.4061C32.8008 33.2099 34.9182 40.2122 39.4723 36.8912C44.0298 33.5827 49.2393 33.2099 49.2393 35.4061V55.94Z" fill="white"/>
                                                </svg>
                                                <span className="text-dark">Nutririon</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <div className="mt-3 iq-fetch">
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Filters</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Rating: 4.0+</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Safe and Hygienic</button>
                                <button type="button" className="btn btn-outline-primary rounded-1 iq-fetch-details">Pure Veg</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Delivery Time</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Great Offers</button>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <div className="mt-3 iq-fetch">
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Filters</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Rating: 4.0+</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Safe and Hygienic</button>
                                <button type="button" className="btn btn-outline-primary rounded-1 iq-fetch-details">Pure Veg</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Delivery Time</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Great Offers</button>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <div className="mt-3 iq-fetch">
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Filters</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Rating: 4.0+</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Safe and Hygienic</button>
                                <button type="button" className="btn btn-outline-primary rounded-1 iq-fetch-details">Pure Veg</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Delivery Time</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Great Offers</button>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <div className="mt-3 iq-fetch">
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Filters</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Rating: 4.0+</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Safe and Hygienic</button>
                                <button type="button" className="btn btn-outline-primary rounded-1 iq-fetch-details">Pure Veg</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Delivery Time</button>
                                <button type="button" className="btn btn-outline-secondary rounded-1 iq-fetch-details">Great Offers</button>
                            </div>
                            </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </div>
                </Col>
                <Col lg="4" className="mt-5">
                    <div className="dish-card profile-img3 card"data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay=".5"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                        <Card.Body>
                            <div className="text-center ">
                                <div className="profile-img40 ">
                                    <img src={res01} className="img-fluid rounded-pill" alt="profile-img"/>
                                </div>
                                <div className="profile-img52 ">
                                    <h2 className="mb-2 profile-img53">50 % off </h2>
                                    <p className="mb-0">The full price of burgers</p>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <div data-iq-gsap="onStart" className="card"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay=".6"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                        <Card.Body>
                            <div className="d-flex justify-content-between pb-3 ">
                                <div>
                                    <div className="heading-title">
                                        <h4>Burger</h4>
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22826 17.4264L6.41543 25.2763C6.35929 25.514 6.37615 25.7631 6.46379 25.9911C6.55142 26.2191 6.70578 26.4153 6.90668 26.5542C7.10759 26.6931 7.34571 26.7682 7.58994 26.7696C7.83418 26.7711 8.07317 26.6988 8.27571 26.5623L14.9005 22.1458L21.5252 26.5623C21.7325 26.6999 21.9769 26.7708 22.2256 26.7653C22.4743 26.7599 22.7153 26.6784 22.9163 26.5318C23.1174 26.3853 23.2687 26.1807 23.3499 25.9456C23.4312 25.7105 23.4385 25.4561 23.3709 25.2167L21.1456 17.43L26.6644 12.4636C26.8412 12.3045 26.9674 12.097 27.0275 11.8668C27.0876 11.6367 27.0789 11.394 27.0025 11.1688C26.9261 10.9435 26.7854 10.7456 26.5977 10.5995C26.4101 10.4533 26.1837 10.3654 25.9466 10.3466L19.0104 9.79424L16.0088 3.15003C15.9131 2.93608 15.7576 2.75441 15.5609 2.62693C15.3642 2.49946 15.1348 2.43163 14.9005 2.43163C14.6661 2.43163 14.4367 2.49946 14.24 2.62693C14.0434 2.75441 13.8878 2.93608 13.7921 3.15003L10.7906 9.79424L3.85435 10.3454C3.6213 10.3639 3.39851 10.4491 3.21262 10.5908C3.02674 10.7326 2.88563 10.9249 2.80618 11.1448C2.72673 11.3646 2.71231 11.6027 2.76463 11.8306C2.81696 12.0584 2.93382 12.2664 3.10123 12.4295L8.22826 17.4264ZM11.6994 12.1631C11.9166 12.146 12.1251 12.0708 12.3032 11.9453C12.4813 11.8199 12.6224 11.6488 12.7117 11.4501L14.9005 6.60658L17.0892 11.4501C17.1785 11.6488 17.3196 11.8199 17.4977 11.9453C17.6758 12.0708 17.8843 12.146 18.1015 12.1631L22.9341 12.5463L18.9544 16.1282C18.6089 16.4397 18.4714 16.919 18.5979 17.3668L20.1224 22.7019L15.5769 19.6711C15.3774 19.5372 15.1426 19.4657 14.9023 19.4657C14.662 19.4657 14.4272 19.5372 14.2276 19.6711L9.47778 22.8381L10.7553 17.3072C10.8021 17.1037 10.7958 16.8917 10.737 16.6914C10.6782 16.4911 10.5689 16.3093 10.4195 16.1635L6.72325 12.5597L11.6994 12.1631Z" fill="#EA6A12"></path>
                                        </svg>
                                        <span className="text-dark me-4">4.6</span>
                                        <span className="badge bg-soft-primary text-dark p-2">Free Delivery</span>
                                    </div>
                                    <p>Cafe, Healthy food, Bevarages, Salad, Desserts<br/>
                                        Hill Road, Bandra west, Mumbai
                                    </p>
                                    <span className="text-dark">9.30AM - 11.30PM<br/>
                                        (Today)
                                    </span >
                                </div>
                                <img src={res02} className="img-fluid rounded avatar-160" alt="profile-img"/>
                            </div>
                            <div className="iq-share-btn">
                                <button type="button" className="btn btn-primary rounded-pill mt-3 me-2">
                                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>    
                                Add review</button>
                                <button type="button" className="btn bg-white rounded-pill mt-3 me-2 share-btn-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>   
                                Direction</button>
                                <button type="button" className="btn bg-white rounded-pill mt-3 me-2 share-btn-white">
                                <svg width="20px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.7381 6.15344C19.7381 3.40256 17.8574 2.2998 15.1496 2.2998H8.7907C6.16614 2.2998 4.19922 3.32737 4.19922 5.96998V20.6938C4.19922 21.4196 4.98017 21.8767 5.61275 21.5219L11.9947 17.9419L18.3215 21.5158C18.9551 21.8727 19.7381 21.4156 19.7381 20.6888V6.15344Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.26953 9.02762H15.5878" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Bookmark</button>
                                <button type="button" className="btn bg-white rounded-pill mt-3 share-btn-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Share</button>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="card" data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay=".7"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                        <Card.Body>
                            <div className="d-flex justify-content-between pb-3 ">
                                <div>
                                    <div className="heading-title">
                                        <h4>Pizza</h4>
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="currentColor"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z" fill="#EA6A12"></path>
                                        </svg>
                                        <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22826 17.4264L6.41543 25.2763C6.35929 25.514 6.37615 25.7631 6.46379 25.9911C6.55142 26.2191 6.70578 26.4153 6.90668 26.5542C7.10759 26.6931 7.34571 26.7682 7.58994 26.7696C7.83418 26.7711 8.07317 26.6988 8.27571 26.5623L14.9005 22.1458L21.5252 26.5623C21.7325 26.6999 21.9769 26.7708 22.2256 26.7653C22.4743 26.7599 22.7153 26.6784 22.9163 26.5318C23.1174 26.3853 23.2687 26.1807 23.3499 25.9456C23.4312 25.7105 23.4385 25.4561 23.3709 25.2167L21.1456 17.43L26.6644 12.4636C26.8412 12.3045 26.9674 12.097 27.0275 11.8668C27.0876 11.6367 27.0789 11.394 27.0025 11.1688C26.9261 10.9435 26.7854 10.7456 26.5977 10.5995C26.4101 10.4533 26.1837 10.3654 25.9466 10.3466L19.0104 9.79424L16.0088 3.15003C15.9131 2.93608 15.7576 2.75441 15.5609 2.62693C15.3642 2.49946 15.1348 2.43163 14.9005 2.43163C14.6661 2.43163 14.4367 2.49946 14.24 2.62693C14.0434 2.75441 13.8878 2.93608 13.7921 3.15003L10.7906 9.79424L3.85435 10.3454C3.6213 10.3639 3.39851 10.4491 3.21262 10.5908C3.02674 10.7326 2.88563 10.9249 2.80618 11.1448C2.72673 11.3646 2.71231 11.6027 2.76463 11.8306C2.81696 12.0584 2.93382 12.2664 3.10123 12.4295L8.22826 17.4264ZM11.6994 12.1631C11.9166 12.146 12.1251 12.0708 12.3032 11.9453C12.4813 11.8199 12.6224 11.6488 12.7117 11.4501L14.9005 6.60658L17.0892 11.4501C17.1785 11.6488 17.3196 11.8199 17.4977 11.9453C17.6758 12.0708 17.8843 12.146 18.1015 12.1631L22.9341 12.5463L18.9544 16.1282C18.6089 16.4397 18.4714 16.919 18.5979 17.3668L20.1224 22.7019L15.5769 19.6711C15.3774 19.5372 15.1426 19.4657 14.9023 19.4657C14.662 19.4657 14.4272 19.5372 14.2276 19.6711L9.47778 22.8381L10.7553 17.3072C10.8021 17.1037 10.7958 16.8917 10.737 16.6914C10.6782 16.4911 10.5689 16.3093 10.4195 16.1635L6.72325 12.5597L11.6994 12.1631Z" fill="#EA6A12"></path>
                                        </svg>
                                        <span className="text-dark me-4">4.6</span>
                                        <span className="badge bg-soft-primary text-dark p-2">Free Delivery</span>
                                    </div>
                                    <p>Cafe, Healthy food, Bevarages, Salad, Desserts<br/>
                                        Hill Road, Bandra west, Mumbai
                                    </p>
                                    <span className="text-dark">9.30AM - 11.30PM<br/>
                                        (Today)
                                    </span >
                                </div>
                                <img src={res03} className="img-fluid rounded avatar-160" alt="profile-img"/>
                            </div>
                            <div className="iq-share-btn">
                                <button type="button" className="btn btn-primary rounded-pill mt-3 me-2">
                                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>    
                                Add review</button>
                                <button type="button" className="btn bg-white rounded-pill mt-3 me-2 share-btn-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>    
                                    Direction
                                </button>
                                <button type="button" className="btn bg-white rounded-pill mt-3 me-2 share-btn-white">
                                <svg width="20px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.7381 6.15344C19.7381 3.40256 17.8574 2.2998 15.1496 2.2998H8.7907C6.16614 2.2998 4.19922 3.32737 4.19922 5.96998V20.6938C4.19922 21.4196 4.98017 21.8767 5.61275 21.5219L11.9947 17.9419L18.3215 21.5158C18.9551 21.8727 19.7381 21.4156 19.7381 20.6888V6.15344Z" stroke="#EA6A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.26953 9.02762H15.5878" stroke="#EA6A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Bookmark</button>
                                <button type="button" className="btn bg-white rounded-pill mt-3  share-btn-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Share</button>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            <div className="row">
                <Col lg="3">
                    <div className="card" data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay=".7"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                        <div className="card-header">
                            <div className="header-title">
                                <h4 className="card-title">Our Specials</h4>
                            </div>
                        </div>
                        <Card.Body className="py-0">
                            <ul className="list-inline list-main iq-special-product">
                                <li className="py-3 d-flex align-items-center ">
                                    <img src={res04} className="img-fluid rounded-circle avatar-45" alt="profile-img"/>
                                    <div className="ms-3">
                                        <h5 className="heading-title fw-bolder">Pizza</h5>
                                        <p className="mb-0">345+ options</p>
                                    </div>
                                </li>
                                <li className="py-3 d-flex align-items-center">
                                <img src={res05} className="img-fluid rounded-circle avatar-45" alt="profile-img"/>
                                <div className="ms-3">
                                    <h5 className="heading-title fw-bolder">Burger</h5>
                                    <p className="mb-0">260+ options</p>
                                </div>
                                </li>
                                <li className="py-3 d-flex align-items-center">
                                <img src={res06} className="img-fluid rounded-circle avatar-45" alt="profile-img"/>
                                <div className="ms-3">
                                    <h5 className="heading-title fw-bolder">Pasta</h5>
                                    <p className="mb-0">250+ options</p>
                                </div>
                                </li>
                                <li className="py-3 d-flex align-items-center">
                                <img src={res07} className="img-fluid rounded-circle avatar-45" alt="profile-img"/>
                                <div className="ms-3">
                                    <h5 className="heading-title fw-bolder">Deserts</h5>
                                    <p className="mb-0">250+ options</p>
                                </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </div>
                </Col>
                <Col lg="5">
                    <div className="card" data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay=".8"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                        <div className="card-header">
                            <div className="header-title">
                                <h4 className="card-title">Other Branches</h4>
                            </div>
                        </div>
                        <Card.Body className="iq-other-branch">
                            <div className="d-flex iq-branch justify-content-between pb-3">
                                <div className="text-dark">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>1901 Thornridge Cir. Shilloh, Hawelli 81063</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                        </svg>
                                        <Link to="#">(704)556-0127</Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <small className="text-dark ms-1">4.5</small>
                                </div>
                            </div>
                            <div className="d-flex iq-branch justify-content-between pb-3 pt-3">
                                <div className="text-dark">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>1901 Thornridge Cir. Shilloh, Hawelli 81063</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                        </svg>
                                        <Link to="#">(704)556-0127</Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <small className="text-dark ms-1">4.5</small>
                                </div>
                            </div>
                            <div className="d-flex iq-branch justify-content-between pb-3 pt-3">
                                <div className="text-dark">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>1901 Thornridge Cir. Shilloh, Hawelli 81063</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                        </svg>
                                        <Link to="#">(704)556-0127</Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <small className="text-dark ms-1">4.5</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between pt-3">
                                <div className="text-dark">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>1901 Thornridge Cir. Shilloh, Hawelli 81063</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                        </svg>
                                        <Link to="#">(704)556-0127</Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="orange" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <small className="text-dark ms-1">4.5</small>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="card"
                        data-iq-gsap="onStart"
                        data-iq-opacity="0"
                        data-iq-position-y="-40"
                        data-iq-duration=".6"
                        data-iq-delay=".9"
                        data-iq-trigger="scroll"
                        data-iq-ease="none">
                        <div className="card-header">
                            <div className="header-title">
                                <h4 className="card-title">Blog</h4>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="iq-other-branch">
                                <div className="iq-branch pb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <img src={res09} className="img-fluid rounded-circle avatar-40 me-2" alt=""/>
                                        <div className="media-support-info">
                                            <h6 className="mb-0 heading-title fw-bolder">Jane Cooper</h6>
                                        </div>
                                    </div>
                                    <div className="media-support-body">
                                        <p className=" text-ellipsis short-3">           
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                        <Link to="#" className="">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="d-flex align-items-center mb-2">
                                <img src={res10} className="img-fluid rounded-circle avatar-40 me-2" alt=""/>
                                <div className="media-support-info">
                                    <h6 className="mb-0 heading-title fw-bolder">Guy Hawkins</h6>
                                </div>
                                </div>
                                <div className="media-support-body">
                            <p  className=" text-ellipsis short-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                <Link to="#" className="">Read More</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
            </div>
        </>
    )
}

export default Restaurant ;