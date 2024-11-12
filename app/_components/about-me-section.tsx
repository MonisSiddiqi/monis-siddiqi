import Image from "next/image";
import { Heading } from "./layout/heading";
import AboutMeImage from "@/app/assets/about-me-section-image.svg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfo } from "./personal-info";
import { Qualifications } from "./qualifications";
import { Skills } from "./skills";

export const AboutMeSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <Heading heading="About me" />
      <div className="grid grid-cols-2 mt-12">
        {/* Image  */}
        <Image
          src={AboutMeImage.src}
          height={AboutMeImage.height}
          width={AboutMeImage.width}
          alt="image shape"
          className="mx-auto "
        />

        {/* Details  */}
        <Tabs defaultValue="info" className="mx-auto w-4/5 flex flex-col gap-6">
          <TabsList className="h-fit grid grid-cols-3 w-full">
            <TabsTrigger className=" active:bg-primary py-3" value="info">
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              className=" active:bg-primary py-3"
              value="qualifications"
            >
              Qualifications
            </TabsTrigger>
            <TabsTrigger className=" active:bg-primary py-3" value="skills">
              Skills
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <PersonalInfo />
          </TabsContent>
          <TabsContent value="qualifications">
            <Qualifications />
          </TabsContent>

          <TabsContent value="skills">
            <Skills />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
