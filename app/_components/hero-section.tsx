import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to My Website
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I'm Monis, a full-stack developer and UI/UX designer. I specialize in
          building modern and user-friendly websites.
        </p>
        <div className="mt-8">
          <Button size="lg">See My Projects</Button>
        </div>
      </div>
    </div>
  );
};
