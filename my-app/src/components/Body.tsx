import Next from 'next/link';

const Body = () => {
  return (
    <div className="body-container">
      
      {/* First row of items */}
      <div className="grid-container">
        <div className="item">
          <img
            src="/earr.jpg"
            alt="earrings"
            className="item-image"
          />
          <h1 className="item-title">EARRINGS</h1>
        </div>
        <div className="item">
          <img
            src="/necc.jpg"
            alt="necklace"
            className="item-image"
          />
          <h1 className="item-title">NECKLACE</h1>
        </div>
        <div className="item">
          <img
            src="/brac.avif"
            alt="bracelet"
            className="item-image"
          />
          <h1 className="item-title">BRACELET</h1>
        </div>
      </div>

      {/* Second row of items */}
      <div className="grid-container">
        <div className="item">
          <img
            src="/rin.jpg"
            alt="ring"
            className="item-image"
          />
          <h1 className="item-title">RING</h1>
        </div>
        <div className="item">
          <img
            src="/ban.webp"
            alt="bangle"
            className="item-image"
          />
          <h1 className="item-title">BANGLE</h1>
        </div>
        <div className="item">
          <img
            src="/ank.webp"
            alt="anklet"
            className="item-image"
          />
          <h1 className="item-title">ANKLET</h1>
        </div>
      </div>

    </div>
  );
}

export default Body;
