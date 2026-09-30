import logoImg from "../assets/logo-text.png";

type LogoProps = {
  size?: "sm" | "md";
};

export default function Logo({ size = "md" }: LogoProps) {
  const height = size === "md" ? "h-8" : "h-6";

  return (
    <a href="#home" className="flex items-center">
      <img src={logoImg} alt="Dev Stack" className={`${height} w-auto`} />
    </a>
  );
}