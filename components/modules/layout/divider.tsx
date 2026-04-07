import Image from "next/image";
import React from "react";

const WeddingDivider = () => {
  return (
    <div className="bg-background relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
      <span className="relative z-10 bg-background px-2 text-muted-foreground">
        <Image
          src="/images/wedding_ring.png"
          alt="Wedding Ring"
          width={30}
          height={30}
            className="inline-block object-contain"
        />
      </span>
    </div>
  );
};

export default WeddingDivider;
