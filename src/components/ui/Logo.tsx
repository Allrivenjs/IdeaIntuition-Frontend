import Image from "next/image";
import logo from "../../../public/IDEAINTUITION.svg";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo}  alt={"IDEAINTUITION"} />
    </Link>
  );
};
