import Image from "next/image";
import { motion } from "framer-motion";

import { headerBgImageItems } from "@/app/constants/";

interface HeaderBgImageProps {
  item: "flight" | "train" | "bus" | "taxi" | "ship" | "travelBag" | "hotel";
}

// TODO animations needs works to do

const HeaderBgImage: React.FC<HeaderBgImageProps> = ({ item }) => {
  const data = headerBgImageItems.find((i) => i.name == item);

  if (!data) return <></>;
  return (
    <motion.div
      className="
        z-[9]
        absolute
        bottom-[90px]
      "
      initial={{ right: -300 }}
      animate={{ translateX: [0, -590] }}
      transition={{ duration: 0.15 }}
    >
      <Image
        alt={data?.name || "car"}
        src={data?.src || "some link"}
        width={data?.width}
        height={data?.height}
        loading="lazy"
      />
    </motion.div>
  );
};

export default HeaderBgImage;
