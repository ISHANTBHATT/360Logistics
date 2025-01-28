import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <Image
                src="/images/logo2.png"
                alt="360 Logistics"
                width={1000}
                height={24}
                className="w-20 h-20"
              />
              <span className="text-xl font-semibold">
                THREE SIXTY LOGISTICS PVT LTD
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-white mb-2">Connected</h3>
              <p>360Logistics@example.com</p>
              <p>(248) 666-4624</p>
              <p>1242 California USA,</p>
              <p>Manchester, Kentucky 561238</p>
            </div>
          </div>

          {/* Pages */}
          <div className="lg:col-span-1">
            <h3 className="text-white mb-4">Pages</h3>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block hover:text-white transition-colors"
              >
                About us
              </Link>
              <Link
                href="/faq"
                className="block hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/services"
                className="block hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block hover:text-white transition-colors"
              >
                Contact us
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-white mb-4">Resources</h3>
            <nav className="space-y-3">
              <Link
                href="/privacy"
                className="block hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/company"
                className="block hover:text-white transition-colors"
              >
                Company
              </Link>
              <Link
                href="/pdf"
                className="block hover:text-white transition-colors"
              >
                PDF Files
              </Link>
            </nav>
          </div>

          {/* Follow us */}
          <div className="lg:col-span-1">
            <h3 className="text-white mb-4">Follow us</h3>
            <nav className="space-y-3">
              <Link
                href="/instagram"
                className="block hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="/facebook"
                className="block hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="/youtube"
                className="block hover:text-white transition-colors"
              >
                YouTube
              </Link>
              <Link
                href="/twitter"
                className="block hover:text-white transition-colors"
              >
                Twitter
              </Link>
            </nav>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-1 flex flex-col items-start gap-4">
            <Button className="bg-[#FF6B00] hover:bg-[#ff8533] text-white">
              Get a Quote
            </Button>
            <div>
              <div className="flex items-center gap-2 text-white mb-1">
                For Fast Service <ArrowUpRight className="w-4 h-4" />
              </div>
              <p>+{`(239) 555-0108`}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 THREE SIXTY LOGISTICS PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
