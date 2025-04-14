import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import FadeIn from "../Animations/FadeIn";
type Info = {
  icon: React.ReactNode;
  name: string;
  infos: string[];
};
const info: Info[] = [
  {
    icon: <MapPin></MapPin>,
    name: "VISIT US",
    infos: ["Optimal gym", "123 Iron Avenue", "Fitness City, FTM 4594"],
  },
  {
    icon: <Phone></Phone>,
    name: "CALL US",
    infos: ["+1 234 567 890", "+1 234 567 891"],
  },
  {
    icon: <Mail></Mail>,
    name: "EMAIL US",
    infos: ["info@optymalgym.com", "support@optymalgym.com"],
  },
  {
    icon: <Clock></Clock>,
    name: "Working hours",
    infos: [
      "Monday - Friday : NONSTOP",
      "Saturday - Sunday : 10:00 AM - 10:00 PM",
    ],
  },
];
const GetInTouch = () => {
  return (
    <FadeIn
      inView={true}
      x={-50}
      classname={
        "flex flex-col pb-10  p-4 rounded-md bg-gradient-to-b from-black border border-gray-600 to-pink-800 flex-1  "
      }
    >
      <span className="text-2xl self-center ">GET IN TOUCH</span>
      <div className="flex flex-col text-md justify-start gap-10 h-full">
        {info.map((infoItem, idx) => (
          <div className="flex gap-1" key={idx}>
            {infoItem.icon}
            <div className="flex flex-col gap-2">
              <span className="text-2xl">{infoItem.name}</span>
              <div className="flex flex-col gap-1">
                {infoItem.infos.map((info, idx) => (
                  <span key={idx}>{info}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default GetInTouch;
