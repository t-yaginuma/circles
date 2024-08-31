import { CsHeading } from "@/components/circles/CsHeading";
import Link from "next/link";

export default function Explore() {
  return (
    <>
      <CsHeading heading="Explore" />
      <ul>
        <li>
          <Link href="/">Langing page</Link>
        </li>
        <li>
          <Link href="/open1">Open1 incomplete</Link>
        </li>
        <li>
          <Link href="/vancouver">Vancouver incomplete</Link>
        </li>
        <li>
          <Link href="/trane">Trane. incomplete</Link>
        </li>
        <li>
          <Link href="/make-your-circle">upload music incomplete</Link>
        </li>
        <li>
          <Link href="/make-your-circle">make your circle incomplete</Link>
        </li>
        <li>
          <Link href="/sign-up">sign up incomplete</Link>
        </li>
        <li>
          <Link href="/login">sign in incomplete</Link>
        </li>
        <li>
          <Link href="/upload">song upload</Link>
        </li>
      </ul>
    </>
  );
}
