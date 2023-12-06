import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const Fasion = () => {
  const dressList = [
    {
      imgSrc: "./assets/productGrid/Fasion/1.webp",
      heading: `SPAMitude - Girls Calf Length Party Dress | Festive Party Fashion Sleeve Dress for Girls| Net Sequin Embroidery Calf Length Fancy Dress for Birthday Girl`,
      rating: 4,
      finalPrice: "380",
      mrp: "1,599",
      offerPercent: "76",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/2.webp",
      heading: `Fashion Chikan Art Women's Chiffon Ombre Dyed Chikankari Straight Kurti Set with Inner for Wedding, Festive, Casual Ethnic Wear`,
      rating: 4,
      finalPrice: "2,194",
      mrp: "5,499",
      offerPercent: "60",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/3.webp",
      heading: `ANG Fashion Girls Party(Festive) Top Pyjama-Bottom Set`,
      rating: 4,
      finalPrice: "498",
      mrp: "1,499",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/4.webp",
      heading: `Leriya Fashion Co Ord Set for Women Ethnic Wear | Ethnic Co Ord Set for Women Festive | Co Ord Set for Women`,
      rating: 4,
      finalPrice: "549",
      mrp: "1,999",
      offerPercent: "73",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/5.webp",
      heading: `Shining Diva Fashion Latest Stylish Design Fancy Pearl Choker Traditional Temple Necklace Jewellery Set for Women (14822s) (Golden)`,
      rating: 4,
      finalPrice: "559",
      mrp: "2,999",
      offerPercent: "80",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/6.webp",
      heading: `Sukkhi Glamorous Gold Plated Choker Necklace Set Combo For Women`,
      rating: 4,
      finalPrice: "249",
      mrp: "5,645",
      offerPercent: "97",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/7.webp",
      heading: `Sukkhi Seaside Gold Plated Pink AD Stones & Beads Choker Necklace Set With Earring And Maangtika | Jewellery Set For Women (NS105560)`,
      rating: 4,
      finalPrice: "265",
      mrp: "1,263",
      offerPercent: "79",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/8.webp",
      heading: `Shining Diva Latest Stylish 18k Gold Plated Traditional Kundan Necklace Jewellery Set for Women`,
      rating: 4,
      finalPrice: "450",
      mrp: "2,599",
      offerPercent: "82",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/9.webp",
      heading: `Jagdish GARMENTS Pure Cotton Kurta Only for Men Specially for Haldi Mehndi Ceremony`,
      rating: 4,
      finalPrice: "792",
      mrp: "1,693",
      offerPercent: "53",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/10.webp",
      heading: `Mentific Men's Cotton Straight Kurta Pyjama Set`,
      rating: 4,
      finalPrice: "505",
      mrp: "2,999",
      offerPercent: "83",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/11.webp",
      heading: `EthnicJunction Women's Anarkali Kurta with Tie & Dye Gota Work Dupatta Set`,
      rating: 4,
      finalPrice: "579",
      mrp: "2,376",
      offerPercent: "76",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/12.webp",
      heading: `EthnicJunction Women's Embroidered Thread Work Chinon A-Line Kurta Pant with Sequence Dupatta Set`,
      rating: 4,
      finalPrice: "649",
      mrp: "3,496",
      offerPercent: "82",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/13.webp",
      heading: `BUY UNIQUE FASHION Polyester Fit and Flare Maxi Casual Dress for Women`,
      rating: 4,
      finalPrice: "279",
      mrp: "1,299",
      offerPercent: "79",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/14.webp",
      heading: `RAJESHWAR FASHION WITH RF Women's Latest Chiffon Batik Printed Saree For Women With Blouse Piece(Multicolored_Free Size 6.30)`,
      rating: 4,
      finalPrice: "549",
      mrp: "2,999",
      offerPercent: "82",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/15.webp",
      heading: `EthnicJunction Women's Cotton Unstitched Salwar Kameez Dress Material with Dupatta`,
      rating: 4,
      finalPrice: "389",
      mrp: "1,659",
      offerPercent: "77",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/16.webp",
      heading: `DRAVINAM Trends Unstitched Printed Embroidered Pakistani Pure Cotton Salwar Suit Dress Materials with Digital Printed Cotton Dupatta for Women`,
      rating: 4,
      finalPrice: "1,650",
      mrp: "3,499",
      offerPercent: "53",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/17.jpg",
      heading: `BENSTOKE Men's Cotton Regular Kurta`,
      rating: 4,
      finalPrice: "699",
      mrp: "1,699",
      offerPercent: "59",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/18.jpg",
      heading: `Logass Men's Silk Blend Kurta Pyjama Set`,
      rating: 4,
      finalPrice: "1,795",
      mrp: "4,999",
      offerPercent: "65",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/19.jpg",
      heading: `URBAN WALKER Oversized Zippered Hooded Jacket for Men's | Oversized Zipper Hoodie Jacket with Zip & Pocket | Stay Warm and Stylish Winter for Boy's & Men's`,
      rating: 4,
      finalPrice: "999",
      mrp: "1,599",
      offerPercent: "38",
    },
    {
      imgSrc: "./assets/productGrid/Fasion/20.jpg",
      heading: `weltpocket Men's Kurta || Cotton Blend || Wedding Special || Straight Kurta || Ganpati Print ||`,
      rating: 4,
      finalPrice: "399",
      mrp: "1,499",
      offerPercent: "73",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={dressList} />
      <Footer backToTop={"/Fasion"} />
    </>
  );
};

export default Fasion;
