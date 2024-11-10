
import Body from "@/components/Body";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <main className="mainContainer">
        {/* Background images container */}
        <div className='imageContainer'>
          <img
            src="/cover"
            alt="background image 1"
            className='backgroundImage'
          />
          <img
            src="/bg2.webp"
            alt="background image 3"
            className='backgroundImage'
          />
        </div>

        {/* Overlay content */}
        <div className='overlayContent'>
          <div className='logoContainer'>
            <img
              src="/logo2.jfif"
              alt="Logo"
              width={120}
              height={120}
              className="logo1"
            />
          </div>
          <h1 className='title'>The Jewel Of Excellence</h1>
          <p className='subtitle'>
            "A symbol of everlasting love. Innovative design, impeccable craftsmanship."
          </p>
          <h2 className='slogan'>"Where Art Meets Jewelry"</h2>
          <button className='orderButton'>Order Now</button>
        </div>
      </main>

      {/* Additional components */}
      <Body />
      <Intro />
    </>
  );
}
