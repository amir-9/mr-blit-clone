import Image from "next/image";
import { motion } from "framer-motion";

import { headerBgImageItems } from "@/app/constants/";

interface HeaderBgImageProps {
  item: "flight" | "train" | "bus" | "taxi" | "ship";
}

const HeaderBgImage: React.FC<HeaderBgImageProps> = ({ item }) => {
  const data = headerBgImageItems.find((i) => i.name == item);

  return (
    <motion.div
      className="
        z-[9]
        absolute
        bottom-[80px]
        -right-[500px]
      "
      whileInView={{ translateX: "-790px" }}
      transition={{ duration: 0.3 }}
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
