import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center border-t bg-background bg-gray-800">
      <div className="max-w-screen-2xl w-full flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={link.label}
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Monis Siddiqi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
