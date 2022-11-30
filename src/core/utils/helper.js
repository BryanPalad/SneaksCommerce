// features img
import f1 from '../../assets/img/features/f1.png';
import f2 from '../../assets/img/features/f2.png';
import f3 from '../../assets/img/features/f3.png';
import f4 from '../../assets/img/features/f4.png';
import f5 from '../../assets/img/features/f5.png';
import f6 from '../../assets/img/features/f6.png';

// products
import featuredProduct1 from '../../assets/img/shoes/adidasSuperstarShoesBlack.webp';
import featuredProduct2 from '../../assets/img/shoes/adidasSuperstarShoesWhite.webp';
import featuredProduct3 from '../../assets/img/shoes/adidasSuperStarCloudWhite.webp';
import featuredProduct4 from '../../assets/img/shoes/adidasNMD_R1PrimeBlue.webp';
import featuredProduct5 from '../../assets/img/shoes/nikeAirForce1White.webp';
import featuredProduct6 from '../../assets/img/shoes/nikeAirJordan1.webp';
import featuredProduct7 from '../../assets/img/shoes/nikeAirPresto.webp';
import featuredProduct8 from '../../assets/img/shoes/nikeAirMax270.webp';
import newArrivals1 from '../../assets/img/shoes/worldBalanceRegimentL.webp';
import newArrivals2 from '../../assets/img/shoes/worldBalanceHeriaL.webp';
import newArrivals3 from '../../assets/img/shoes/worldBalanceMarbella.webp';
import newArrivals4 from '../../assets/img/shoes/worldbalanceSpinCycle.webp';
import newArrivals5 from '../../assets/img/shoes/reebokClassicLeather.webp';
import newArrivals6 from '../../assets/img/shoes/reebokClassicLeather1983Vintage.webp';
import newArrivals7 from '../../assets/img/shoes/reebokClassicNylon.webp';
import newArrivals8 from '../../assets/img/shoes/reebokClassicLeatherMakeItYours.webp';

// social icons
import {BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsYoutube} from 'react-icons/bs';

// contact us icons 
import {BsMap, BsEnvelope} from 'react-icons/bs';
import {BiPhone, BiTime} from 'react-icons/bi';

// blog images 
import blog1 from '../../assets/img/blog/b1.jpg';
import blog2 from '../../assets/img/blog/b2.jpg';
import blog3 from '../../assets/img/blog/b3.jpg';
import blog4 from '../../assets/img/blog/b4.jpg';
import blog5 from '../../assets/img/blog/b6.jpg';




// NAVBAR DATA
export const navbarLinks = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'Shop',
        to: '/shop',
    },
    // {
    //     title: 'Blog',
    //     to: '/blog',
    // },
    {
        title: 'About',
        to: '/aboutus',
    },
    {
        title: 'Contact Us',
        to: '/contact',
    },
];

// FEATURES DATA
export const featuresData = [
    {
        title: 'Free Shipping',
        img: f1,
        color: 'bg-feature1',
    },
    {
        title: 'Online Order',
        img: f2,
        color: 'bg-feature2',
    },
    {
        title: 'Save Money',
        img: f3,
        color: 'bg-feature3',
    },
    {
        title: 'Promotions',
        img: f4,
        color: 'bg-feature4',
    },
    {
        title: 'Happy Sell',
        img: f5,
        color: 'bg-feature5',
    },
    {
        title: '24/7 Support',
        img: f6,
        color: 'bg-feature6',
    },
];

// SHOP DATA
export const allProducts = [
    {
        id: 1,
        title: 'Superstar Black',
        img: featuredProduct1,
        origPrice: 5399,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {   
        id: 2,
        title: 'Superstar White',
        img: featuredProduct2,
        origPrice: 5399,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        title: 'Superstar Cloud White',
        img: featuredProduct3,
        origPrice: 4599,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        title: 'NMD R1 Prime Blue',
        img: featuredProduct4,
        origPrice: 5199,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        title: 'AirForce 1 White',
        img: featuredProduct5,
        origPrice: 4299,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        title: 'Air Jordan 1',
        img: featuredProduct6,
        origPrice: 4999,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 7,
        title: 'Air Presto',
        img: featuredProduct7,
        origPrice: 3999,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 8,
        title: 'Air Max 270',
        img: featuredProduct8,
        origPrice: 4199,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 9,
        title: 'Regiment L',
        img: newArrivals1,
        origPrice: 1999,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 10,
        title: 'Heria L',
        img: newArrivals2,
        origPrice: 1799,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 11,
        title: 'Marbella',
        img: newArrivals3,
        origPrice: 1799,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 12,
        title: 'Spin Cycle',
        img: newArrivals4,
        origPrice: 2199,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 13,
        title: 'Classic Leather',
        img: newArrivals5,
        origPrice: 4899,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 14,
        title: 'Classic Leather 1983 Vintage',
        img: newArrivals6,
        origPrice: 4699,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 15,
        title: 'Classic Nylon',
        img: newArrivals7,
        origPrice: 4395,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 16,
        title: 'Classic Leather Make It Yours',
        img: newArrivals8,
        origPrice: 4195,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

export const featuredProductsHome = [
    {
        id: 1,
        title: 'Superstar Black',
        img: featuredProduct1,
        origPrice: 5399,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        title: 'Superstar White',
        img: featuredProduct2,
        origPrice: 5399,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        title: 'Superstar Cloud White',
        img: featuredProduct3,
        origPrice: 4599,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        title: 'NMD R1 Prime Blue',
        img: featuredProduct4,
        origPrice: 5199,
        brand: 'adidas',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        title: 'AirForce 1 White',
        img: featuredProduct5,
        origPrice: 4299,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        title: 'Air Jordan 1',
        img: featuredProduct6,
        origPrice: 4999,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 7,
        title: 'Air Presto',
        img: featuredProduct7,
        origPrice: 3999,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 8,
        title: 'Air Max 270',
        img: featuredProduct8,
        origPrice: 4199,
        brand: 'nike',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    
];

export const newArrivalProducts = [
    {
        id: 9,
        title: 'Regiment L',
        img: newArrivals1,
        origPrice: 1999,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 10,
        title: 'Heria L',
        img: newArrivals2,
        origPrice: 1799,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 11,
        title: 'Marbella',
        img: newArrivals3,
        origPrice: 1799,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 12,
        title: 'Spin Cycle',
        img: newArrivals4,
        origPrice: 2199,
        brand: 'world balance',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 13,
        title: 'Classic Leather',
        img: newArrivals5,
        origPrice: 4899,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 14,
        title: 'Classic Leather 1983 Vintage',
        img: newArrivals6,
        origPrice: 4699,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 15,
        title: 'Classic Nylon',
        img: newArrivals7,
        origPrice: 4395,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 16,
        title: 'Classic Leather Make It Yours',
        img: newArrivals8,
        origPrice: 4195,
        brand: 'reebok',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

export const shoeSizes = [39,40,41.5,42,42.5,43,44,45];

// FOOTER DATA
export const socialIcons = [
    {
        icon:<BsFacebook className='text-black text-lg hover:text-button duration-300'/>,
        // link:,
    },
    {
        icon:<BsTwitter className='text-black text-lg hover:text-button duration-300'/>,
        // link:,
    },
    {
        icon:<BsInstagram className='text-black text-lg hover:text-button duration-300'/>,
        // link:,
    },
    {
        icon:<BsPinterest className='text-black text-lg hover:text-button duration-300'/>,
        // link:,
    },
    {
        icon:<BsYoutube className='text-black text-lg hover:text-button duration-300'/>,
        // link:,
    }
];

export const aboutUsLinks = [
    {
        title: 'About Us',
        link: '',
    },
    {
        title: 'Delivery Information',
        link: '',
    },
    {
        title: 'Privacy Policy',
        link: '',
    },
    {
        title: 'Terms and Conditions',
        link: '',
    },
    {
        title: 'Contact Us',
        link: '',
    },
];

export const myAccountLinks = [
    {
        title: 'Sign In',
        link: '',
    },
    {
        title: 'View Cart',
        link: '',
    },
    {
        title: 'My Wishlist',
        link: '',
    },
    {
        title: 'Track my order',
        link: '',
    },
    {
        title: 'Help',
        link: '',
    },
];

// BLOG DATA
export const blogData = [
    {
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        description: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
        image: blog1,
    },
    {
        title: 'How to Style a Quiff',
        description: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
        image: blog2,
    },
    {
        title: 'Must-Have Skater Girl Items',
        description: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
        image: blog3,
    },
    {
        title: 'Rundawy-Inspired Trends',
        description: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
        image: blog4,
    },
    {
        title: 'AW20 Menswear Trends',
        description: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
        image: blog5,
    },
];

// contact data
export const contactusData = [
    {
        icon: <BsMap className='text-xl'/>,
        description: "Gran Seville Subdivision, Manila S Rd, Cabuyao, 4025 Laguna",
    },
    {
        icon: <BsEnvelope className='text-xl'/>,
        description: "contact@example.com",
    },
    {
        icon: <BiPhone className='text-xl'/>,
        description: "+63-9123456789",
    },
    {
        icon: <BiTime className='text-xl'/>,
        description: "Monday to Saturday: 9:00 am to 5:00 pm",
    }
]