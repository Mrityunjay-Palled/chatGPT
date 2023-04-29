import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "/public/assets/ad-2.png"
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

function Sidebar(props: Props) {
  return (
    <section>
      <hr className="border-1" />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
      <Image
         className="hidden md:block my-8 w-full"
         placeholder="blur"
         style={{objectFit:"cover"}}
         alt="advert-2"
         src={Ad2}
         width={500}
         height={1000}
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center">
      <Image
         placeholder="blur"
         style={{width:"500px",height:"250px",objectFit:"cover"}}
         alt="about-profile"
         src={AboutProfile}
         sizes="(max-width:480px) 100vw,(max-width:768px) 75vw,(max-width:1060px) 50vw,33vw"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Geoffery Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste facilis aspernatur sint, nisi laborum illum magni earum numquam accusamus!
      </p>
    </section>
  );
}

export default Sidebar;
