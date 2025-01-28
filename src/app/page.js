import Image from "next/image";
import { Globe } from "./components/Globe";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <HomePage />
    </div>
  );
}
