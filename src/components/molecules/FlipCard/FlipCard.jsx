import { useEffect, useRef, useState } from "react";
import "./FlipCard.scss";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import iphoneHardware from "../../../assets/iphone_hardware.png";
import iphoneScreen from "../../../assets/iphone_screen.jpg";


export function FlipCard({
  fullTile = false,
  halfTile = false,
  titleFront,
  descriptionFront,
  customClass,
  titleBack,
  descriptionBack,
  backgroundContent,
  parentCustomClass
}) {
  const ref = useRef(null);
  const [flipCard, setFlipCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log(entry.isIntersecting);
          observer.unobserve(ref.current);
        }
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <>
      <div
        className={`
          back-card-overlay
          ${flipCard ? "fade-in" : "fade-out"}
        `}
        onClick={() => setFlipCard(false)}
      />
      <div
          className={`
          card-container
          ${isVisible && "show-card"}
          ${fullTile && "full-tile"}
          ${halfTile && "half-tile"}
          ${flipCard ? "test" : ""}
          ${parentCustomClass}
        `}
        ref={ref}
        >
        {isVisible &&
          <div
            className={`
            card-inner
            ${flipCard ? "flip" : ""}
            ${customClass}
          `}
          >
            <div
              className={`
              card-front
            `}
            >
              <h2>{titleFront}</h2>
              <p>{descriptionFront}</p>

              <button
                className="card-front-btn"
                onClick={() => setFlipCard(true)}
              >
                <div className="plus-icon">
                  <FiPlus />
                </div>
              </button>

              <div className="card-front-bg">{backgroundContent}</div>

              {/* <div className="card-front-img"></div> */}
            </div>

            <div
              className={`
              card-back
            `}
            >
              <div className="back-text">
                <h2>{titleBack}</h2>
                <p>{descriptionBack}</p>
              </div>

              {fullTile &&
                <div className="back-image">
                  <img className="phone-frame" src={iphoneHardware} alt="iphone frame" />
                </div>
              }

              <button
                className="card-back-btn"
                onClick={() => setFlipCard(false)}
              >
                <IoClose />
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
}
