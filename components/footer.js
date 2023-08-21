import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section id="parallax-2" className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta va">
        <div className="container">
          <div className=" grid-container">
            <div className=" custom-lg-w-50 custom-w-100">
              <p className=" px-5 is-size-5 has-text-weight-light text-yellow is-uppercase	 has-text-left">
                Khalsa Foundation
              </p>
              <ul>
                {col1Data.map(({ id, link, title, description }) => {
                  return (
                    <li
                      key={id}
                      className="is-flex is-vcentered footer-list-border has-text-left px-5 has-text-weight-light footer-list "
                    >
                      <p className="has-text-white text-13">
                        <Link
                          href={link}
                          className="text-yellow footer-Khalsa-Family-Retreat custom-font-weight-900"
                        >
                          {title}{" "}
                        </Link>
                        {description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" custom-lg-w-50 custom-lg-w-100">
              <div className="contact-div">
                <p className="pt-0 px-5 is-size-5 has-text-weight-light text-yellow is-uppercase	 has-text-left">
                  Connect With Us
                </p>
                <div className="social-icons pb-4 pl-5">
                  {icons.map(({ id, link, icon }) => {
                    return (
                      <Link key={id} href={link}>
                        <div className="social-icon">{icon}</div>
                      </Link>
                    );
                  })}
                </div>

                <div
                  className="px-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <iframe
                    width="360"
                    height="203"
                    className="sm-w-280px"
                    src="https://www.youtube.com/embed/-uy5JRbNA34?feature=oembed"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className=" custom-lg-w-50 custom-w-100">
              <p className=" px-5 is-size-5 has-text-weight-light text-yellow is-uppercase	 has-text-left">
                Khalsa Family Retreat
              </p>
              <ul>
                {col3Data.map(({ id, link, title, description }) => {
                  return (
                    <li
                      key={id}
                      className="is-flex is-vcentered footer-list-border has-text-left px-5 has-text-weight-light footer-list "
                    >
                      <p className="has-text-white text-13">
                        <Link
                          href={link}
                          className="text-yellow footer-Khalsa-Family-Retreat custom-font-weight-900"
                        >
                          {title}{" "}
                        </Link>
                        {description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer px-5">
        <div className="container ">
          <p className="text-gray body-text has-text-left has-text-weight-light text-11">
            © {new Date().getFullYear()} Khalsa Foundation | All Rights //
            Reserved | Terms & Conditions | kfr@khalsafoundation.org .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
const col1Data = [
  {
    id: 1,
    link: "https://www.khalsafoundation.org/",
    title: "Khalsa Foundation ",
    description: `-conducts numerous projects, including:`,
  },
  {
    id: 2,
    link: "http://khalsacamp.com/",
    title: "Khalsa Camp",
    description: ` – our flagship project, offering individuals from Sikh and non-Sikh backgrounds the opportunity to gain practical experiences within spirituality and meditation. The camp is the longest running Sikh retreat in the UK and has developed into branches around the world.`,
  },
  {
    id: 3,
    link: "/",
    title: "Khalsa Darbar",
    description: `– These are pre-arranged events which take place in Gurdwara’s across the UK.`,
  },
  {
    id: 4,
    link: "/",
    title: "Khalsa Talks",
    description: ` – these events look to explore spirituality in modern society and how one can find time to connect with their inner-being.`,
  },
  {
    id: 5,
    link: "https://khalsashop.com/",
    title: "Khalsa Shop",
    description: `–  a one stop shop for some great inspirational gifts`,
  },
];
const col3Data = [
  {
    id: 1,
    title: "Donate",
    link: "https://www.khalsafoundation.org/donate/",
  },
  {
    id: 2,
    title: "FAQs",
    link: "/faqs/",
  },
  {
    id: 3,
    title: "Terms & Conditions",
    link: "/terms/",
  },

];
const icons = [
  {
    id: 1,
    link: "https://www.facebook.com/KhalsaFoundation/",
    icon: <FaFacebook />,
  },
  { id: 2, link: "/", icon: <FaTwitter /> },
  {
    id: 3,
    link: "https://www.facebook.com/KhalsaFoundation/",
    icon: <FaYoutube />,
  },
  {
    id: 4,
    link: "https://www.instagram.com/khalsafoundation/",
    icon: <FaInstagram />,
  },
  {
    id: 5,
    link: "https://soundcloud.com/khalsafoundation",
    icon: <FaSoundcloud />,
  },
  {
    id: 6,
    link: "https://wa.me/+447503295233/?text=Hi%20Khalsa%20Foundation%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20work.",
    icon: <FaWhatsapp />,
  },
];
