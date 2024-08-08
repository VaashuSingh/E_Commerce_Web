import productImg_1 from "./../assets/img/image-1.jpg";

const filtersItems = [
  {
    value: 1001,
    label: "Jacket",
  },
  {
    value: 1002,
    label: "Shirt",
  },
  {
    value: 1003,
    label: "Mobile",
  },
  {
    value: 1004,
    label: "T-Shirt",
  },
];

const filtersPrice = [
  {
    value: 2001,
    label: "100",
  },
  {
    value: 2002,
    label: "200",
  },
  {
    value: 2003,
    label: "300",
  },
  {
    value: 2004,
    label: "400",
  },
];

const productsCardCollection = [
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jacket",
    desc: "Jacket",
    price: 100,
    image: productImg_1,
    mrp: 200,
    disc: "10 %",
    rating: 4.5,
  },
];

const carouseldata = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/64fc133d6aaafd4633e4a190/82af3800-047d-4d3b-9e2a-298ddced9b69/tai-jin-house-credit-parks-australia-h-1920x576+%281%29.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.metroplexcom.com/wp-content/uploads/2018/03/header-1920x576.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://parksaustralia.gov.au/christmas/files/cache/walks/golf-course-lookout-credit-wondrous-world-images-h-1920x576.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://parksaustralia.gov.au/christmas/files/cache/walks/martin-point-credit-wondrous-world-images-h-1920x576.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://parksaustralia.gov.au/christmas/files/cache/discover/phosphate-loading-dock-credit-wondrous-world-images-h-1920x576.jpg",
    caption: "Darjeeling",
  },
  {
    image: "https://coolwallpapers.me/picsup/5705942-changsha-wallpapers.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://www.swiss-p.com/images/content/VIsuals/shutterstock_547395022-1-1920x576.jpg",
    caption: "Scotland",
  },
  {
    image:
      // "https://galileo-masters.eu/wp-content/uploads/2018/04/ESNC-WebsiteHeader-Greek_2018-1920x576.jpg",
      "https://wallpaperaccess.com/full/12311.jpg",
    caption: "Darjeeling",
  },
];

const track = [
  {
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    name: "Premium Tshirts",
    description: "Our T-Shirts are 100% made of cotton.",
  },
  {
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    name: "Free Shipping",
    description: "We ship all over India for FREE.",
  },
  {
    icon: "M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    name: "Exciting Offers",
    description: "We provide amazing offers & discounts",
  },
];
const testimonial = [
  {
    image:
      "https://imgs.search.brave.com/Flmvi3CK2pQFhKbJZSW6WDkKAlfb0rXzCZlDnralpYI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZWlu/Z3NlbGZpc2guaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDcvbWFoYWRldi1k/cDA1LmpwZw",
    name: "Amit Katyal",
    position: "Super Senior Software Developer | Team Leader",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    image:
      "https://imgs.search.brave.com/FaYGxm5paN49WBe10VaHw7ulcvPk3Qt3FHH7UC4wFyw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Nub3cub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L01haGFkZXYtcGlj/XzYuanBn",
    name: "Shailendra Pandey",
    position: "Senior Product Manager",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    image: "https://imgs.search.brave.com/kiTKttiGEFqml_yarfsTyL2ilQdfZOwp8EIHyTbzEaY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Nub3cub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L2Z1bGwtaGQtbWFo/YWRldi1waWNfMTEu/anBn",
    name: "Anil Yadav",
    position: "CEO",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

export {
  filtersItems,
  filtersPrice,
  productsCardCollection,
  carouseldata,
  track,
  testimonial,
};
