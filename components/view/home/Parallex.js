import Link from "next/link";
import React from "react";
import { Parallax, Background } from "react-parallax";

const image1 = "/web/KFR-2019-website-low-res.png";

const Parallex = ({ title, heading, sub_heading, links }) => {
  return (
    <div className="app-container">
      <Parallax bgImage={image1} strength={500}>
        <div className="parallax-container">
          <div className="parallax-content">
            <div className="">
              <div className="header-title has-text-white bg-blue custom-font-weight-900">
                KHALSA <span className="text-yellow">FAMILY</span> RETREAT
              </div>
              <div className="container-desc mb-2 bg-blue has-text-white">
                <p className="has-text-white is-size-3 sm-font-30 p-1 sm-text-center sm-registrion">
                  {heading}
                  <br />
                  <span className="text-yellow mt-2">
                    {sub_heading}
                  </span>
                </p>
              </div>
              <div className="buttons-container">
                <div className="mb-4   btn4">
                  <p>
                    THE <span className="custom-font-weight-900">RETREAT</span>
                  </p>
                </div>
                {
                  links?.map((link, index) => {
                    return (
                      <Link key={index} href={link?.url} className={`mb-5 btn btn${index + 1} is-size-6`}>
                        {link?.linkText}
                      </Link>
                    )
                  })
                }

                {/* <Link href="/" className="">
                  Adult registration
                </Link>
                <Link href="/" className="mb-5 btn btn2 is-size-6">
                  Child registration
                </Link>
                <Link href="/" className="mb-4 btn btn3 is-size-6">
                  Unable to attend in person? Register for some virtual sessions
                  live from KFR
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallex;
