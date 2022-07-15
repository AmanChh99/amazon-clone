import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_1500x600._CB634376407_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Dennis Lingo Men's Plain Slim Fit Casual Shirt (C301_Black M)Dennis Lingo Men's Plain Slim Fit Casual Shirt (C301_Black M)"
            price={10}
            image={
              "https://m.media-amazon.com/images/I/61qcnAHZP3L._UX679_.jpg"
            }
            rating={5}
          />
          <Product
            id="49538954"
            title="Kore PVC 20-50 Kg Home Gym Set with One Plain + One Curl and One Pair Dumbbell Rods with Gym Accessories and PVC Dumbbells"
            price={30}
            image={
              "https://m.media-amazon.com/images/I/81TrFwscrQL._AC_UL320_.jpg"
            }
            rating={4}
          />
          <Product
            id="49538922"
            title="AVS Soft Teddy Bear Soft Toy | Birthday Gift for Sister, Girl Friend, Wife, Boyfriend/ Husband | Wedding for Couple Special | Baby Toys Gift Items, 2 Feet (Cream)"
            price={9}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/41vVQuGtLIS._SX300_SY300_QL70_FMwebp_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="35353351"
            title="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm"
            price={130}
            image={
              "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg"
            }
            rating={4}
          />
          <Product
            id="24343654"
            title="MOTHER DAIRY Cow GHEE CEKA Pack 1LTR"
            price={8}
            image={
              "https://m.media-amazon.com/images/I/61ZYYrmeHuL._SX679_.jpg"
            }
            rating={5}
          />
          <Product
            id="24353652"
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Silver (3rd Generation)"
            price={100}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/51MoqQUJnoS._SY445_SX342_QL70_FMwebp_.jpg"
            }
            rating={4}
          />
          <Product
            id="24353645"
            title="Prolific Men Brown Ethnic Juttis Mojaris & Partys Shoes"
            price={15}
            image={
              "https://m.media-amazon.com/images/I/61S8oYOUpFL._UY625_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="14356726"
            title="Samsung 27 inches 1920 x 1080 Pixels Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, LED Monitor VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports (Dark Blue Gray)"
            price={320}
            image={
              "https://m.media-amazon.com/images/I/81cSdJuBbFL._SX450_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
