import EuquipmentHeading from "./EquipmentHeading";

import EquipmentSubText from "./EquipmentSubText";
import Hammer from "./Hammer";
import Pannata from "./Pannata";

const AboutLast = () => {
  return (
    <div className="self-center md:self-start w-full flex flex-col items-center gap-8 md:flex-1">
      <EuquipmentHeading />
      <div className="flex flex-col md:flex-row md:justify-evenly gap-15 w-full overflow-hidden">
        <Hammer />
        <Pannata />
      </div>
      <EquipmentSubText />
    </div>
  );
};

export default AboutLast;
