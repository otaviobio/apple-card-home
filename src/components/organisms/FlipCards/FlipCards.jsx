import "./FlipCards.scss";
import creditVideo from "../../../assets/first_credit_card_video.mp4";
import dollarSignVideo from "../../../assets/dollar_sign_video.mp4";
import { FlipCard } from "../../molecules/FlipCard/FlipCard";
import ipadPencil from "../../../assets/three_percent_ipad_pencil_tile.jpg";
import iphoneWatch from "../../../assets/three_percent_iphone_apple_watch_tile.jpg";
import macbookAirpods from "../../../assets/three_percent_macbook_pro_airpods_tile.jpg";
import mobileThreePercent from "../../../assets/three_percent_tile_mobile.jpg";
import dailyCashHand from "../../../assets/daily_cash_hand.png";
import dailyCashShadow from "../../../assets/daily_cash_shadow.png";
import ace from "../../../assets/logos/logo_ace.png";
import duaneReade from "../../../assets/logos/logo_duane_reade.png";
import exxon from "../../../assets/logos/logo_exxon.png";
import mobil from "../../../assets/logos/logo_mobil.png";
import nike from "../../../assets/logos/logo_nike.png";
import panera from "../../../assets/logos/logo_panera.png";
import tMobile from "../../../assets/logos/logo_tmobile.png";
import uber from "../../../assets/logos/logo_uber.png";
import uberEats from "../../../assets/logos/logo_uber_eats.png";
import walgreens from "../../../assets/logos/logo_walgreens.png";
import titaniumCardVideo from "../../../assets/titanium_card_video.mp4";
import titaniumCardVideoMobile from "../../../assets/titanium_card_video_mobile.mp4";
import interestFree from "../../../assets/interest_free.jpg";
import interestFreeMobile from "../../../assets/interest_free_mobile.jpg";
import mastercard from "../../../assets/logos/logo_mastercard.jpg";
import goldmanSachs from "../../../assets/logos/logo_goldman_sachs.jpg";

const flipCardsData = [
  {
    fullTile: true,
    halfTile: "",
    titleFront: "Created by Apple. Powered by iPhone.",
    descriptionFront: "",
    customClass: "created-by-apple",
    titleBack: "Built for iPhone",
    descriptionBack:
      "Apple Card lives on your iPhone, in the Wallet app. You can sign up in as little as a minute and start using it right away with Apple Pay. Your transactions, payments, and account details are all in one place, where only you can see them. You even make your payments right in the Wallet app — just select your amount, tap, and it's done.",
  },
  {
    halfTile: true,
    titleFront: (
      <div className="fade-container">
        <div>
          No <br /> Fees.
        </div>
        <div className="inner-fade-container">
          <div className="reveal text-1">Not</div>
        </div>
        <div className="inner-fade-container">
          <div className="reveal text-2">even</div>
        </div>
        <div className="inner-fade-container">
          <div className="reveal text-3">hidden</div>
        </div>
        <div className="inner-fade-container">
          <div className="reveal text-4">ones.</div>
        </div>
      </div>
    ),
    descriptionFront: "",
    customClass: "no-fees",
    titleBack: "No Fees",
    descriptionBack:
      "We want to make it easier to pay down your balance, not harder. So Apple Card doesn't have any fees. No annual, over-the-limit, foreign-transaction, or late fees. No fees. Really. And our goal is to provide interest rates that are among the lowest in the industry. Because your credit card should work for you, not against you.",
  },
  {
    halfTile: true,
    titleFront:
      "The first credit card that actually encourages you to pay less interest.",
    descriptionFront: "",
    customClass: "first-credit-card",
    titleBack: "Pay less interest",
    descriptionBack:
      "Most credit cards emphasize your minimum amount due. But when you pay only your minimum each month, it costs you a lot in interest over time. Apple Card is different. When you're ready to make a payment, Apple Card estimates the interest you'll wind up paying, based on any payment amount you choose. And it does that in real time, so you can make an informed decision about how much of your balance to pay down.",
    backgroundContent: <video src={creditVideo} autoPlay muted />,
  },
  {
    fullTile: true,
    titleFront: (
      <>
        Unlimited <br /> Daily Cash Back.
      </>
    ),
    descriptionFront: "Real cash you can use right away.",
    customClass: "unlimited-cash-back",
    titleBack: "Unlimited Daily Cash",
    descriptionBack:
      "When you buy something using Apple Card, you get a percentage of your purchase back in Daily Cash. It's real cash, so unlike rewards, it never expires or loses its value. Your cash is deposited right onto your Apple Cash card in the Wallet app — not a month from now, but every day. And there's no limit to how much you can get. Use it to buy things in stores, on websites, and in apps. Make a payment on your Apple Card. Pay back a friend. Or send it straight to your bank account and watch it add up.",
    backgroundContent: <video src={dollarSignVideo} autoPlay muted />,
  },
  {
    fullTile: true,
    titleFront: "Get 3% Daily Cash back when you shop at Apple.",
    descriptionFront: "",
    customClass: "three-percent-cash-back",
    titleBack: "3% Daily Cash at Apple",
    descriptionBack:
      "Apple Card gives you unlimited 3% Daily Cash back on everything you buy at Apple — whether it's a new Mac, an iPhone case, games from the App Store, or even a service like Apple Music or Apple TV+.",
    backgroundContent: (
      <>
        <img
          className="three-percent-mobile-image"
          src={mobileThreePercent}
          alt="Apple main products"
        />
        <img
          className="three-percent-image ipad"
          src={ipadPencil}
          alt="iPad and Apple Pencil"
        />
        <img
          className="three-percent-image iphone"
          src={iphoneWatch}
          alt="iPhone and Apple Watch"
        />
        <img
          className="three-percent-image macbook"
          src={macbookAirpods}
          alt="Macbook Pro and Airpods"
        />
      </>
    ),
  },
  {
    halfTile: true,
    titleFront: (
      <>
        Get 2% <br /> Daily Cash <br /> back
      </>
    ),
    descriptionFront: (
      <>
        when you use your iPhone <br /> or Apple Watch to pay <br /> with Apple
        Card.
      </>
    ),
    customClass: "two-percent-cash-back",
    titleBack: "2% Daily Cash",
    descriptionBack:
      "The best way to use Apple Card is with Apple Pay — the secure payment technology built into iPhone, Apple Watch, iPad, and Mac and accepted at 85 percent of merchants in the United States. Apple Pay is a safer way to pay that helps you avoid touching buttons or exchanging cash. And with every purchase you make using your Apple Card with Apple Pay, you get 2% Daily Cash back. No points to calculate. No limits or deadlines. Just real cash that's ready to spend whenever, wherever, and however you want.",
    backgroundContent: (
      <>
        <img
          className="two-percent-image phone"
          src={dailyCashHand}
          alt="iPhone in hand"
        />
        <img
          className="two-percent-image terminal"
          src={dailyCashShadow}
          alt="wireless pay terminal"
        />
      </>
    ),
  },
  {
    halfTile: true,
    titleFront: (
      <>
        Shop with <br /> select <br /> merchants <br /> and get <br /> even more{" "}
        <br /> Daily Cash.
      </>
    ),
    descriptionFront: (
      <div className="logos-container">
        <div className="logos-row">
          <img src={ace} className="ace" alt="ace logo" />
          <img src={duaneReade} className="duane" alt="duane reade logo" />
          <img src={exxon} className="exxon" alt="exxon logo" />
        </div>
        <div className="logos-row">
          <img src={mobil} className="mobil" alt="mobil logo" />
          <img src={nike} className="nike" alt="nike logo" />
          <img src={panera} className="panera" alt="panera logo" />
          <img src={tMobile} className="t-mobile" alt="t mobile logo" />
        </div>
        <div className="logos-row">
          <img src={uber} className="uber" alt="uber logo" />
          <img src={uberEats} className="uber-eats" alt="uber eats logo" />
          <img src={walgreens} className="walgreens" alt="walgreens logo" />
        </div>
      </div>
    ),
    customClass: "select-merchants",
    titleBack: "3% Daily Cash",
    descriptionBack:
      "Apple Card gives you unlimited 3% Daily Cash back on purchases you make at select merchants when you use Apple Card with Apple Pay.",
  },
  {
    fullTile: true,
    titleFront: (
      <>
        Healthy Finances. <br /> Family style.
      </>
    ),
    descriptionFront: "Apple card Family",
    customClass: "healthy-finances",
    titleBack: "Apple card Family",
    descriptionBack:
      "Apple Card Family brings all the great features and benefits of Apple Card to your entire family — whether that's your immediate family, extended family, or whoever you call family. It allows two partners to merge credit lines  to form a single co-owned account, manage that account together, and build credit as equals. Participants and older can choose to start building their own credit history, and teens can learn better spending habits. And, family members receive Daily Cash back on their own purchases.",
    backgroundContent: "",
  },
  {
    fullTile: true,
    titleFront: (
      <>
        Goodbye, plastic. <br /> Hello, titanium.
      </>
    ),
    descriptionFront: "",
    customClass: "goodbye-plastic",
    titleBack: "Titanium Card",
    descriptionBack:
      "With laser etching and clean styling, Apple Card is designed with the same craftsmanship we bring to all our products. And it's the only credit card made of titanium — a sustainable metal known for its beauty and durability. When you use the card, you'll get 1% Daily Cash back on every purchase. Since Mastercard is our global payment network, you can use it all over the world. For apps and websites that don't take Apple Pay yet, just enter the virtual card number stored securely in your Wallet app. And when you're using Safari, it even autofills for you.",
    backgroundContent: <><video className="full-video" src={titaniumCardVideo} autoPlay muted /> <video className="mobile-video" src={titaniumCardVideoMobile} autoPlay muted /></>,
  },
  {
    fullTile: true,
    titleFront: "Privacy and Security.",
    descriptionFront: (
      <div className="fade-container">
        <div className="inner-fade-container">
          <div className="reveal text-1">Your card.</div>
        </div>
        <div className="inner-fade-container">
          <div className="reveal text-2">Your data.</div>
        </div>
        <div className="inner-fade-container">
          <div className="reveal text-3">Your business.</div>
        </div>
      </div>
    ),
    customClass: "privacy-security",
    titleBack: "Privacy and Security.",
    descriptionBack:
      "Apple takes your privacy and security seriously. It's not just a philosophy, it's built into all our products. And Apple Card is no different. With advanced security technologies like Face ID, Touch ID, and unique transaction codes, Apple Card with Apple Pay is designed to make sure you're the only one who can use it. The titanium card has no visible numbers. Not on the front. Not on the back. Which gives you an enhanced level of security. And while Goldman Sachs uses your data to operate Apple Card, your transaction history and spending habits belong to you and you alone. Your data isn't sold to third parties for marketing or advertising.",
    backgroundContent: "",
    parentCustomClass: "privacy-security-parent",
  },
  {
    fullTile: true,
    titleFront: (
      <>
        Pay for your <br /> new Apple <br /> products <br /> over time, <br />{" "}
        interest-free
      </>
    ),
    descriptionFront: (
      <>
        when you choose to <br /> check out with Apple Card <br /> Monthly
        Installments.
      </>
    ),
    customClass: "interest-free",
    titleBack: "Apple Card ",
    descriptionBack:
      "You can buy a new Mac, iPhone, iPad, Apple Watch, and more with interest-free monthly payments on purchases at Apple. Just choose Apple Card Monthly Installments and then check out. Your installment automatically appears on your Apple Card statement alongside your everyday Apple Card purchases in the Wallet app. If you have an eligible device to trade in, you'll pay even less per month.16 And you'll get 3% Daily Cash back on the purchase price of each product, all up front. If you have Apple Card already, there's no additional application. If you don't, you can apply in as little as a minute during checkout, from the privacy of your iPhone.",
    backgroundContent: <><img src={interestFree} className="full-img" alt="apple equipment" /><img src={interestFreeMobile} className="mobile-img" alt="apple equipment" /></>,
    parentCustomClass: "interest-free-parent",
  },
  {
    halfTile: true,
    titleFront: (
      <>
        Tools to help <br /> you make <br /> financially <br /> healthy <br />{" "}
        choices.
      </>
    ),
    descriptionFront: (
      <div class="bars-container">
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
        <div class="bar bar-3"></div>
        <div class="bar bar-4"></div>
        <div class="bar bar-5"></div>
      </div>
    ),
    customClass: "tools",
    titleBack: "Financial Health",
    descriptionBack:
      "To see how much you're spending, there's no need to log in to a separate website or app. Your totals are automatically added up in the Wallet app, ready to view by week or by month. Color-coded categories make it easy to spot trends in your spending so you can decide if you want to change them. And Apple Card uses Maps to pinpoint where you bought something.17 No mysterious merchant codes. No guessing.",
    backgroundContent: "",
  },
  {
    halfTile: true,
    titleFront: (
      <>
        Trusted <br /> partners for <br /> a different <br /> kind of <br />{" "}
        credit card.
      </>
    ),
    descriptionFront: (
      <>
        <img
          className="partner-logo-left"
          src={goldmanSachs}
          alt="goldman sachs logo"
        />
        <img
          className="partner-logo-right"
          src={mastercard}
          alt="mastercard logo"
        />
      </>
    ),
    customClass: "trusted-partners",
    titleBack: "Partnerships",
    descriptionBack:
      "To create Apple Card, we needed an issuing bank and a global payment network. Apple Card is the first consumer credit card Goldman Sachs has issued, and they were open to doing things in a new way. And the strength of the Mastercard network means Apple Card is accepted all over the world.",
    backgroundContent: "",
    parentCustomClass: "trusted-partners-parent",
  },
];

export function FlipCards() {
  return (
    <section className="flip-cards-container">
      {flipCardsData.map((flipCardData, index) => (
        <FlipCard key={index} {...flipCardData} />
      ))}
    </section>
  );
}
