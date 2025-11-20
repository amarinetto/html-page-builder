import { Facebook, Twitter, Linkedin, Mail, Link2, MessageCircle } from "lucide-react";

export const SocialShare = () => {
  const socialButtons = [
    { icon: Facebook, color: "bg-[#1877f2]" },
    { icon: Twitter, color: "bg-[#1da1f2]" },
    { icon: Linkedin, color: "bg-[#0077b5]" },
    { icon: Mail, color: "bg-[#ea4335]" },
    { icon: MessageCircle, color: "bg-[#25d366]" },
    { icon: Link2, color: "bg-[#718096]" },
  ];

  return (
    <div className="flex gap-3 justify-center my-8">
      {socialButtons.map((button, index) => {
        const Icon = button.icon;
        return (
          <button
            key={index}
            className={`${button.color} bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all`}
            aria-label="Share on social media"
          >
            <Icon className="h-5 w-5 text-muted-foreground" />
          </button>
        );
      })}
    </div>
  );
};
