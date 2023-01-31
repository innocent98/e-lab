import { Link } from "react-router-dom";
import "./intro.scss";
import { Zoom, Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const slide = [
  {
    id: 1,
    title: "A word after a word after a word is power.",
    author: "Margaret Atwood",
  },
  {
    id: 2,
    title: "Some books leave us free and some books make us free.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: 3,
    title:
      "Books are mirrors: You only see in them what you already have inside you",
    author: "Carlos Ruiz Zafón",
  },
  {
    id: 4,
    title: "If you don’t like to read, you haven’t found the right book.",
    author: "J.K. Rowling",
  },
  {
    id: 5,
    title:
      "Books and doors are the same thing. You open them, and you go through into another world.",
    author: "Jeanette Winterson",
  },
  {
    id: 6,
    title:
      "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.",
    author: "Charles Baudelaire",
  },
  {
    id: 7,
    title:
      "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
    author: "Carl Sagan",
  },
  {
    id: 8,
    title:
      "Show me a family of readers, and I will show you the people who move the world.",
    author: "Napoleon Bonaparte",
  },
  {
    id: 9,
    title:
      "Let’s be reasonable and add an eighth day to the week that is devoted exclusively to reading.",
    author: "Lena Dunham",
  },
  {
    id: 10,
    title:
      "I think books are like people, in the sense that they’ll turn up in your life when you most need them.",
    author: "Emma Thompson",
  },
  {
    id: 11,
    title: "Think before you speak. Read before you think.",
    author: "Fran Lebowitz",
  },
  {
    id: 12,
    title: "Today a reader, tomorrow a leader.",
    author: "Margaret Fuller",
  },
];

const list = [
  { id: 1, text: "pique your interest", color: "#00F076" },
  { id: 2, text: "widen your horizon", color: "#F2368C" },
  { id: 3, text: "enhance your knowledge", color: "#00BEFF" },
  { id: 4, text: "improve your vocabulary", color: "#FFE000" },
];

const Intro = ({ setSignup }) => {
  const [slider, setSlider] = useState(0);
  const [sliderM, setSliderM] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider(slider < slide.length - 4 ? slider + 1 : 0);
      setSliderM(sliderM < slide.length - 1 ? sliderM + 1 : 0);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="intro">
      <div className="first-wrapper">
        <h1>
          eLibrary book <br /> store
        </h1>
        <div className="browse">
          <p>Browse the collection of our books that would</p>
          <div className="move">
            {list.map((item) => (
              <p style={{ color: item.color }} key={item.id}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <div className="sign" onClick={() => setSignup(true)}>
          Sign up
        </div>
      </div>

      <div className="second-wrapper">
        <h1>“Your future, our vision”</h1>
        <p>
          “Today a reader, tomorrow a leader." <br />
          <span>– Margaret Fuller</span>
        </p>
        <img src="assets/book/Vector.png" alt="" className="vector" />
      </div>

      {/* <div className="wrapper">
        <div className="left">
          <Slide direction="left" triggerOnce>
            <h1>Books are a uniquely portable magic</h1>
            <p>
              Browse the collection of our top best and catchy books that would
              enhance your knowledge and widen your horizon
            </p>
            <Link to="" onClick={() => setSignup(true)} className="link">
              <div className="signupBtn">Sign up</div>
            </Link>
            <div className="app">
              <h4>App coming soon...</h4>
              <div className="imgs">
                <img src="/assets/book/appstore.png" alt="" />
                <img src="/assets/book/playstore.png" alt="" />
              </div>
            </div>
          </Slide>
        </div>
        <div className="right">
          <Zoom className="right" triggerOnce>
            <img src="/assets/book/cover3.jpg" alt="" className="img-fluid" />
          </Zoom>
        </div>
      </div>

      <div className="wrapper">
        <div className="slides">
          {slide.map((item, index) => {
            return (
              <div
                className="slide"
                key={index}
                style={{ transform: `translateX(${slider * -290}px)` }}
                slider={slider}
              >
                <p>
                  <i className="fa fa-quote-left"></i>
                  <span>{item.title}</span>
                </p>
                <h3>~{item.author}</h3>
              </div>
            );
          })}
        </div>

        <div className="slides-m">
          {slide.map((item, index) => {
            return (
              <div
                className="slide"
                key={index}
                style={{ transform: `translateX(${sliderM * -340}px)` }}
                slider={sliderM}
              >
                <p>
                  <i className="fa fa-quote-left"></i>
                  <span>{item.title}</span>
                </p>
                <h3>~{item.author}</h3>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Intro;
