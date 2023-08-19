import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
const Cards = () => {
  return (
    <div className="section font-roboto my-60 px-5">
      <div className="custom-container container">
        <div className="has-text-centered">
          <p className="custom-font-weight-900 title-gray is-size-3">
            About the <span className="custom-yellow ">Retreat</span>
          </p>
          <div className="custom-box">
            <div className="custom-red hr-line "></div>
            <FaHeart className="custom-red-color is-size-4" />

            <div className="custom-red hr-line "></div>
          </div>
          <p className="pb-6 has-text-weight-bold text-gray text-15 ">
            What is <span className="custom-yellow ">KFR?</span> How is it
            different from <span className="custom-yellow ">Khalsa Camp?</span>{" "}
            Why should I go to KFR?
          </p>
        </div>
        <div className="columns is-centered">
          {cardData.map((card) => (
            <div className="column is-4 px-3" key={card.id}>
              <div className="card  bg-gray">
                <div className="card-image">
                  <figure className="image is-size-3 is-4by3">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={424}
                      height={318}
                    />
                  </figure>
                </div>
                <div className="card-content p-3">
                  <p className="is-size-5 pt-1 pb-1 mt-0">{card.title}</p>
                  <div className="">
                    <p className="  line-h text-13 pt-0 pb-1 mt-0 has-text-weight-bold custom-blue-text">
                      {card.history}
                      <span className=" text-gray pt-0 pb-1 mt-0 is-italic">
                        {" "}
                        {card.history2}
                      </span>
                    </p>
                  </div>
                  <div className="content has-text-weight-bold line-h text-gray">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Cards;
const cardData = [
  {
    id: 1,
    image: "/web/hjquFs1A.jpeg",
    title: "For The Whole Family",
    history: `“SadhSangat Kai Aasrai, Prabh Sio Rang Laai”`,
    history2: ` – Through the Saadh Sangat, one falls in love with God – SGGS 966`,
    description:
      "Young or old, this Sangat experience is for all. Newborns to Bazurag Siane (elders) can take fruit from this camp as it serves to cater for all age groups to grow spiritually, mentally and physically.",
  },
  {
    id: 2,
    image: "/web/kfr17-fun.jpg",
    title: "Experience of a Lifetime",
    history: `“Hassandia, Khelandia, Painandia, Khavandia, Vichai Hovai Mukath” `,
    history2: ` – Whether laughing, playing, dressing or eating, emancipation can occur – SGGS 522`,
    description:
      "The KFR experience is a wonderful place to experience the above.  A 4 day retreat for the whole family which will be remembered for years to come.",
  },
  {
    id: 3,
    image: "/web/kfr17-kids.jpg",
    title: "Seva Simran Sangat",
    history: `“Praani Tuu Aaya Laha Lain”`,
    history2: ` – Oh human, you have come here to earn some profit – SGGS 43`,
    description:
      "As many past campers can attest to, immersing in a week’s worth of vibrations of Naam has transformed many a life. This family experience is a perfect way for the whole household to absorb this flavour together.",
  },
];
