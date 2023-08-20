import Link from "next/link";
import React from "react";
import { BsSave2 } from "react-icons/bs";
import { AiFillCreditCard, AiOutlineMail } from "react-icons/ai";
const Registration = ({
  registrationHeading,
  registrationText,
  registrationInfo
}) => {
  //  const registrationHeading = "Registration is now open for the 2021 retreat";
  const registrationIndex = registrationHeading.indexOf("REGISTRATION");
  return (
    <div className="section font-roboto my-60 px-5">
      <div className="custom-container container">
        <div className="has-text-centered">
          <p className="custom-font-weight-900 title-gray is-size-3">
            REGISTRATION
            <span className="custom-yellow ">{registrationHeading.slice(registrationIndex + 'REGISTRATION'.length)}</span>
          </p>
          <div className="custom-box">
            <div className="custom-red hr-line "></div>
            <BsSave2 className="custom-red-color is-size-4" />
            <BsSave2 className="custom-red-color is-size-4" />{" "}
            <BsSave2 className="custom-red-color is-size-4" />
            <div className="custom-red hr-line "></div>
          </div>
          <p className="pb-0 has-text-weight-bold text-gray text-15 ">
            {registrationText}
          </p>
          <p className="pb-6 pt-1 second-desc text-gray text-15 ">
            {registrationInfo}
          </p>
        </div>
        <div className="">
          <Link href="/donate">
            <div className="mb-4 purple-color  btn5 custom-font-weight-900 font-500 is-uppercase  py-3 is-size-6 sm-text-12 has-text-centered has-text-white">
              <AiFillCreditCard /> Donate
            </div>
          </Link>
          <Link href="/">
            <div className="mb-4 btn5 orange-color custom-font-weight-900 font-500 is-uppercase  py-3 is-size-6 sm-text-12 has-text-centered has-text-white sm-block">
              {" "}
              <AiOutlineMail /> Contact us via email at KFR@khalsafoundation.org
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
