import React, { useState } from 'react';
import './styles/main.scss';
import myBikeLogo from './images/MyBiKE.svg';
import myBikeLogoBlack from './images/MyBiKE-black.svg';
import bike1Image from './images/bike1.png';
import bike2Image from './images/bike2.png';
import bike3Image from './images/bike3.png';
import classNames from 'classnames';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="page__body">
      <header id="home" className="header">
        <div className="header__top__wraper">
          <a href="/">
            <img className="header__logo" src={myBikeLogo} alt="my bike" />
          </a>
          <div>
            <a href="tel:+1-234-555-55-55" className="header__phIcon">
              {" "}
            </a>
            <a
              href="/"
              className="header__menuIcon"
              onClick={(event) => {
                event.preventDefault();
                setIsNavOpen(true);
              }}
            >

            </a>
          </div>
        </div>
        <span className="header__h1">Take the Streets</span>
        <nav
          className={classNames("header__nav", {
            "header__nav--open": isNavOpen,
          })}
        >
          <a href="#home">
            <img
              className="header__nav__logo"
              src={myBikeLogoBlack}
              alt="my bike"
            />
          </a>
          <span
            className="header__nav__closeBtn"
            onClick={(event) => {
              event.preventDefault();
              setIsNavOpen(false);
            }}
          ></span>
          <div className="header__nav__list">
            <a
              href="#home"
              className="header__nav__list__item"
              onClick={(event) => {
                setIsNavOpen(false);
              }}
            >
              home
            </a>
            <a
              href="#about"
              className="header__nav__list__item"
              onClick={(event) => {
                setIsNavOpen(false);
              }}
            >
              about us
            </a>
            <a
              href="#compare"
              className="header__nav__list__item"
              onClick={(event) => {
                setIsNavOpen(false);
              }}
            >
              compare bikes
            </a>
            <a
              href="#details"
              className="header__nav__list__item"
              onClick={(event) => {
                setIsNavOpen(false);
              }}
            >
              details
            </a>
            <a
              href="#contact"
              className="header__nav__list__item"
              onClick={(event) => {
                setIsNavOpen(false);
              }}
            >
              contacts
            </a>
            <a
              href="tel: +1 234 5555-55-55"
              className="header__nav__list__phone"
            >
              +1 234 5555-55-55
            </a>
            <a
              href="tel: +1 234 5555-55-55"
              className="header__nav__list__testRide"
            >
              Book a test ride
            </a>
          </div>
        </nav>
      </header>
      <main className="mainContent">
        <section id="about" className="moveFree">
          <span className="moveFree__heading">Move Free</span>
          <span className="moveFree__text">
            Shift your ride, not gears. Find the fastest way to move in the city
            as the bike adapts intuitively to power the speed you need.
          </span>
        </section>
        <section id="compare" className="compareBikes">
          <span className="compareBikes__title">Compare Bikes</span>
          <div className="compareBikes__cards">
            <div className="card">
              <img
                src={bike1Image}
                alt="bike"
                className="card__img img_hover"
              />
              <span className="card__title">Sporty 4</span>
              <span className="card__text">
                The iconic frame brought to a new performance height as a
                sporty, active ride.
              </span>
              <span className="card__price">$ 2 590</span>
            </div>
            <div className="card">
              <img
                src={bike2Image}
                alt="bike"
                className="card__img img_hover"
              />
              <span className="card__title">Ride in town ST</span>
              <span className="card__text">
                An open frame for an upright riding position as the most
                comfortable ride in town.
              </span>
              <span className="card__price">$ 2 590</span>
            </div>
            <div className="card">
              <img
                src={bike3Image}
                alt="bike"
                className="card__img img_hover"
              />
              <span className="card__title">Agile ride 3</span>
              <span className="card__text">
                The lightweight frame that has earned its street tread as a
                sleek, agile ride.
              </span>
              <span className="card__price">$ 2 090</span>
            </div>
          </div>
        </section>
        <section id="details" className="details">
          <span className="details__heading">The Details</span>
          <div>
            <div className="details__img__wrapper">
              <span className="details__img1 img_hover"></span>
              <span className="details__img2 img_hover"></span>
            </div>
            <div className="details__text__wrapper">
              <span className="details__heading-sm">Auto Unlock</span>
              <span className="details__text">
                The app senses when you're nearby to unlock automatically. GPS
                tracking so you know where your bike is and can track it
                anytime.
              </span>
            </div>
          </div>
          <div>
            <div className="details__img__wrapper">
              <span className="details__img3 img_hover"></span>
              <span className="details__img4 img_hover"></span>
            </div>
            <div className="details__text__wrapper">
              <span className="details__heading-sm">
                Range & Integrated lights
              </span>
              <span className="details__text">
                The removable battery has up to 70km battery autonomy and weighs
                only 2.4 kg. Lights integrated into the frame give you always-on
                visibility day and night.
              </span>
            </div>
          </div>
          <div>
            <div className="details__img__wrapper">
              <span className="details__img5 img_hover"></span>
              <span className="details__img6 img_hover"></span>
            </div>
            <div className="details__text__wrapper">
              <span className="details__heading-sm">
                Hydraulic disc brakes & Lightweight
              </span>
              <span className="details__text">
                Brakes with total stopping power the second you make contact.
                The removable battery has up to 70km battery autonomy and weighs
                only 2.4 kg. Lights integrated into the frame give you always-on
                visibility day and night.
              </span>
            </div>
          </div>
          <a href="#details" className="details__btn">
            Explore
          </a>
        </section>
        <section className="contact" id='contact'>
          <span className="contact__heading">Contact us</span>
          <div className="contact__wrapper">
            <div>
              <form
                action="https://formspree.io/f/{YOUR_FORMSPREE_ID}"
                method="POST"
                className="contact__form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact__form__input"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact__form__input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="contact__form__textarea"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className="contact__form__btn">
                  Submit
                </button>
              </form>
            </div>
            <div className="contact__info">
              <span>Phone: +1 234 5555-55-55</span>
              <span>Email: info@mybike.com</span>
              <span>Address: 123 Bike Street, City, Country</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <span className="footer__logo"></span>
          <div>
            <a href="/" className="footer__menuIcon">
              {" "}
            </a>
            <a href="/" className="footer__upIcon">
              {" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
