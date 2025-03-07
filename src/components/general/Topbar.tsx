import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Topbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <div className="ml-8 flex items-center">
        <Link href="/">
          <Image src="/logo.png" height={100} width={50} alt="logo" />
        </Link>
      </div>
      <div className="flex gap-2 mr-8">
        <Link href="/sign-up">
          <Button variant={"secondary"}>Sign up</Button>
        </Link>
        <Link href="/sign-in">
          <Button variant={"hero"}>Sign in</Button>
        </Link>
      </div>
    </nav>
  );
}
