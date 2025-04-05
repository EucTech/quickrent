// create 14 dummy data for this
import {Images} from "../assets/index";

 interface PropertyPropsType {
  listingType: string;
  title: string;
  price: string;
  numOfBeds: string;
  numOfBaths: string;
  propertyMeter: string;
  location: string;
  images: string[];
}

 interface FeaturedPropsType {
  listingType: string;
  title: string;
  price: string;
  numOfBeds: string;
  numOfBaths: string;
  propertyMeter: string;
  location: string;
  image: string;
}

interface FindByLocationPropsType {
    image: string;
    location: string;
    numOfProperties: string;
  }


export const PropertyData: PropertyPropsType[] = [
    {
        listingType: "Sale",
        title: "Resort Valley Kigali",
        price: "1,200,000",
        numOfBeds: "5",
        numOfBaths: "4",
        propertyMeter: "5000 ",
        location: "Kigali, Rwanda",
        images: [
        Images.house1.src,
        Images.house2.src,
        Images.house3.src,
        Images.house4.src,
        ],
    },
    {
        listingType: "Rent",
        title: "Luxury Apartment in Dubai",
        price: "3,000",
        numOfBeds: "3",
        numOfBaths: "2",
        propertyMeter: "150 ",
        location: "Dubai, UAE",
        images: [
        Images.house5.src,
        Images.house6.src,
        Images.house7.src,
        Images.house8.src,
        ],
    },
    {
        listingType: "Sale",
        title: "Modern Villa in Los Angeles",
        price: "2,500,000",
        numOfBeds: "4",
        numOfBaths: "3",
        propertyMeter: "350 ",
        location: "Los Angeles, USA",
        images: [
        Images.house9.src,
        Images.house1.src,
        Images.house1.src,
        Images.house1.src
        ],
    },
    {
        listingType: "Rent",
        title: "Cozy Cottage in the Mountains",
        price: "1,200",
        numOfBeds: "2",
        numOfBaths: "1",
        propertyMeter: "80 ",
        location: "Aspen, Colorado, USA",
        images: [
        Images.house1.src,
        Images.house1.src,
        Images.house1.src, 
        Images.house2.src 
        ],
    },
    {
        listingType: "Sale",
        title: "Beachfront Property in Maldives",
        price: "5,000,000",
        numOfBeds: "6",
        numOfBaths: "5",
        propertyMeter: "600 ",
        location: "Maldives",
        images: [
        Images.house3.src,
        Images.house4.src,
        Images.house5.src,
        Images.house6.src,
        ],
    },
    {
        listingType: "Rent",
        title: "New York City",
        price: "10,000",
        numOfBeds: "3",
        numOfBaths: "3",
        propertyMeter: "200 ",
        location: "New York, USA",
        images: [
        Images.house7.src,
        Images.house8.src,
        Images.house9.src,
        Images.house1.src
        ],
    },
    {
        listingType: "Sale",
        title: "CharImages, cany",
        price: "1,800,000",
        numOfBeds: "4",
        numOfBaths: "2",
        propertyMeter: "300 ",
        location: "Tuscany, Italy",
        images: [
        Images.house1.src,
        Images.house1.src,
        Images.house1.src,
        Images.house1.src,
        ],
    },
    {
        listingType: "Rent",
        title: "Stylish Studio in Paris",
        price: "2,500",
        numOfBeds: "1",
        numOfBaths: "1",
        propertyMeter: "50 ",
        location: "Paris, France",
        images: [
        Images.house1.src,
        Images.house2.src,
        Images.house3.src,
        Images.house4.src,
        ],
    },
    {
        listingType: "Sale",
        title: "Luxury Condo in Singapore",
        price: "4,000,000",
        numOfBeds: "5",
        numOfBaths: "4",
        propertyMeter: "400 ",
        location: "Singapore",
        images: [
        Images.house5.src,
        Images.house6.src,
        Images.house7.src,
        Images.house8.src,
        ],
    },
];

export const FindByLocationData: FindByLocationPropsType[] = [
    {
        image: Images.house1.src,
        location: "Kigali, Rwanda",
        numOfProperties: "20",
    },
    {
        image: Images.house2.src,
        location: "Dubai, UAE",
        numOfProperties: "15",
    },
    {
        image: Images.house3.src,
        location: "Los Angeles, USA",
        numOfProperties: "10",
    },
    {
        image: Images.house4.src,
        location: "Aspen, Colorado, USA",
        numOfProperties: "5",
    },
    {
        image: Images.house5.src,
        location: "Maldives",
        numOfProperties: "8",
    },
    {
        image: Images.house6.src,
        location: "New York, USA",
        numOfProperties: "12",
    },
    {
        image: Images.house7.src,
        location: "Tuscany, Italy",
        numOfProperties: "7",
    },
    {
        image: Images.house8.src,
        location: "Paris, France",
        numOfProperties: "9",
    },
]


export const FeaturedData: FeaturedPropsType[] = [
    {
        listingType: "Sale",
        title: "Luxury Villa in Bali",
        price: "3,500,000",
        numOfBeds: "5",
        numOfBaths: "4",
        propertyMeter: "450 ",
        location: "Bali, Indonesia",
        image: Images.house1.src,
    },
    {
        listingType: "Rent",
        title: "Penthouse in Manhattan",
        price: "15,000",
        numOfBeds: "4",
        numOfBaths: "3",
        propertyMeter: "300 ",
        location: "New York, USA",
        image: Images.house2.src,
    },
    {
        listingType: "Sale",
        title: "Charming Cottage in the Countryside",
        price: "800,000",
        numOfBeds: "3",
        numOfBaths: "2",
        propertyMeter: "200 ",
        location: "Kent, UK",
        image: Images.house3.src,
    },
    {
        listingType: "Rent",
        title: "Modern Loft in Downtown",
        price: "4,000",
        numOfBeds: "2",
        numOfBaths: "2",
        propertyMeter: "120 ",
        location: "Chicago, USA",
        image: Images.house4.src,
    },
    {
        listingType: "Sale",
        title: "Seaside Villa in Amalfi Coast",
        price: "6,000,000",
        numOfBeds: "6",
        numOfBaths: "5",
        propertyMeter: "550 ",
        location: "Amalfi Coast, Italy",
        image: Images.house5.src,
    },
    {
        listingType: "Rent",
        title: "Stylish Apartment in Barcelona",
        price: "3,500",
        numOfBeds: "3",
        numOfBaths: "2",
        propertyMeter: "150 ",
        location: "Barcelona, Spain",
        image: Images.house6.src,
    },
    {
        listingType: "Sale",
        title: "Elegant Mansion in Beverly Hills",
        price: "10,000,000",
        numOfBeds: "7",
        numOfBaths: "8",
        propertyMeter: "1000 ",
        location: "Beverly Hills, USA",
        image: Images.house7.src,
    },
    {
        listingType: "Rent",
        title: "Cozy Cabin in the Woods",
        price: "2,000",
        numOfBeds: "2",
        numOfBaths: "1",
        propertyMeter: "80 ",
        location: "Whistler, Canada",
        image: Images.house8.src,
    },
]