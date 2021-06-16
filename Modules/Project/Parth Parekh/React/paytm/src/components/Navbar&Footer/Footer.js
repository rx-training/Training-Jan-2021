import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const reactIcons = [
    {
        id: 1,
        icons: <FaApple />,
    },
    {
        id: 2,
        icons: <FaTwitter />,
    },
    {
        id: 3,
        icons: <FaFacebook />,
    },
    {
        id: 4,
        icons: <FaInstagram />,
    },
    {
        id: 5,
        icons: <FaWhatsapp />,
    },
];
export default function Footer() {
    return (
        <footer id="Paytm-footer" className="py-4 ">
            <div className="ml-5 ">
                <span className="text-white  font-weight-bold mx-2 hovereffect">
                    About Us
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Partner with us
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Terms &amp; Conditions
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Blog
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Media
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    24x7Help
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Grievance policy
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Bug bounty
                </span>
                <span className="text-white font-weight-bold mx-2 hovereffect">
                    Recharge Partners
                </span>

                {reactIcons.map((item, index) => {
                    return (
                        <span key={index} className="react-icons hovereffect">
                            {item.icons}
                        </span>
                    );
                })}
            </div>
        </footer>
    );
}
