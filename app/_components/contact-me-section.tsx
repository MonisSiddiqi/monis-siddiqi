import { ContactMeButton } from "./contact-me-button";
import { Heading } from "./layout/heading";

export const ContactMeSection = () => {
  return (
    <div className="relative overflow-hidden rounded-lg ">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <Heading heading="Let's transform your vision into digital excellence" />
          <h1 className=" text-3xl font-bold tracking-tighter sm:text-5xl"></h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Ready to embark on your next digital journey? I bring ideas to life
            with precision and creativity.
          </p>
        </div>
        <div className="flex justify-between ">
          <ContactMeButton />
        </div>
      </div>
    </div>
  );
};
