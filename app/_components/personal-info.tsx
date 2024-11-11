import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import {
  Calendar1Icon,
  GraduationCapIcon,
  HomeIcon,
  PhoneCallIcon,
  UserIcon,
} from "lucide-react";

const infoData = [
  {
    id: "1",
    icon: UserIcon,
    label: "Monis Siddiqi",
  },
  {
    id: "2",
    icon: EnvelopeClosedIcon,
    label: "monissiddiqi123@gmail.com",
  },
  {
    id: "3",
    icon: GraduationCapIcon,
    label: "B.Tech in Computer Science",
  },
  {
    id: "4",
    icon: PhoneCallIcon,
    label: "+91 755 750 3282",
  },
  {
    id: "5",
    icon: Calendar1Icon,
    label: "Born on 27 July, 2000",
  },
  {
    id: "6",
    icon: HomeIcon,
    label: "New Delhi, India",
  },
];

export const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-2xl text-gray-800 font-semibold">
          Exceptional Quality Service for Over 2 years
        </p>
        <p className="text-sm text-gray-500">
          With over two years of experience, I create user-friendly websites
          using the latest technologies, ensuring engaging and interactive
          experiences for users.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {infoData.map(({ id, label, icon }) => {
          const Icon = icon;
          return (
            <div key={id} className="flex items-center gap-2">
              <Icon className="h-6 w-6 text-primary" />
              <p className="text-sm text-gray-700">{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
