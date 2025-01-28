import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CardTest() {
  return (
    <Card className="overflow-hidden w-1/2">
      <div className="grid grid-cols-2">
        {/* Image Section */}
        <div className="relative h-full">
          <img
            src="images/1.jpg"
            alt="International shipping illustration with cargo ship and airplane"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="bg-[#FF4B6C] p-8 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ORDER AND SHIP INTERNATIONALLY
          </h2>
          <p className="mb-6 text-white/90">
            Curabitur congue finibus lorem, at dignissim metus elementum sit
            amet. Morbi eget dapibus quam. Integer a ante rutrum, semper neque
            a, brand vel.
          </p>
          <button className="self-start py-3 px-8   border-2 rounded-full text-white border-white hover:bg-white/10">
            SEE MORE
          </button>
        </div>
      </div>
    </Card>
  );
}
