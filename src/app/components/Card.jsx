export const Card = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-gray-50 h-15 gap-10">
        <img src="./SVG (4).svg" />
        <p>Store</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>Vision</p>
        <p>Airpods</p>
        <p>TV & Home</p>
        <p>Entertainment</p>
        <p>Accessories</p>
        <p>Support</p>
        <img src="./SVG (5).svg" />

        <img src="./SVG (6).svg" />
      </div>
      <div className="flex justify-center items-center p-5">
        We’re donating $5 to the Global Fund for every purchase made with
        Apple Pay at Apple. Through 12/8.
      </div>
      <div className="w-screen">
        <img
          className="w-full h-200 flex justify-center"
          src="./iphone16pro.jpg"
        />
        <div>
          <p>iPhone 16 Pro</p>
          <p>Hello, Apple Intelligence.</p>
          <div>
            <div>Learn more</div>
            <div>Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
