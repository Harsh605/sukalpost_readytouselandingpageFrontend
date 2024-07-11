import React, { useEffect, useRef, useState } from "react";
import "./Ourservices.css";
import img1 from "../assets/images/projects/1725.jpg";
import img2 from "../assets/images/projects/Datingapp.jpg";
import img3 from "../assets/images/projects/astrology.jpg";
import img4 from "../assets/images/prod/MB/matir-app.jpg";
import img5 from "../assets/images/prod/MB/Socialmedia.jpg";
import img6 from "../assets/images/projects/lms2.jpg";
import img7 from "../assets/images/projects/fooddelivery.jpg";
import img8 from "../assets/images/projects/schoolmanagment app.jpg";
import img9 from "../assets/images/projects/clinicmanagement.jpg";
import img10 from "../assets/images/prod/MB/job portal app.jpg";
import img11 from "../assets/images/prod/MB/urban.jpg";
import img12 from "../assets/images/prod/MB/MLM.jpg";
import img13 from "../assets/images/projects/erpsoftwares.jpg";
import img14 from "../assets/images/prod/MB/recharge portal app.jpg";
import img15 from "../assets/images/projects/mlmsoftware.jpg";
import img16 from "../assets/images/projects/quizsystem.jpg";
import img17 from "../assets/images/projects/crmsoftware2.jpg";
import img18 from "../assets/images/projects/hrmsoftware2.png";
import img19 from "../assets/images/projects/hrmssoftware3.jpeg";
import img20 from "../assets/images/projects/accountingsoft.jpg";
import img21 from "../assets/images/projects/possoftware2.png";
import img22 from "../assets/images/projects/employeetracking2.jpg";
import img23 from "../assets/images/projects/inventorymanagementsystem.jpeg";
import img24 from "../assets/images/projects/warehousemanagementsystem.jpg";
import img25 from "../assets/images/prod/MB/university.jpg";
import img26 from "../assets/images/projects/lms2.jpg";
import img27 from "../assets/images/projects/coaching_big.png";
import img28 from "../assets/images/projects/librarymanagement.jpeg";
import img29 from "../assets/images/projects/newsportal.jpg";
import img30 from "../assets/images/projects/blogingwebsite.jpg";
import img31 from "../assets/images/projects/projectmanagement.jpg";
import img32 from "../assets/images/projects/taskmanagement.png";
import img33 from "../assets/images/projects/onlinestreaming.jpg";
import img34 from "../assets/images/projects/audiopodcast.jpeg";
import img35 from "../assets/images/projects/ebooksoftware.jpg";
import img36 from "../assets/images/projects/hospitalmanagement.jpg";
import img37 from "../assets/images/projects/labmanagement.avif";
import img38 from "../assets/images/projects/doctorappointment.jpg";
import img39 from "../assets/images/projects/pharmacymanagement.jpg";
import img40 from "../assets/images/prod/MB/ac.jpeg";
import img41 from "../assets/images/prod/MB/advocateManagement.jpg";
import img42 from "../assets/images/prod/MB/Affilate Managment System.jpg";
import img43 from "../assets/images/prod/MB/AlgoTradingApp.jpg";
import img44 from "../assets/images/prod/MB/bus booking app.jpg";
import img45 from "../assets/images/prod/MB/cab booking app.jpg";
import img46 from "../assets/images/prod/MB/cattle.png";
import img47 from "../assets/images/prod/MB/courierSystem.jpg";
import img48 from "../assets/images/prod/MB/crowdfunding.jpg";
import img49 from "../assets/images/prod/MB/CryptoTradingApp.jpg";
import img50 from "../assets/images/prod/MB/DairyFarmManager.jpg";
import img51 from "../assets/images/prod/MB/EVchargingapp.png";
import img52 from "../assets/images/prod/MB/eventManagement.jpg";
import img53 from "../assets/images/prod/MB/FlightBooking.jpg";
import img54 from "../assets/images/prod/MB/GarageWorkshopManagementSystem.jpg";
import img55 from "../assets/images/prod/MB/grocry app.jpg";
import img56 from "../assets/images/prod/MB/gym app.jpg";
import img57 from "../assets/images/prod/MB/hotel managment app.jpg";
import img58 from "../assets/images/prod/MB/LivestockManagement.jpg";
import img59 from "../assets/images/prod/MB/loan managment app.jpg";
import img60 from "../assets/images/prod/MB/looder booking app.jpg";
import img61 from "../assets/images/prod/MB/Logistic System.jpg";
import img62 from "../assets/images/prod/MB/MetaTrader_app.jpg";
import img63 from "../assets/images/prod/MB/movie app.png";
import img64 from "../assets/images/prod/MB/NGO Management.jpg";
import img65 from "../assets/images/prod/MB/property_dribbble.png";
import img66 from "../assets/images/prod/MB/pg app.jpg";
import img67 from "../assets/images/prod/MB/propertylist.jpg";
import img68 from "../assets/images/prod/MB/property_dribbble.png";
import img69 from "../assets/images/prod/MB/RealStateSoftware.jpg";
import img70 from "../assets/images/prod/MB/ride sharing app.jpg";
import img71 from "../assets/images/prod/MB/saloonManagement.png";
import img72 from "../assets/images/prod/MB/spaManagement.jpg";
import img73 from "../assets/images/prod/MB/sports.png";
import img74 from "../assets/images/prod/MB/tiffin.jpg";
import img75 from "../assets/images/prod/MB/trading app.png";
import img76 from "../assets/images/prod/MB/TravelBookingApp.jpg";
import img77 from "../assets/images/prod/MB/VehicleManagement.png";
import img78 from "../assets/images/prod/MB/VehicleTrackingApp.jpg";
import img79 from "../assets/images/blockchain/blockcahindevelopment.jpg";
import img80 from "../assets/images/blockchain/launchpad.webp";
import img81 from "../assets/images/blockchain/wallet.png";
import img82 from "../assets/images/blockchain/token.jpeg";
import img83 from "../assets/images/blockchain/defi.png";
import img84 from "../assets/images/blockchain/nft.jpeg";
import img85 from "../assets/images/blockchain/dex.png";
import img86 from "../assets/images/games/game (10).jpg";
import img87 from "../assets/images/games/game (14).jpg";
import img88 from "../assets/images/games/game (3).jpg";
import img89 from "../assets/images/games/game (16).jpg";
import img90 from "../assets/images/games/game (6).jpg";
import img91 from "../assets/images/games/game (15).jpg";
import img92 from "../assets/images/games/game.jpg";
import img93 from "../assets/images/games/game (12).jpg";
import img94 from "../assets/images/games/game (11).jpg";
import img95 from "../assets/images/games/game (2).jpg";
import img96 from "../assets/images/games/game (13).jpg";
import img97 from "../assets/images/games/game (19).jpg";
import img98 from "../assets/images/metaverse/eventplateform.jpg";
import img99 from "../assets/images/metaverse/launchpad.jpeg";
import img100 from "../assets/images/metaverse/metaversedevelop.png";
import img101 from "../assets/images/metaverse/nftmarketplace.png";
import img102 from "../assets/images/metaverse/realestate.jpeg";
import img103 from "../assets/images/metaverse/socialmedia.jpg";
import img104 from "../assets/images/metaverse/virtualland.jpg";
import img105 from "../assets/images/metaverse/virtualshowroom.jpg";
import img106 from "../assets/images/prod/MB/payment.jpg";
import img107 from "../assets/images/prod/MB/urban.jpg";
import img108 from "../assets/images/prod/MB/restaurant.jpg";
import img109 from "../assets/images/blockchain/smartcontarct.jpeg";
import img110 from "../assets/images/blockchain/supplychain.jpg";
// import img112 from "../assets/images/games/roullete.jpg"
import img113 from "../assets/images/games/game (7).jpg";
import img114 from "../assets/images/games/game (5).jpg";
// import img115 from "../assets/images/games/final (8).jpg"
import img116 from "../assets/images/games/game (18).jpg";
import img117 from "../assets/images/games/game (17).jpg";
import img118 from "../assets/images/games/game (9).jpg";
import img119 from "../assets/images/games/game (4).jpg";
import img120 from "../assets/images/games/game (8).jpg";

import imgage from "../assets/images/logo/metablock-logos-main.png";
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";
import brand4 from "../assets/img/brand4.png";
import brand5 from "../assets/img/brand5.webp";
import brand6 from "../assets/img/brand6.jpg";
import brand7 from "../assets/img/brand7.png";
import brand8 from "../assets/img/brand8.png";
import brand9 from "../assets/img/brand9.jpg";
import brand10 from "../assets/img/brand10.png";
import brand11 from "../assets/img/brand11.png";
import brand12 from "../assets/img/brand12.png";
import video2 from "../assets/images/video1.mp4";
import imagess from "../assets/images/new-metablock-scanner2.jpg";
import {
  FaHome,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaSkype,
} from "react-icons/fa";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPhoneCall,
  FiMessageCircle,
  FiMessageSquare,
} from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FaVideo } from "react-icons/fa";

import Timer from "./Timer";
import { Box } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { sendQuery } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const handleLocationClick = () => {};

  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [softwareName, setSoftwareName] = useState("");
  const [description, setDescription] = useState("");

  const [showContactForm, setShowContactForm] = useState(false);
  const dispatch = useDispatch();
  const handleSubmitQuery = (e) => {
    e.preventDefault();
    dispatch(sendQuery({ name, contactNo, softwareName, description })).then(
      () => {
        setShowContactForm(false);
        setShowSuccess(true);
      }
    );
  };

  const nameRef = useRef();
  const contactNoRef = useRef();
  const softwareRef = useRef();
  const descriptionRef = useRef();

  const handleContactFormOpen = () => {
    setShowContactForm(true);
  };

  const [showsuccces, setShowSuccess] = useState(false);

  const handleshowsuccess = () => {
    setShowSuccess(true);
  };

  const [showAdditionalButton, setShowAdditionalButton] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const name = nameRef.current.value;
  //   const contactNo = contactNoRef.current.value;
  //   const software = softwareRef.current.value;
  //   const description = descriptionRef.current.value;

  //   // Print the form data to the console
  //   console.log({
  //     name,
  //     contactNo,
  //     software,
  //     description
  //   });

  //   setShowContactForm(false)
  // };

  const navigate = useNavigate();

  const newportfolio = [
    {
      id: 1,
      category: ["SoftWare"],
      title: "E-Commerce Solution",
      image: img1,
      subtitle: "Build Your Online Empire Like Amazon and Flipkart !",
    },

    {
      id: 7,
      category: ["Application"],
      title: "Food Delivery App",
      image: img7,
      subtitle: "Build Your Online Food Dynasty Like Zomato and Swiggy !",
    },
    {
      id: 2,
      category: ["Application"],
      title: "Dating App",
      image: img2,
      subtitle: "Build Your Romantic Journey like Tinder and Bumble !",
    },
    {
      id: 3,
      category: ["Application"],
      title: "Astrology App",
      image: img3,
      subtitle:
        "Create Your Own Astrology Journey like AstroTalk and AstroSage !",
    },
    {
      id: 45,
      title: "Cab Booking App",
      image: img45,
      category: [],
      subtitle: "Build Your Travel Empire like Ola and Uber ! ",
    },

    {
      id: 5,
      category: ["SoftWare"],
      title: "Social Media Portal",
      image: img5,
      subtitle: "Build Your Social platfrom like Facebook and Instagram !",
    },
    {
      id: 13,
      category: ["SoftWare"],
      title: "ERP Software",
      image: img13,
      subtitle: "Create Your Business Backbone with Our ERP Solution !",
    },
    {
      id: 14,
      category: ["SoftWare"],
      title: "Recharge Portal",
      image: img14,
      subtitle: "Elevate Your Business with Our Recharge Software !",
    },

    {
      id: 6,
      category: ["SoftWare"],
      title: "LMS Software",
      image: img6,
      subtitle: "Build Your Educational Empire Like CYPHER and TalentLMS !",
    },
    {
      id: 4,
      category: ["SoftWare"],
      title: "Matrimonial Software",
      image: img4,
      subtitle:
        "Build Your Perfect Match Platform like Shaadi and Jeevansathi !",
    },

    {
      id: 11,
      category: ["SoftWare"],
      title: "Urban Services Software",
      image: img11,
      subtitle:
        "Building Better Service Booking Software: Inspired by Airtasker, Shifting, Cleaning ! ",
    },
    {
      id: 12,
      category: ["SoftWare"],
      title: "MLM Software",
      image: img12,
      subtitle:
        "Develop Your Own MLM Software: Empowering Entrepreneurs Everywhere !",
    },
    {
      id: 38,
      title: "Doctor Appointment System",
      image: img38,
      category: ["Software"],
      subtitle:
        "Build Your Own Doctor Appointment Booking System like NexHealth and Open Care !",
    },

    {
      id: 16,
      title: "Quiz System",
      image: img16,
      category: ["Application"],
      subtitle:
        "Launch Your Own Quiz System, Redefining Learning Experiences like Quizlet and Quizizz !",
    },
    {
      id: 10,
      category: ["SoftWare"],
      title: "Job Portal",
      image: img10,
      subtitle:
        "Create Your Own Job Portal, Shaping Career Futures like LinkedIn and Naukri.com !",
    },

    {
      id: 52,
      title: "Event Management Software",
      image: img52,
      category: ["SoftWare"],
      subtitle:
        "Develop Your Own Event Management Software, Redefining Event Planning like Cvent, Eventbrite !",
    },

    {
      id: 67,
      title: "Property Listing Software",
      image: img67,
      category: ["SoftWare"],
      subtitle:
        "Launch Your Own Listing Software, Simplifying Real Estate Transactions Like OLX, Buildium and MLS Software !",
    },
    {
      id: 47,
      title: "Courier Management System",
      image: img47,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Courier Management Software like Onfleet and ShipStation !",
    },

    {
      id: 108,
      category: ["SoftWare"],
      title: "Restaurant Management ",
      image: img108,
      subtitle:
        "Develop Your Own Restaurant Management Software like TouchBistro and Lightspeed restaurant !",
    },

    {
      id: 9,
      category: ["SoftWare"],
      title: "Clinic Management Software",
      image: img9,
      subtitle:
        "Develop your personalized AI-driven healthcare solution, tailored to your needs and surpassing industry standards !",
    },
    {
      id: 17,
      title: "CRM , HRMS , POS Software",
      image: img17,
      category: ["SoftWare"],
      subtitle:
        "Develop Your POS: Empower Your Business with Seamless Transaction Management, Inspired by Square POS !",
    },

    {
      id: 20,
      title: "Accounting Software",
      image: img20,
      category: ["SoftWare"],
      subtitle:
        "Develop Your Own Accounting & Billing Software: Redefining Financial Management! like Xero and Freshbooks !",
    },
    {
      id: 57,
      title: "Hotel Management Software",
      image: img57,
      category: ["SoftWare"],
      subtitle:
        "Create Your Own Hotel Management Software: Transforming Guest Experiences like Hotelogix  and Cheerze Connect !",
    },
    {
      id: 76,
      title: "Travel Booking Software",
      image: img76,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Travel Booking Software: Simplifying Journey Planning like MakeMy Trip and goibibo.com !",
    },
    {
      id: 43,
      title: "Algo Trading Software",
      image: img43,
      category: ["SoftWare"],
      subtitle:
        "Craft Your Algo Trading Platform: Inspired by MetaTrader 4 (MT4) and MT5, Empowering Your Trading Journey !",
    },
    {
      id: 59,
      title: "Loan Management System",
      image: img59,
      category: ["SoftWare"],
      subtitle:
        "Launch Your Own Loan Management System: Simplifying Borrowing Processes like LoanPro and TurnKey Lender !",
    },
    {
      id: 42,
      title: "Affilate Management System",
      image: img42,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Affiliate Management Software: Optimizing Marketing Channels !",
    },
    {
      id: 74,
      title: "Tiffin Center Management",
      image: img74,
      category: ["SoftWare"],
      subtitle:
        "Design Your Tiffin Management System: Inspired by Tiffindaily and Eatatos,  Meal Services for Your Business !",
    },

    {
      id: 33,
      title: "Online Streaming App",
      image: img33,
      category: ["Application"],
      subtitle:
        "Develop Your Own Online Streaming Platform Like Netflix and Hulu !",
    },
    {
      id: 55,
      title: "Grocery Delivery App",
      image: img55,
      category: ["Application"],
      subtitle:
        "Create a Grocery Delivery Platform Like Bigbasket and FreshDirect !",
    },
    {
      id: 106,
      category: ["Application"],
      title: "Payment Application",
      image: img106,
      subtitle:
        "Build Your Own Payment Platform Like Cash App and Google Pay !",
    },
    {
      id: 26,
      title: "LMS Application",
      image: img26,
      category: ["Application"],
      subtitle: "Build Your Educational Empire Like CYPHER and TalentLMS !",
    },
    {
      id: 107,
      category: ["Application"],
      title: "Urban Services Application",
      image: img107,
      subtitle:
        "Building Better Service Booking Software: Inspired by Airtasker, Shifting, Cleaning ! ",
    },

    {
      id: 44,
      title: "Bus Booking System",
      image: img44,
      category: ["Application"],
      subtitle: "Build a Bus Booking App Like RedBus and Goibibo.com !",
    },
    {
      id: 22,
      title: "Field Employee App",
      image: img22,
      category: ["Application"],
      subtitle: "Build a Field Tracking App Like FieldPulse and Skedulo !",
    },

    {
      id: 70,
      title: "Ride Sharing App",
      image: img70,
      category: ["Application"],
      subtitle: "Build a Ride Sharing App Like  Rapido, Uber  and Lyft!",
    },
    {
      id: 60,
      title: "Lodder Booking App",
      image: img60,
      category: ["Application"],
      subtitle:
        "Develop Your Own Lodder Booking App Like Lalamove and Porter !",
    },

    {
      id: 18,
      title: "HRM Software",
      image: img18,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 23,
      title: "Inventory Software",
      image: img23,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 24,
      title: "WareHouse Software",
      image: img24,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 25,
      title: "University Management Software",
      image: img25,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 27,
      title: "Coaching Management Software",
      image: img27,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 28,
      title: "Library Management System",
      image: img28,
      category: ["SoftWare"],
      subtitle: "Create a Library Management System Like Koha and Evergreen !",
    },
    {
      id: 29,
      title: "News Portal Software",
      image: img29,
      category: ["SoftWare"],
      subtitle:
        "Create a News Portal Like CNN and BBC to Keep Your Audience Informed !",
    },
    {
      id: 30,
      title: "Blogging Website",
      image: img30,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 31,
      title: "Project Management System",
      image: img31,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 32,
      title: "Task Management",
      image: img32,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 8,
      category: ["SoftWare"],
      title: "School Management",
      image: img8,
      subtitle:
        "Develop a School Management Platform Like MySchool and Gradelink !",
    },
    {
      id: 34,
      title: "Audio Podcast Software",
      image: img34,
      category: ["SoftWare"],
      subtitle: "Develop Audio Podcast Software Like Spotify and Anchor !",
    },
    {
      id: 35,
      title: "E-Book Software",
      image: img35,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 36,
      title: "Hospital Management Software",
      image: img36,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 37,
      title: "Lab Management Software",
      image: img37,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 39,
      title: "Pharmacy Management",
      image: img39,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 40,
      title: "AC Repairing App",
      image: img40,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 41,
      title: "Advocate Management Software",
      image: img41,
      category: ["SoftWare"],
      subtitle: "",
    },

    // {
    //   id: 15,
    //   category: ["SoftWare"],
    //   title: 'MLM SoftWare',
    //   image: img15,
    //   subtitle: 'Develop Your Own MLM Software, Empowering Entrepreneurs Everywhere'
    // },

    {
      id: 46,
      title: "Cattle Management System",
      image: img46,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 48,
      title: "Crowdfunding Software",
      image: img48,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 49,
      title: "Crypto Trading App",
      image: img49,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 50,
      title: "Dairy Farm Management",
      image: img50,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 51,
      title: "EV Charging App",
      image: img51,
      category: ["Application"],
      subtitle: "Create an EV Charging Station App Like Blink and Greenlots !",
    },

    {
      id: 53,
      title: "Flight Booking App",
      image: img53,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 54,
      title: "Garage Workshop Software",
      image: img54,
      category: ["SoftWare"],
      subtitle:
        "Manage Your Garage Like a Pro with Software Like Shop-Ware and Tekmetric !",
    },

    {
      id: 56,
      title: "Gym Management System",
      image: img56,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Gym Management Software Like Zenoti and ClubReady !",
    },

    {
      id: 58,
      title: "LiveStock Management System",
      image: img58,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 61,
      title: "Logistic Management Software",
      image: img61,
      category: ["SoftWare"],
      subtitle: " ",
    },
    {
      id: 62,
      title: "Metatrade Trading App",
      image: img62,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 63,
      title: "Movie Ticket Booking",
      image: img63,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 64,
      title: "NGO Management Software",
      image: img64,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 65,
      title: "Property Management",
      image: img65,
      category: ["SoftWare"],
      subtitle:
        "Build Property Management Software Like MagicBricks and Zillow Rental Manager !",
    },
    {
      id: 66,
      title: "PG Management Software",
      image: img66,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 69,
      title: "Real EState Software",
      image: img69,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 71,
      title: "Saloon Management App",
      image: img71,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 72,
      title: "Spa Management System",
      image: img72,
      category: ["SoftWare"],
      subtitle: "SoftWare",
    },
    {
      id: 73,
      title: "Sport Management Software",
      image: img73,
      category: ["SoftWare"],
      subtitle:
        "Develop Your Own Sports Management Software Like CoachUp and Active Network !",
    },

    {
      id: 75,
      title: "Trading App",
      image: img75,
      category: ["Application"],
      subtitle: "",
    },

    {
      id: 77,
      title: "Vehicle Management System",
      image: img77,
      category: ["SoftWare"],
      subtitle: "Develop a Vehicle Management System Like Fleetio and Azuga !",
    },
    {
      id: 78,
      title: "Vehicle Tracking Software",
      image: img78,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 79,
      category: ["Blockchain"],
      title: "Blockchain Development",
      image: img79,
      subtitle: "",
    },
    {
      id: 82,
      category: ["Blockchain"],
      title: "Token Development",
      image: img82,
      subtitle: "",
    },
    {
      id: 85,
      category: ["Blockchain"],
      title: "Dex Development",
      image: img85,
      subtitle: "",
    },
    {
      id: 80,
      category: ["Blockchain"],
      title: "Decentralised MLM Software",
      image: img80,
      subtitle: "",
    },
    {
      id: 84,
      category: ["Blockchain"],
      title: "NFT Marketplace Development",
      image: img84,
      subtitle: "",
    },
    {
      id: 109,
      category: ["Blockchain"],
      title: "Smart Contract Development",
      image: img109,
      subtitle: "",
    },
    {
      id: 81,
      category: ["Blockchain"],
      title: "Wallet Development",
      image: img81,
      subtitle: "",
    },

    {
      id: 83,
      category: ["Blockchain"],
      title: "Defi Development",
      image: img83,
      subtitle: "",
    },

    {
      id: 110,
      category: ["Blockchain"],
      title: "Supplychain Management",
      image: img110,
      subtitle: "",
    },

    {
      id: 92,
      category: ["Games"],
      title: "Ludo Game development",
      image: img92,
      subtitle: "",
    },
    {
      id: 92,
      category: ["Games"],
      title: "Aviator Game Development",
      image: img92,
      subtitle: "",
    },
    {
      id: 95,
      category: ["Games"],
      title: "Lottery Game Development",
      image: img95,
      subtitle: "",
    },
    {
      id: 88,
      category: ["Games"],
      title: "Wingo or Colour Prediction Game",
      image: img88,
      subtitle: "",
    },
    {
      id: 90,
      category: ["Games"],
      title: "All in one Casino Game Development",
      image: img90,
      subtitle: "",
    },
    {
      id: 94,
      category: ["Games"],
      title: "Tiranga Game Development",
      image: img94,
      subtitle: "",
    },

    {
      id: 86,
      category: ["Games"],
      title: "BDG Game Devlopment",
      image: img86,
      subtitle: "",
    },

    {
      id: 96,
      category: ["Games"],
      title: "Goa Game Development",
      image: img96,
      subtitle: "",
    },

    {
      id: 93,
      category: ["Games"],
      title: "91 Club Game Development",
      image: img93,
      subtitle: "",
    },
    {
      id: 97,
      category: ["Games"],
      title: "Ludo Game Development",
      image: img97,
      subtitle: "",
    },

    {
      id: 87,
      category: ["Games"],
      title: "Teen Patti Game Development",
      image: img87,
      subtitle: "",
    },
    {
      id: 89,
      category: ["Games"],
      title: "Fantasy Cricket Game like Dream11",
      image: img89,
      subtitle: "",
    },
    {
      id: 118,
      category: ["Games"],
      title: "Dragon Tiger Game Development",
      image: img118,
      subtitle: "",
    },
    {
      id: 119,
      category: ["Games"],
      title: "Rummy Game Development ",
      image: img119,
      subtitle: "",
    },
    {
      id: 120,
      category: ["Games"],
      title: "Ludo Game Development ( Room Code )",
      image: img120,
      subtitle: "",
    },

    {
      id: 91,
      category: ["Games"],
      title: "Tournament Development",
      image: img91,
      subtitle: "",
    },
    {
      id: 113,
      category: ["Games"],
      title: "Fastwin Game Development",
      image: img113,
      subtitle: "",
    },
    {
      id: 114,
      category: ["Games"],
      title: "Roulette Game Development",
      image: img114,
      subtitle: "",
    },

    {
      id: 116,
      category: ["Games"],
      title: "Skill Game Development",
      image: img116,
      subtitle: "",
    },
    {
      id: 117,
      category: ["Games"],
      title: "Metaverse Game Development",
      image: img117,
      subtitle: "",
    },
    {
      id: 100,
      category: ["Metaverse"],
      title: "Metaverse Development",
      image: img100,
      subtitle: "",
    },
    {
      id: 105,
      category: ["Metaverse"],
      title: "Metaverse Virtual Showroom",
      image: img105,
      subtitle: "",
    },
    {
      id: 104,
      category: ["Metaverse"],
      title: "Virtual Academic Classes",
      image: img104,
      subtitle: "",
    },

    {
      id: 101,
      category: ["Metaverse"],
      title: "Metaverse Avatar Development ",
      image: img101,
      subtitle: "",
    },
    {
      id: 98,
      category: ["Metaverse"],
      title: "Metaverse Event Plateform",
      image: img98,
      subtitle: "",
    },
    {
      id: 103,
      category: ["Metaverse"],
      title: "Social Media Platform",
      image: img103,
      subtitle: "",
    },
    {
      id: 102,
      category: ["Metaverse"],
      title: "Metaverse Real State",
      image: img102,
      subtitle: "",
    },
    {
      id: 99,
      category: ["Metaverse"],
      title: "Launchpad Development",
      image: img99,
      subtitle: "",
    },
  ];

  const portfolioItems = [
    {
      id: 5,
      category: ["SoftWare"],
      title: "Social Media Portal",
      image: img5,
      subtitle: "Build Your Social platfrom like Facebook and Instagram !",
    },
    {
      id: 1,
      category: ["SoftWare"],
      title: "E-Commerce Solution",
      image: img1,
      subtitle: "Build Your Online Empire Like Amazon and Flipkart !",
    },

    {
      id: 6,
      category: ["SoftWare"],
      title: "LMS Software",
      image: img6,
      subtitle: "Build Your Educational Empire Like CYPHER and TalentLMS !",
    },

    {
      id: 12,
      category: ["SoftWare"],
      title: "MLM Software",
      image: img12,
      subtitle:
        "Develop Your Own MLM Software: Empowering Entrepreneurs Everywhere !",
    },

    {
      id: 14,
      category: ["SoftWare"],
      title: "Recharge Portal",
      image: img14,
      subtitle: "Elevate Your Business with Our Recharge Software !",
    },
    {
      id: 11,
      category: ["SoftWare"],
      title: "Urban Services Software",
      image: img11,
      subtitle:
        "Building Better Service Booking Software: Inspired by Airtasker, Shifting, Cleaning ! ",
    },
    {
      id: 108,
      category: ["SoftWare"],
      title: "Restaurant Management  ",
      image: img108,
      subtitle:
        "Develop Your Own Restaurant Management Software like TouchBistro and Lightspeed restaurant !",
    },

    {
      id: 10,
      category: ["SoftWare"],
      title: "Job Portal",
      image: img10,
      subtitle:
        "Create Your Own Job Portal, Shaping Career Futures like LinkedIn and Naukri.com !",
    },
    {
      id: 9,
      category: ["SoftWare"],
      title: "Clinic Management Software",
      image: img9,
      subtitle:
        "Build Your Own Clinic Management Software  like QMarksoft Clinic Management and AdvancedMD !",
    },
    {
      id: 17,
      title: "CRM , HRMS , POS Software",
      image: img17,
      category: ["SoftWare"],
      subtitle:
        "Develop Your POS: Empower Your Business with Seamless Transaction Management, Inspired by Square POS !",
    },
    {
      id: 76,
      title: "Travel Booking Software",
      image: img76,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Travel Booking Software: Simplifying Journey Planning like MakeMy Trip and goibibo.com !",
    },

    {
      id: 20,
      title: "Accounting  Software",
      image: img20,
      category: ["SoftWare"],
      subtitle:
        "Develop Your Own Accounting & Billing Software: Redefining Financial Management! like Xero and Freshbooks !",
    },

    {
      id: 42,
      title: "Affilate Management System",
      image: img42,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Affiliate Management Software: Optimizing Marketing Channels !",
    },

    {
      id: 13,
      category: ["SoftWare"],
      title: "ERP Software",
      image: img13,
      subtitle: "Create Your Business Backbone with Our ERP Solution !",
    },

    {
      id: 43,
      title: "Algo Trading Software",
      image: img43,
      category: ["SoftWare"],
      subtitle:
        "Craft Your Algo Trading Platform: Inspired by MetaTrader 4 (MT4) and MT5, Empowering Your Trading Journey !",
    },
    {
      id: 59,
      title: "Loan Management System",
      image: img59,
      category: ["SoftWare"],
      subtitle:
        "Launch Your Own Loan Management System: Simplifying Borrowing Processes like LoanPro and TurnKey Lender !",
    },
    {
      id: 57,
      title: "Hotel Management Software",
      image: img57,
      category: ["SoftWare"],
      subtitle:
        "Create Your Own Hotel Management Software: Transforming Guest Experiences like Hotelogix  and Cheerze Connect !",
    },

    {
      id: 74,
      title: "Tiffin Center Management",
      image: img74,
      category: ["SoftWare"],
      subtitle:
        "Design Your Tiffin Management System: Inspired by Tiffindaily and Eatatos,  Meal Services for Your Business !",
    },

    {
      id: 7,
      category: ["Application"],
      title: "Food Delivery App",
      image: img7,
      subtitle: "Build Your Online Food Dynasty Like Zomato and Swiggy !",
    },
    {
      id: 45,
      title: "Cab Booking App",
      image: img45,
      category: ["Application"],
      subtitle: "Build Your Travel Empire like Ola and Uber ! ",
    },
    {
      id: 3,
      category: ["Application"],
      title: "Astrology App",
      image: img3,
      subtitle:
        "Create Your Own Astrology Journey like AstroTalk and AstroSage !",
    },
    {
      id: 2,
      category: ["Application"],
      title: "Dating App",
      image: img2,
      subtitle: "Build Your Romantic Journey like Tinder and Bumble !",
    },
    {
      id: 5,
      category: ["Application"],
      title: "Social Media Application",
      image: img5,
      subtitle: "Build Your Social platfrom like Facebook and Instagram !",
    },
    {
      id: 33,
      title: "Online Streaming App",
      image: img33,
      category: ["Application"],
      subtitle:
        "Develop Your Own Online Streaming Platform Like Netflix and Hulu !",
    },
    {
      id: 55,
      title: "Grocery Delivery App",
      image: img55,
      category: ["Application"],
      subtitle:
        "Create a Grocery Delivery Platform Like Bigbasket and FreshDirect !",
    },
    {
      id: 106,
      category: ["Application"],
      title: "Payment Application",
      image: img106,
      subtitle:
        "Build Your Own Payment Platform Like Cash App and Google Pay !",
    },
    {
      id: 26,
      title: "LMS Application",
      image: img26,
      category: ["Application"],
      subtitle: "Build Your Educational Empire Like CYPHER and TalentLMS !",
    },
    {
      id: 107,
      category: ["Application"],
      title: "Urban Services Application",
      image: img107,
      subtitle:
        "Building Better Service Booking Software: Inspired by Airtasker, Shifting, Cleaning ! ",
    },

    {
      id: 44,
      title: "Bus Booking System",
      image: img44,
      category: ["Application"],
      subtitle: "Build a Bus Booking App Like RedBus and Goibibo.com !",
    },
    {
      id: 22,
      title: "Field Employee App",
      image: img22,
      category: ["Application"],
      subtitle: "Build a Field Tracking App Like FieldPulse and Skedulo !",
    },
    {
      id: 16,
      title: "Quiz System",
      image: img16,
      category: ["Application"],
      subtitle:
        "Launch Your Own Quiz System, Redefining Learning Experiences like Quizlet and Quizizz !",
    },

    {
      id: 70,
      title: "Ride Sharing App",
      image: img70,
      category: ["Application"],
      subtitle: "Build a Ride Sharing App Like Rapido, Uber and Lyft !",
    },
    {
      id: 60,
      title: "Lodder Booking App",
      image: img60,
      category: ["Application"],
      subtitle:
        "Develop Your Own Lodder Booking App Like Lalamove and Porter !",
    },

    {
      id: 4,
      category: ["SoftWare"],
      title: "Matrimonial Software",
      image: img4,
      subtitle:
        "Build Your Perfect Match Platform like Shaadi and Jeevansathi !",
    },

    {
      id: 38,
      title: "Doctor Appointment System",
      image: img38,
      category: ["Software"],
      subtitle:
        "Build Your Own Doctor Appointment Booking System like NexHealth and Open Care !",
    },

    {
      id: 52,
      title: "Event Management Software",
      image: img52,
      category: ["SoftWare"],
      subtitle:
        "Develop Your Own Event Management Software, Redefining Event Planning like Cvent, Eventbrite !",
    },

    {
      id: 67,
      title: "Property Listing Software",
      image: img67,
      category: ["SoftWare"],
      subtitle:
        "Launch Your Own Listing Software, Simplifying Real Estate Transactions Like OLX, Buildium and MLS Software !",
    },
    {
      id: 47,
      title: "Courier Management System",
      image: img47,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Courier Management Software like Onfleet and ShipStation !",
    },

    {
      id: 18,
      title: "HRM Software",
      image: img18,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 23,
      title: "Inventory Software",
      image: img23,
      category: ["SoftWare"],
      subtitle: " ",
    },
    {
      id: 24,
      title: "WareHouse Software",
      image: img24,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 25,
      title: "University Management Software",
      image: img25,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 27,
      title: "Coaching Management Software",
      image: img27,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 28,
      title: "Library Management System",
      image: img28,
      category: ["SoftWare"],
      subtitle: "Create a Library Management System Like Koha and Evergreen !",
    },
    {
      id: 29,
      title: "News Portal Software",
      image: img29,
      category: ["SoftWare"],
      subtitle:
        "Create a News Portal Like CNN and BBC to Keep Your Audience Informed !",
    },
    {
      id: 30,
      title: "Blogging Website",
      image: img30,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 31,
      title: "Project Management System",
      image: img31,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 32,
      title: "Task Management",
      image: img32,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 8,
      category: ["SoftWare"],
      title: "School Management",
      image: img8,
      subtitle:
        "Develop a School Management Platform Like MySchool and Gradelink !",
    },
    {
      id: 34,
      title: "Audio Podcast Software",
      image: img34,
      category: ["SoftWare"],
      subtitle: "Develop Audio Podcast Software Like Spotify and Anchor !",
    },
    {
      id: 35,
      title: "E-Book Software",
      image: img35,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 36,
      title: "Hospital Management Software",
      image: img36,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 37,
      title: "Lab Management",
      image: img37,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 39,
      title: "Pharmacy Management",
      image: img39,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 40,
      title: "AC Repairing",
      image: img40,
      category: [],
      subtitle: "",
    },
    {
      id: 41,
      title: "Advocate Management Software",
      image: img41,
      category: ["SoftWare"],
      subtitle: "",
    },

    // {
    //   id: 15,
    //   category: ["SoftWare"],
    //   title: 'MLM SoftWare',
    //   image: img15,
    //   subtitle: 'Develop Your Own MLM Software, Empowering Entrepreneurs Everywhere'
    // },

    {
      id: 46,
      title: "Cattle Management System",
      image: img46,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 48,
      title: "Crowdfunding Software",
      image: img48,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 49,
      title: "Crypto Trading App",
      image: img49,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 50,
      title: "Dairy Farm Management",
      image: img50,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 51,
      title: "EV Charging App",
      image: img51,
      category: ["Application"],
      subtitle: "Create an EV Charging Station App Like Blink and Greenlots !",
    },

    {
      id: 53,
      title: "Flight Booking App",
      image: img53,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 54,
      title: "Garage Workshop Software",
      image: img54,
      category: ["SoftWare"],
      subtitle:
        "Manage Your Garage Like a Pro with Software Like Shop-Ware and Tekmetric !",
    },

    {
      id: 56,
      title: "Gym Management System",
      image: img56,
      category: ["SoftWare"],
      subtitle:
        "Build Your Own Gym Management Software Like Zenoti and ClubReady !",
    },

    {
      id: 58,
      title: "LiveStock Management System",
      image: img58,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 61,
      title: "Logistic Management Software",
      image: img61,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 62,
      title: "Metatrade Trading App",
      image: img62,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 63,
      title: "Movie Ticket Booking",
      image: img63,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 64,
      title: "NGO Management Software",
      image: img64,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 65,
      title: "Property Management",
      image: img65,
      category: ["SoftWare"],
      subtitle:
        "Build Property Management Software Like MagicBricks and Zillow Rental Manager !",
    },
    {
      id: 66,
      title: "PG Management Software",
      image: img66,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 69,
      title: "Real EState Software",
      image: img69,
      category: ["SoftWare"],
      subtitle: "",
    },

    {
      id: 71,
      title: "Saloon Management App",
      image: img71,
      category: ["Application"],
      subtitle: "",
    },
    {
      id: 72,
      title: "Spa Management System",
      image: img72,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 73,
      title: "Sport Management Software",
      image: img73,
      category: ["SoftWare"],
      subtitle:
        "Develop Your Own Sports Management Software Like CoachUp and Active Network !",
    },

    {
      id: 75,
      title: "Trading App",
      image: img75,
      category: ["Application"],
      subtitle: "",
    },

    {
      id: 77,
      title: "Vehicle Management System",
      image: img77,
      category: ["SoftWare"],
      subtitle: "Develop a Vehicle Management System Like Fleetio and Azuga.",
    },
    {
      id: 78,
      title: "Vehicle Tracking Software",
      image: img78,
      category: ["SoftWare"],
      subtitle: "",
    },
    {
      id: 79,
      category: ["Blockchain"],
      title: "Blockchain Development",
      image: img79,
      subtitle: "",
    },
    {
      id: 82,
      category: ["Blockchain"],
      title: "Token Development",
      image: img82,
      subtitle: "",
    },
    {
      id: 85,
      category: ["Blockchain"],
      title: "Dex Development",
      image: img85,
      subtitle: "",
    },
    {
      id: 80,
      category: ["Blockchain"],
      title: "Decentralised MLM Software",
      image: img80,
      subtitle: "",
    },
    {
      id: 84,
      category: ["Blockchain"],
      title: "NFT Marketplace Development",
      image: img84,
      subtitle: "",
    },
    {
      id: 109,
      category: ["Blockchain"],
      title: "Smart Contract Development",
      image: img109,
      subtitle: "",
    },
    {
      id: 81,
      category: ["Blockchain"],
      title: "Wallet Development",
      image: img81,
      subtitle: "",
    },

    {
      id: 83,
      category: ["Blockchain"],
      title: "Defi Development",
      image: img83,
      subtitle: "",
    },

    {
      id: 110,
      category: ["Blockchain"],
      title: "Supplychain Management",
      image: img110,
      subtitle: "",
    },

    {
      id: 92,
      category: ["Games"],
      title: "Aviator Game Development",
      image: img92,
      subtitle: "",
    },
    {
      id: 95,
      category: ["Games"],
      title: "Lottery Game Development",
      image: img95,
      subtitle: "",
    },
    {
      id: 88,
      category: ["Games"],
      title: "Wingo or Colour Prediction Game",
      image: img88,
      subtitle: "",
    },
    {
      id: 90,
      category: ["Games"],
      title: "All in one Casino Game Development",
      image: img90,
      subtitle: "",
    },
    {
      id: 94,
      category: ["Games"],
      title: "Tiranga Game Development",
      image: img94,
      subtitle: "",
    },

    {
      id: 86,
      category: ["Games"],
      title: "BDG Game Devlopment",
      image: img86,
      subtitle: "",
    },

    {
      id: 96,
      category: ["Games"],
      title: "Goa Game Development",
      image: img96,
      subtitle: "",
    },

    {
      id: 93,
      category: ["Games"],
      title: "91 Club Game Development",
      image: img93,
      subtitle: "",
    },
    {
      id: 97,
      category: ["Games"],
      title: "Ludo Game Development",
      image: img97,
      subtitle: "",
    },

    {
      id: 87,
      category: ["Games"],
      title: "Teen Patti Game Development",
      image: img87,
      subtitle: "",
    },
    {
      id: 89,
      category: ["Games"],
      title: "Fantasy Cricket Game like Dream11",
      image: img89,
      subtitle: "",
    },
    {
      id: 118,
      category: ["Games"],
      title: "Dragon Tiger Game Development",
      image: img118,
      subtitle: "",
    },
    {
      id: 119,
      category: ["Games"],
      title: "Rummy Game Development ",
      image: img119,
      subtitle: "",
    },
    {
      id: 120,
      category: ["Games"],
      title: "Ludo Game Development ( Room Code )",
      image: img120,
      subtitle: "",
    },

    {
      id: 91,
      category: ["Games"],
      title: "Tournament Development",
      image: img91,
      subtitle: "",
    },
    {
      id: 113,
      category: ["Games"],
      title: "Fastwin Game Development",
      image: img113,
      subtitle: "",
    },
    {
      id: 114,
      category: ["Games"],
      title: "Roulette Game Development",
      image: img114,
      subtitle: "",
    },

    {
      id: 116,
      category: ["Games"],
      title: "Skill Game Development",
      image: img116,
      subtitle: "",
    },
    {
      id: 117,
      category: ["Games"],
      title: "Metaverse Game Development",
      image: img117,
      subtitle: "",
    },

    {
      id: 100,
      category: ["Metaverse"],
      title: "Metaverse Development",
      image: img100,
      subtitle: "",
    },
    {
      id: 105,
      category: ["Metaverse"],
      title: "Metaverse Virtual Showroom",
      image: img105,
      subtitle: "",
    },
    {
      id: 104,
      category: ["Metaverse"],
      title: "Virtual Academic Classes",
      image: img104,
      subtitle: "",
    },

    {
      id: 101,
      category: ["Metaverse"],
      title: "Metaverse Avatar Development ",
      image: img101,
      subtitle: "",
    },
    {
      id: 98,
      category: ["Metaverse"],
      title: "Metaverse Event Plateform",
      image: img98,
      subtitle: "",
    },
    {
      id: 103,
      category: ["Metaverse"],
      title: "Social Media Platform",
      image: img103,
      subtitle: "",
    },
    {
      id: 102,
      category: ["Metaverse"],
      title: "Metaverse Real State",
      image: img102,
      subtitle: "",
    },
    {
      id: 99,
      category: ["Metaverse"],
      title: "Launchpad Development",
      image: img99,
      subtitle: "",
    },
  ];

  const brands = [
    {
      image: brand1,
    },
    {
      image: brand2,
    },
    {
      image: brand3,
    },
    {
      image: brand4,
    },
    {
      image: brand5,
    },
    {
      image: brand6,
    },
  ];

  const brands2 = [
    {
      image: brand7,
    },
    {
      image: brand8,
    },
    {
      image: brand9,
    },
    {
      image: brand10,
    },
    {
      image: brand11,
    },
    {
      image: brand12,
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayAllItems, setDisplayAllItems] = useState(true);
  const [displayCount, setDisplayCount] = useState(18);

  const displayCounts = {
    Application: 15,
    SoftWare: 18,
    Blockchain: 9,
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayAllItems(true); // Set displayAllItems to true when changing the category
  };

  const softwareDisplayCount =
    selectedCategory in displayCounts
      ? displayCounts[selectedCategory]
      : displayCount;

  const itemIdToShowInAllCategory = [
    1, 7, 2, 3, 45, 5, 13, 14, 6, 4, 11, 38, 12, 16, 10, 52, 67, 47,
  ];

  const filteredPortfolioItems =
    selectedCategory === "All"
      ? displayAllItems
        ? newportfolio
            .filter((item) => itemIdToShowInAllCategory.includes(item.id))
            .slice(0, 18)
        : newportfolio
      : !displayAllItems
      ? portfolioItems.filter((item) =>
          item.category.includes(selectedCategory)
        )
      : portfolioItems
          .filter((item) => item.category.includes(selectedCategory))
          .slice(0, softwareDisplayCount);

  const handleViewToggle = () => {
    if (
      selectedCategory === "Blockchain" ||
      selectedCategory === "Metaverse" ||
      selectedCategory === "Games" ||
      selectedCategory === "Application"
    ) {
      setSelectedCategory("All");
    }
    setDisplayAllItems(!displayAllItems);
  };

  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleKnowMoreClick = () => {
    setShowContactForm(true);
  };

  const words = [
    "E-Commerce Website",
    "Dating App",
    "Astrology App",
    "Matrimonial Software",
    "Social Media Portal",
    "LMS Software",
    "Food Delivery App",
    "School Management Software",
    "Clinic Management Software",
    "Job Portal",
    "Recharge Portal",
    "MLM Software",
    "ERP Software",
    "HRMS Software",
    "Accounting Software",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the word index
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-home">
      <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="header-left">
                <div className="landing-logo">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    <img src={imgage} alt="Metablock Logo" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <div className="header-right"></div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Slider Area  */}
      <div
        style={{ backgroundSize: "cover" }}
        className="slider-area slider-style-1 variation-default bg_image  height-950 d-flex align-items-center bg_image--23"
        id="home"
        data-black-overlay={7}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 style={{ marginTop: "20vh" }} className="title display-one">
                  Build Your Software
                  <br />
                  <span className="">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        {words.map((word, index) => (
                          <b
                            key={index}
                            className={
                              index === currentIndex
                                ? "is-visible theme-gradient"
                                : "is-hidden theme-gradient"
                            }
                          >
                            {word}
                          </b>
                        ))}
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="description">
                  Maximize Your Business's Success with Our Ready-to-Use
                  Software Solutions !
                </p>
                <div className="button-group mt--30">
                  <a
                    onClick={handleContactFormOpen}
                    style={{ cursor: "pointer" }}
                    className="btn-default round btn-large"
                  >
                    GET STARTED NOW!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Service-5 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Portfolio Area  */}
      <div
        className="rainbow-portfolio-area rainbow-section-gap masonary-wrapper-activation"
        id="projects"
      >
        <div className="container">
          <div className="w-100 d-flex align-items-center justify-content-center flex-column ready-use">
            <h3
              style={{ fontSize: "35px" }}
              className="display-6 pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text "
            >
              Our <br /> Ready-to-Use <br /> Software Solutions
            </h3>
            <p className="text-center text-white">
              We help Business grow and dominate their industries with the help{" "}
              <br />
              of the latest IT technologies and experiences.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30">
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    // setDisplayAllItems(true);
                  }}
                  className={selectedCategory === "All" ? "is-checked" : ""}
                  data-filter="*"
                >
                  <span className="filter-text">All</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("SoftWare");
                    setDisplayAllItems(true);
                  }}
                  className={
                    selectedCategory === "SoftWare" ? "is-checked" : ""
                  }
                  data-filter=".SoftWare"
                >
                  <span className="filter-text">Software</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("Application");
                    setDisplayAllItems(true);
                  }}
                  className={
                    selectedCategory === "Application" ? "is-checked" : ""
                  }
                  data-filter=".Application"
                >
                  <span className="filter-text">Application</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("Games");
                    setDisplayAllItems(true);
                  }}
                  className={selectedCategory === "Games" ? "is-checked" : ""}
                  data-filter=".Games"
                >
                  <span className="filter-text">Games</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("Blockchain");
                    setDisplayAllItems(true);
                  }}
                  className={
                    selectedCategory === "Blockchain" ? "is-checked" : ""
                  }
                  data-filter=".Blockchain"
                >
                  <span className="filter-text">Blockchain</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedCategory("Metaverse");
                    setDisplayAllItems(true);
                  }}
                  className={
                    selectedCategory === "Metaverse" ? "is-checked" : ""
                  }
                  data-filter=".Metaverse"
                >
                  <span className="filter-text">Metaverse</span>
                </button>
              </div>
              <div className="portfolio-items grid-metro3 mesonry-list">
                <div className="resizer" />
                {/* Render portfolio items dynamically */}
                <div className="portfolio-row">
                  {filteredPortfolioItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`portfolio-3 ${item.category.join(" ")}`}
                    >
                      <div className="rainbow-card portfolio">
                        <div className="inner">
                          <div className="thumbnail">
                            <figure className="card-image">
                              <a href="portfolio-details.html">
                                <Link onClick={handleKnowMoreClick}>
                                  <img
                                    style={{ height: "50vh" }}
                                    src={item.image}
                                    alt={item.title}
                                  />
                                </Link>
                              </a>
                            </figure>
                            <a className="rainbow-overlay" />
                          </div>
                          <div className="content">
                            <h5 className="title mb--20">
                              <a className="heading-conatant">{item.title}</a>
                              <br />
                              <span>{item.subtitle}</span>
                            </h5>
                            <div style={{ margin: "auto" }}>
                              <button onClick={handleKnowMoreClick}>
                                Know More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Start Load More Button  */}
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-load-more text-center mt--60">
                <a
                  href="#projects"
                  className="btn btn-default btn-large btn-icon round"
                  onClick={handleViewToggle}
                >
                  <span>{displayAllItems ? "View More" : "View Less"}</span>
                  <span className="icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-1  */}
      <div className="rainbow-brand-area rainbow-section-gap" id="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h2 className="title w-600 mb--50">
                  Brands We Have Worked With
                </h2>
                <p className="description b1"> </p>
              </div>
            </div>
          </div>
          <div className="brands-div">
            {brands.map((item, index) => (
              <div key={index}>
                <img
                  style={{ width: "100px", height: "80px", marginLeft: "70px" }}
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "10vh" }} className="brands-div">
            {brands2.map((item, index) => (
              <div key={index}>
                <img
                  style={{ width: "100px", height: "80px", marginLeft: "70px" }}
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Brand Style-1  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <footer
        className="text-lg-start"
        style={{ backgroundColor: "#000000", textAlign: "center" }}
      >
        <section style={{ background: "#010101" }}>
          <div className="container text-md-start mt-5">
            <div className="row mt-3 d-flex align-center">
              <div
                style={{ marginTop: "5vh" }}
                className="col-md-2 col-lg-2 col-xl-2 mx-auto footer_logo "
              >
                <div class="Company-logo">
                  <img
                    style={{ marginBottom: 50, width: 400 }}
                    className="Company-logo"
                    src={imgage}
                    alt
                  />
                </div>
                <div className="payment-method">
                  <div className="image-container">
                    <img
                      className="footer-in-payment-method"
                      src={imagess}
                      alt
                    />
                    <div className="overlay-text">Scan Me</div>
                    <p style={{ fontSize: 15, textAlign: "center" }}>
                      Save Contact Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <a
                    href="#projects"
                    onClick={() => setSelectedCategory("All")}
                    className={selectedCategory === "All" ? "is-checked" : ""}
                  >
                    <span className="footer-in-Pages">ALL</span>
                  </a>
                </p>
                <p>
                  <a
                    href="#projects"
                    onClick={() => setSelectedCategory("Blockchain")}
                    className={
                      selectedCategory === "Blockchain" ? "is-checked" : ""
                    }
                  >
                    <span className="footer-in-Pages">BLOCKCHAIN</span>
                  </a>
                </p>
                <p className="footer-contact-number">
                  <a
                    href="#projects"
                    onClick={() => setSelectedCategory("Application")}
                    className={
                      selectedCategory === "Application" ? "is-checked" : ""
                    }
                  >
                    <span className="footer-in-Pages">APPLICATION</span>
                  </a>
                </p>
                <p className="footer-contact-number">
                  <a
                    href="#projects"
                    onClick={() => setSelectedCategory("SoftWare")}
                    className={
                      selectedCategory === "SoftWare" ? "is-checked" : ""
                    }
                  >
                    <span className="footer-in-Pages">SOFTWARE</span>
                  </a>
                </p>
                <p className="footer-contact-number">
                  <a
                    href="#projects"
                    onClick={() => setSelectedCategory("Games")}
                    className={selectedCategory === "Games" ? "is-checked" : ""}
                  >
                    <span className="footer-in-Pages">GAMES</span>
                  </a>
                </p>
                <p className="footer-contact-number">
                  <a
                    href="#projects"
                    onClick={() => setSelectedCategory("Metaverse")}
                    className={
                      selectedCategory === "Metaverse" ? "is-checked" : ""
                    }
                  >
                    <span className="footer-in-Pages">METAVERSE</span>
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
  <h6 className="text-uppercase fw-bold">Useful links</h6>
  <hr
    className="mb-4 mt-0 d-inline-block mx-auto"
    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
  />
  <p className="footer-contact-number">
    <a href="#home">
      <span className="footer-in-Pages">HOME</span>
    </a>
  </p>
  <p className="footer-contact-number">
    <a href="#projects">
      <span className="footer-in-Pages">PROJECTS</span>
    </a>
  </p>
  <p style={{cursor:"pointer"}} onClick={handleContactFormOpen} className="footer-contact-number">
    <a>
      <span className="footer-in-Pages">CONTACT</span>
    </a>
                </p>
                <Link to={"/PrivacyPolicy"}>
                  
  <p style={{cursor:"pointer"}} className="footer-contact-number">
    {/* <a href="#PrivacyPolicy"> */}
      <span className="footer-in-Pages">Privacy Policy</span>
    {/* </a> */}
  </p>
                </Link>
                <Link to={"/RefundPolicy"}>
                
  <p style={{cursor:"pointer"}} className="footer-contact-number">
    {/* <a href="#RefundPolicy"> */}
      <span className="footer-in-Pages">Refund Policy</span>
    {/* </a> */}
                  </p>
                  </Link>
</div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <FaHome style={{ marginRight: 5 }} />
                  30-A, Gopalpura Bypass Rd, opp. Holiday Inn Hotel, opp.
                  Holiday Inn, Sultan Nagar, Santi Nagar, Gurjar Ki Thadi,
                  Jaipur, Rajasthan 302020
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/DtA7yg3N7yNKuXgE7"
                  >
                    {" "}
                    <span
                      onClick={handleLocationClick}
                      style={{
                        background: "purple",
                        cursor: "pointer",
                        borderRadius: 2,
                      }}
                    >
                      <IoLocationOutline />
                    </span>
                  </a>
                </p>
                <a
                  href="mailto:info@metablocktechnologies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="footer-contact-number">
                    <FaEnvelope style={{ marginRight: 5 }} />
                    info@metablocktechnologies.in
                  </p>
                </a>
                <a
                  href="tel:+919358593003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="footer-contact-number">
                    {" "}
                    <FiPhoneCall style={{ marginRight: 5 }} />
                    +91 935 859 3003
                  </p>
                </a>
                <a
                  href="tel:+919358593002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="footer-contact-number">
                    {" "}
                    <FiPhoneCall style={{ marginRight: 5 }} />
                    +91 935 859 3002
                  </p>
                </a>
                <div style={{ marginBottom: "10px" }}>
                  <a
                    href="https://www.facebook.com/metablocktechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" me-4"
                  >
                    <FaFacebookF style={{ fontSize: "20px" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/metablocktechnologies1?igsh=Zmxva3Fnd3o1NzBw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" me-4"
                  >
                    <FiInstagram style={{ fontSize: "20px" }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/metablocktechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" me-4"
                  >
                    <FaLinkedin style={{ fontSize: "20px" }} />
                  </a>
                  <a
                    href="https://wa.me/919358593003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" me-4"
                  >
                    <FaWhatsapp style={{ fontSize: "20px" }} />
                  </a>
                  <a
                    href="skype:live:.cid.example?chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" me-4"
                  >
                    <FaSkype style={{ fontSize: "20px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      <Modal
        className="main-modal"
        show={showVideoModal}
        onHide={() => setShowVideoModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="560"
            height="400"
            src={video2}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button
            href="https://calendly.com/metablock-sale"
            target="_blank"
            className="modal-butt"
            variant="secondary"
          >
            Book A Call
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showContactForm} onHide={() => setShowContactForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "#059DFF",
              paddingTop: "7px",
              margin: "auto",
              paddingLeft: "40px",
            }}
          >
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <form onSubmit={handleSubmitQuery} action="">
            <div className="wrappers contct-form" id="app">
              <div className="card-formd">
                <div className="card-form__inner">
                  <div className="col-xl-12 ">
                    <div className="row">
                      <div className="col-md-6 p-3">
                        <div className="card-input">
                          <label
                            htmlFor="cardNumber"
                            className="card-input__label"
                          >
                            {" "}
                            Your Name <span class="required-star"></span>
                          </label>
                          <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder=" Enter Name"
                            id="name"
                            className="col-md-12"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 p-3">
                        <div className="card-input">
                          <label
                            htmlFor="contactNo"
                            className="card-input__label"
                          >
                            Contact No.<span class="required-star"></span>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setContactNo(e.target.value)}
                            id="contactNo"
                            placeholder="Enter Contact No."
                            className="col-md-12"
                            autoComplete="off"
                            pattern="[0-9]{10}"
                            title="Please enter 10-digit number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 ">
                    <div className="row">
                      <div className="col-md-12 p-3">
                        <div className="card-input">
                          <label
                            htmlFor="cardNumber"
                            className="card-input__label"
                          >
                            Interested Software ?{" "}
                            <span class="required-star"></span>
                          </label>
                          <input
                            onChange={(e) => setSoftwareName(e.target.value)}
                            type="text"
                            placeholder="Enter Software Name"
                            id="cardNumber"
                            className="col-md-12 "
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 ">
                    <div className="row">
                      <div className="col-md-12 p-3">
                        <div className="card-input">
                          <label
                            htmlFor="cardNumber"
                            className="card-input__label"
                          >
                            Description
                          </label>
                          <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Enter Your Message...."
                            id="cardNumber"
                            className="col-md-12 "
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button className="card-form__button">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        className="modal-open"
        show={showsuccces}
        onHide={() => setShowSuccess(false)}
      >
        <Modal.Body className="modal-body successful">
          <div>
            <span style={{ fontSize: "22px" }}> Thank you ! </span>
            <br /> Your form has been Successfully Submitted. <br />{" "}
            <p
              className="second-p"
              style={{ fontWeight: "700", color: "white" }}
            >
              {" "}
              We will Contact you Soon.
            </p>{" "}
            <span className="main-p"> Book a Meeting </span>
          </div>
          <a
            style={{ width: "300px" }}
            href="https://calendly.com/metablock-sale"
            target="_blank"
          >
            <div className="card-formses  ">
              <FaVideo className="video-icon" />
              Schedule Free 30-Minute Meeting
            </div>
          </a>
        </Modal.Body>
      </Modal>

      <div className="offers-upper-div">
        <div className="offers-main">
          <Link onClick={handleKnowMoreClick}>
            <div className="google-meet">
              Click For Demo
              <FaArrowRightLong style={{ paddingLeft: "5px" }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
