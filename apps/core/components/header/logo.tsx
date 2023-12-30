import Image from "next/image";
import profilePic from "@images/mainLogo.svg";

export default function Header() {
  return (
    <Image priority width={180} height={100} src={profilePic} alt="Logo" />
  );
}
