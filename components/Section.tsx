import type { NextComponentType } from "next";

const Hero: NextComponentType = () => {
  return (
    <>
      <section className="pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]">
        <div className="innerDiv bg-white"></div>
      </section>
    </>
  );
};
export default Hero;
