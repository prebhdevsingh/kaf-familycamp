import Link from "next/link";
import React from "react";
import { BsSave2 } from "react-icons/bs";
import { AiFillCreditCard, AiOutlineMail } from "react-icons/ai";
const Registration = () => {
  return (
    <div className="section font-roboto my-60 px-5">
      <div className="custom-container container">
        <div className="has-text-centered">
          <p className="custom-font-weight-900 title-gray is-size-3">
            REGISTRATION{" "}
            <span className="custom-yellow ">IS NOW OPEN FOR KFR 2021</span>
          </p>
          <div className="custom-box">
            <div className="custom-red hr-line "></div>
            <BsSave2 className="custom-red-color is-size-4" />
            <BsSave2 className="custom-red-color is-size-4" />{" "}
            <BsSave2 className="custom-red-color is-size-4" />
            <div className="custom-red hr-line "></div>
          </div>
          <p className="pb-0 has-text-weight-bold text-gray text-15 ">
            {`This year's retreat takes place from Monday 20th to Thursday 23rd
            December 2021.`}
          </p>
          <p className="pb-6 pt-1 second-desc text-gray text-15 ">
            The retreat registration is now open, to register click on the links
            above for adult and children registration. To make a donation
            towards KFR click on the button below.
          </p>
        </div>
        <div className="">
          <Link href="/">
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
