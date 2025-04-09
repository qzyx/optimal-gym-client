import { MapPin } from "lucide-react";
import React from "react";
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
    icon: <MapPin></MapPin>,
    name: "CALL US",
    infos: ["+1 234 567 890", "+1 234 567 891"],
  },
  {
    icon: <MapPin></MapPin>,
    name: "EMAIL US",
    infos: ["info@optymalgym.com", "support@optymalgym.com"],
  },
  {
    icon: <MapPin></MapPin>,
    name: "Working hours",
    infos: [
      "Monday - Friday : NONSTOP",
      "Saturday - Sunday : 10:00 AM - 10:00 PM",
    ],
  },
];
const GetInTouch = () => {
  return (
    <div className="flex flex-col pb-10  p-4 rounded-md bg-gradient-to-b flex-1 border border-gray-300 from-pink-600  to-black ">
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
    </div>
  );
};

export default GetInTouch;
