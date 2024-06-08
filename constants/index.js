import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "@/public/assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "@/public/assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#categories", label: "Categories" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const categories = [
  {
    imgURL: shoe4,
    name: "APPARELS",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "LUGGAGE",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "FOOTWEAR",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "PERSONAL ACCESSORIES",
    price: "$230.20",
  },
  {
    imgURL: shoe7,
    name: "CONSUMER ELECTRONICS",
    price: "$230.20",
  },
  {
    imgURL: shoe7,
    name: "HOME & KITCHEN APPLIANCES",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "On Time Delivery",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Top Brands",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Top Quality",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },

  {
    imgURL: support,
    label: " Best Prices",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Categories",
    links: [
      { name: "APPARELS", link: "#categories" },
      { name: "LUGGAGE", link: "#categories" },
      { name: "FOOTWEAR", link: "#categories" },
      { name: "PERSONAL ACCESSORIES", link: "#categories" },
      { name: "CONSUMER ELECTRONICS", link: "#categories" },
      { name: "HOME & KITCHEN APPLIANCES", link: "#categories" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "luggbaguer@gmail.com", link: "mailto:luggbaguer@gmail.com" },
      { name: "+91 78480 10101", link: "tel:+917848010101" },
      {
        name: "152/2, 1st Floor, KS Garden, Lalbagh 4th Cross Road, Bangalore -560027.",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
