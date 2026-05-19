import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiLinkedin } from "react-icons/fi";
import { LuMail ,LuPhone, LuMapPin} from "react-icons/lu";

export function Footer() {
  return (
    <footer className="bg-white py-12 sm:py-16 md:py-20" style={{ fontFamily: 'var(--font-inter)' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-1">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo1.svg"
                    alt="PikQuick"
                    width={60}
                    height={36}
                    className="h-9 w-auto"
                  />
                </Link>
                <Image
                  src="/logo2.svg"
                  alt=""
                  width={12}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <p className="mt-4 font-inter text-base leading-relaxed text-[#4A5565] sm:text-base">
                Connecting people who need errands done with trusted local runners. Fast, safe, and stress-free.
              </p>
            </div>

            {/* Support Contact */}
            <div>
              <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-[#101828] sm:text-base">
                Support
              </h4>
              <div className="mt-4 space-y-3 sm:mt-5">
                <a
                  href="mailto:hello@pikquick.co"
                  className="flex items-center gap-2 font-inter text-sm text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                >
                  <LuMail className="h-5 w-5 flex-shrink-0" />
                  hello@pikquick.co
                </a>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-2 font-inter text-sm text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                >
                  <LuPhone className="h-5 w-5 flex-shrink-0" />
                  +234 800 PIKQUICK
                </a>
                <div className="flex items-start gap-2 font-inter text-sm text-[#4A5565] sm:text-base">
                  <LuMapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    The Frontier place 3, Gbenle Street,
                    Orelope B/Stop, Egbeda, Lagos.
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5 flex gap-4 sm:mt-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9FAFB] border-[0.75px] border-[#F3F4F6] text-[#6B7280] transition-all hover:bg-[#4A85E4] hover:text-white"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9FAFB] border-[0.75px] border-[#F3F4F6] text-[#99A1AF] transition-all hover:bg-[#4A85E4] hover:text-white"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9FAFB] border-[0.75px] border-[#F3F4F6] text-[#99A1AF] transition-all hover:bg-[#4A85E4] hover:text-white"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-[#101828] sm:text-base">
                Platform
              </h4>
              <ul className="mt-4 space-y-3 sm:mt-5">
                <li>
                  <Link
                    href="/terms"
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-[#1F2937] sm:text-base">
                Download Our App
              </h4>
              <div className="mt-4 space-y-3 sm:mt-5">
                <a
                  href="#"
                  className="block w-full max-w-[180px] transition-transform hover:scale-105"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-auto w-full"
                  />
                </a>
                <a
                  href="#"
                  className="block w-full max-w-[180px] transition-transform hover:scale-105"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={180}
                    height={54}
                    className="h-auto w-full"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
            <p className="font-inter text-sm text-[#6B7280]">
              © 2026 Pikquick. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="font-inter text-sm uppercase tracking-wider text-[#9CA3AF] transition-colors hover:text-[#4A85E4]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-inter text-sm uppercase tracking-wider text-[#9CA3AF] transition-colors hover:text-[#4A85E4]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}
