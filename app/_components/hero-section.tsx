import HeroImageShape from "@/app/assets/hero-image-shape.png";
import Image from "next/image";
import { ContactMeButton } from "./contact-me-button";
import { DownloadCvButton } from "./download-cv-button";

export const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
      {/* Details  */}
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-lg uppercase tracking-wide text-gray-500">
          Full Stack Web developer
        </h1>
        <h1 className="text-4xl font-extrabold text-gray-900">
          Hello, my name is <br />
          <span className="text-primary">Monis Siddiqi</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I’m Monis, a versatile full-stack developer focused on creating
          intuitive and high-performing web applications. With a passion for
          blending seamless functionality and clean design, I build
          user-centered digital experiences that make an impact. Whether it’s
          front-end finesse or back-end efficiency, I’m dedicated to delivering
          results that drive engagement and innovation.
        </p>
        <div className="flex gap-4">
          <ContactMeButton />
          <DownloadCvButton />
        </div>
      </div>

      {/* Image  */}

      <div className="w-1/2">
        <Image
          src={HeroImageShape.src}
          height={HeroImageShape.height}
          width={HeroImageShape.width}
          alt="image shape"
          className="mx-auto"
        />
      </div>
    </div>
  );
};
