import React from "react";
import Header from "./Header";
import Productgrid from "./Productgrid";
import Footer from "./Footer";

const Laptop = () => {
  const laptopList = [
    {
      imgSrc: "./assets/productGrid/laptops/1.webp",
      heading: `Acer Aspire Lite Premium Metal Laptop 11th Gen Intel Core Ci7-1165G7 Thin and Light Laptop (Windows 11 Home/16GB RAM/1TB SSD/MS Office) AL15-51, 39.62cm (15.6") Full HD Display, Steel Gray, 1.59 KG`,
      rating: 3,
      finalPrice: "47,990",
      mrp: "82,999",
      offerPercent: "42",
    },
    {
      imgSrc: "./assets/productGrid/laptops/2.webp",
      heading: `Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6" (39.562cm) FHD/Win 11 + MSO'21/Thin & Light 1.69kg/15 Month McAfee/Spill-Resistant Keyboard/Carbon Color`,
      rating: 3,
      finalPrice: "48,800",
      mrp: "66,380",
      offerPercent: "26",
    },
    {
      imgSrc: "./assets/productGrid/laptops/3.webp",
      heading: `HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU`,
      rating: 4,
      finalPrice: "35,550",
      mrp: "47,880",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/laptops/4.webp",
      heading: `Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold`,
      rating: 4,
      finalPrice: "69,999",
      mrp: "99,900",
      offerPercent: "30",
    },
    {
      imgSrc: "./assets/productGrid/laptops/5.webp",
      heading: `Dell 15 Laptop, Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6" (39.6cm) FHD 120Hz Refresh Rate 250 nits/Thin & Light 1.66kg/Win 11+MSO'21/15 Month McAfee/Carbon Black`,
      rating: 4,
      finalPrice: "34,550",
      mrp: "44,999",
      offerPercent: "21",
    },
    {
      imgSrc: "./assets/productGrid/laptops/6.webp",
      heading: `HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Backlit KB, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq5007TU`,
      rating: 4,
      finalPrice: "38,226",
      mrp: "56,550",
      offerPercent: "32",
    },
    {
      imgSrc: "./assets/productGrid/laptops/7.webp",
      heading: `ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop (16GB/512GB SSD/Windows 11/90WHrs Battery/Black/2.30 Kg), FX506HE-HN382W`,
      rating: 4,
      finalPrice: "68,430",
      mrp: "97,600",
      offerPercent: "30",
    },
    {
      imgSrc: "./assets/productGrid/laptops/8.webp",
      heading: `HP [SmartChoice] 15s, Ryzen 5-5500U, 16GB RAM/512GB SSD 15.6"(39.6 cm) FHD Laptop/Alexa Built-in/Windows 11 /AMD Radeon Graphics/MSO 2021/1.69 Kg, eq2132au, eq2182au`,
      rating: 3,
      finalPrice: "41,880",
      mrp: "59.999",
      offerPercent: "29",
    },
    {
      imgSrc: "./assets/productGrid/laptops/9.webp",
      heading: `Acer [SmartChoice] One 14 Business Laptop AMD Ryzen 3 3250U Processor (8GB RAM/256GB SSD/AMD Radeon Graphics/Windows 11 Home) Z2-493 with 35.56 cm (14.0") HD Display`,
      rating: 4,
      finalPrice: "23,550",
      mrp: "38,444",
      offerPercent: "38",
    },
    {
      imgSrc: "./assets/productGrid/laptops/10.webp",
      heading: `HP Chromebook 14a,Intel Celeron N4500 14inch(35.6 cm) FHD Touchscreen Laptop (Chrome OS, 4 GB SDRAM/64 GB eMMC/Chrome 64 /Dual Speakers/Google Assistant Built-in/Mineral Silver) 14a- na1004TU`,
      rating: 4,
      finalPrice: "21,400",
      mrp: "30,666",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/laptops/11.webp",
      heading: `Acer Predator Helios Neo 16 Gaming Laptop 13th Gen Intel Core i5 Processor (16 GB/512 GB SSD/Windows 11 Home/NVIDIA ® GeForce RTX ¢ 4050) PHN16-71, (16") WUXGA Display`,
      rating: 5,
      finalPrice: "99,990",
      mrp: "1,44,999",
      offerPercent: "31",
    },
    {
      imgSrc: "./assets/productGrid/laptops/12.webp",
      heading: `Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) A515-57G (15.6" FHD Display, 1.8 Kg)`,
      rating: 4,
      finalPrice: "51,990",
      mrp: "82,399",
      offerPercent: "3",
    },
    {
      imgSrc: "./assets/productGrid/laptops/13.webp",
      heading: `Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD/Windows 11 Home/Wi-Fi 6),15.6"(39.6cms) FHD ANV15-51`,
      rating: 4,
      finalPrice: "72,999",
      mrp: "92,099",
      offerPercent: "22",
    },
    {
      imgSrc: "./assets/productGrid/laptops/14.webp",
      heading: `HP Chromebook 14a,Intel Celeron N4500 14inch(35.6 cm) FHD Touchscreen Laptop (Chrome OS, 4 GB SDRAM/64 GB eMMC/Chrome 64 /Dual Speakers/Google Assistant Built-in/Mineral Silver) 14a- na1004TU`,
      rating: 3,
      finalPrice: "21,009",
      mrp: "30,099",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/laptops/15.webp",
      heading: `MSI GF63 Thin, Intel Core i5-11260H, 40CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce GTX 1650, GDDR6 4GB/Black/1.8Kg), 11SC-1477IN`,
      rating: 4,
      finalPrice: "45,399",
      mrp: "78,199",
      offerPercent: "42",
    },
    {
      imgSrc: "./assets/productGrid/laptops/16.webp",
      heading: `HP Laptop 14s, AMD Ryzen 5 5500U, 14-inch (35.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Backlit KB, Thin & Light, Dual Speakers (Win 11, MSO 2019, Silver, 1.46 kg), fq1092AU`,
      rating: 3,
      finalPrice: "39,999",
      mrp: "55,621",
      offerPercent: "28",
    },
    {
      imgSrc: "./assets/productGrid/laptops/17.jpg",
      heading: `Acer Swift 5 SF514-55TA Intel EVO Thin and Light Laptop 14"(35cm) Full HD IPS Touch Display 11th Gen Intel Core i5-1135G7 Processor 8GB LPDDR4X 512GB SSD FPR Backlit Keyboard Win 11 MSO 2021, Windows`,
      rating: 4,
      finalPrice: "72,990",
      mrp: "99,999",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/laptops/18.jpg",
      heading: `Lenovo ThinkPad E14 Intel Core i5 12th Gen 14" FHD Thin and Light Laptop (16GB RAM/512GB SSD/Windows 11 Home/MS Office H&S 2021/FPR/Backlit Keyboard/Black/1.59 kg), 21E3S04W00`,
      rating: 4,
      finalPrice: "70,400",
      mrp: "1,13,999",
      offerPercent: "37",
    },
    {
      imgSrc: "./assets/productGrid/laptops/19.jpg",
      heading: `HP Chromebook x360 Intel Celeron N4120 14 inch(35.6 cm) Micro-Edge, Touchscreen, 2-in-1 Laptop (4GB RAM/64GB eMMC/Chrome OS 64/UHD Graphics,1.49kg), 14a-ca0504TU`,
      rating: 4,
      finalPrice: "22,599",
      mrp: "32,799",
      offerPercent: "31",
    },
    {
      imgSrc: "./assets/productGrid/laptops/20.jpg",
      heading: `MSI Thin GF63, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz Gaming Laptop (8GBx2/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 4050, GDDR6 6GB/Black/1.86Kg), A12VE-070IN`,
      rating: 4,
      finalPrice: "84,779",
      mrp: "1,27,299",
      offerPercent: "27",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={laptopList} />
      <Footer backToTop={"/laptops"} />
    </>
  );
};

export default Laptop;
