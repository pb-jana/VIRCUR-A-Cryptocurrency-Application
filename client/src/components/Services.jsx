import React from "react";

import { BsShieldFillCheck  } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

// import { MdOutlineSecurity  } from "react-icons/bs";
// import { FcPrivacy  } from "react-icons/bs";




const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
);
  
const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-4xl py-2 text-gradient ">
                    Focused To Priority 
                    <br />
                    To Safe & Secure
                    <br />
                    Your Data ...
                    <br />
                    Your Transactions ...
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    Most Ever Secure Platform. <br /> Your Privacy is Our Priority to Safe and Secure.
                </p>
            </div>
  
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security Is The Priority !!"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="At another level of priority we provide. Your data will remain safe and secure because it's only your."
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Fastest Transactions Done !!"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Transactions done within a second. Send any where to anyone without any hassle."
                />
                <ServiceCard
                    color="bg-[#F84550]"
                    title="Round The Clock Service !!"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="No need to Worry about anything. Any doubt or problem feel free to contact us. 24/7 customer support available"
                />
            </div>
        </div>
    </div>
);
  

export default Services;