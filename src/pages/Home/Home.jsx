import React, { useEffect, useRef, useState } from "react";
import { Hero } from "../../components/organisms/Hero/Hero";
import { FlipCards } from "../../components/organisms/FlipCards/FlipCards";
import wallet from "../../assets/footer_icon_wallet.png";
import pay from "../../assets/apple_pay.jpg";
import cash from "../../assets/apple_cash.jpg";
import "./Home.scss";

export function Home() {
  const parallaxInnerRef = useRef(null);
  const getStartedRef = useRef(null);
  const footerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const parallaxInner = parallaxInnerRef.current;
    const getStarted = getStartedRef.current;
    const footer = footerRef.current;
    const top = footer.getBoundingClientRect().top;

    // Track the y position of the getStarted div
    let y = 0;

    const updatePosition = () => {
      // Set the limit of the movement of the getStarted div within the parallaxInner div
      const limit = parallaxInner.offsetHeight - getStarted.offsetHeight;

      // Get the relative position of the scroll within the parallaxInner div
      const scroll = window.scrollY - parallaxInner.offsetTop;

      // Calculate the new y position of the getStarted div
      y = (scroll / parallaxInner.offsetHeight) * limit;

      // Update the state with the current scroll position
      setScrollY(scroll);

      // Apply the new y position to the getStarted div
      getStarted.style.transform = `translateY(${y}px)`;

      //This is to stop the parallax effect
      if (scroll > parallaxInner.offsetHeight / 2) {
        getStarted.style.transform = `translateY(50vh)`;
      } else {
        getStarted.style.transform = `translateY(${y}px)`;
      }

      // Request the next animation frame
      requestAnimationFrame(updatePosition);
    };

    // Call updatePosition once to initialize the y position
    updatePosition();

    // Add event listener to track the movement of the scroll
    window.addEventListener("scroll", updatePosition);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div className="homepage-container">
      <Hero />
      <section className="after-hero">
        <h2>The simplicity of Apple. In a credit card.</h2>
        <p>
          With Apple Card, we completely reinvented the credit card. Your
          information lives on your iPhone, beautifully laid out and easy to
          understand. We eliminated fees1 and built tools to help you pay less
          interest, and you can apply in minutes to see if you are approved with
          no impact to your credit score.2 Advanced technologies like Face ID,
          Touch ID, and Apple Pay give you an enhanced level of privacy and
          security. And with every purchase you get Daily Cash back. Apple Card.
          It's everything a credit card should be.
        </p>
      </section>
      <FlipCards />
      <section className="parallax-container">
        <div ref={parallaxInnerRef} className="parallax-inner">
          <div
            ref={getStartedRef}
            style={{
              opacity: parallaxInnerRef.current
                ? scrollY / (parallaxInnerRef.current.offsetHeight / 2)
                : 0,
            }}
            className="get-started"
          >
            <div className="get-started-content">
              <img src={wallet} alt="apple wallet" />
              <h2>
                Get started <br /> with Apple Card.
              </h2>
              <p>
                Apply in minutes to see if you are approved with no impact to
                your credit score.*
              </p>
              <button>Apply now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-routers" ref={footerRef}>
        <div className="footer-card footer-1">
          <div>
            <h2><span>Wallet</span></h2>
            <p>
              All your credit and debit cards, transit cards, boarding
              passes,and more. All in one place.
            </p>
            <a>Learn more</a>
          </div>
          <div>
            <img src={wallet} alt="apple wallet" />
          </div>
        </div>
        <div className="footer-card footer-2">
          <div>
            <h2><span>Pay</span></h2>
            <p>
              The safer way to make secure, contactless purchases in stores and
              online.
            </p>
            <a>Learn more</a>
          </div>
          <div>
            <img src={pay} alt="apple pay" />
          </div>
        </div>
        <div className="footer-card footer-3">
          <div>
            <h2><span>Cash</span></h2>
            <p>
              Use it to send and receive money, and spend wherever Apple Pay is
              accepted.
            </p>
            <a>Learn more</a>
          </div>
          <div>
            <img src={cash} alt="apple cash" />
          </div>
        </div>
      </section>
    </div>
  );
}
