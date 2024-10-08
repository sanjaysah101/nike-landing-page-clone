import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons';
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
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    featureImage: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    featureImage: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    featureImage: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imageURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
  },
  {
    imageURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
  },
  {
    imageURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
  },
  {
    imageURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
  },
];

export const services = [
  {
    imageURL: truckFast,
    title: 'Free shipping',
    description: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imageURL: shieldTick,
    title: 'Secure Payment',
    description: 'Experience worry-free transactions with our secure payment options.',
  },
  {
    imageURL: support,
    title: 'Love to help you',
    description: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imageURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imageURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '#' },
      { name: 'Air Max 1', link: '#' },
      { name: 'Air Jordan 1', link: '#' },
      { name: 'Air Force 2', link: '#' },
      { name: 'Nike Waffle Racer', link: '#' },
      { name: 'Nike Cortez', link: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '#' },
      { name: 'FAQs', link: '#' },
      { name: 'How it works', link: '#' },
      { name: 'Privacy policy', link: '#' },
      { name: 'Payment policy', link: '#' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
