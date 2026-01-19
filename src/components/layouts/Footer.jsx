"use client";

import React from "react";
import Logo from "../logo/Logo";
import ContainerPage from "../container/page";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white mt-10">
      <ContainerPage>
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 py-10">
          {/* Logo & Social */}
          <div className="flex flex-col items-start md:w-1/4">
            <Logo />
            <p className="mt-4 max-w-xs text-gray-300">
              Building modern digital solutions with care and quality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline text-white hover:bg-primary"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline text-white hover:bg-primary"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline text-white hover:bg-primary"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline text-white hover:bg-primary"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row md:w-3/4 justify-between gap-10">
            <nav>
              <h6 className="footer-title text-white font-semibold mb-4">Services</h6>
              <ul className="flex flex-col gap-2 text-gray-300">
                <li><Link href="#">Branding</Link></li>
                <li><Link href="#">Design</Link></li>
                <li><Link href="#">Marketing</Link></li>
                <li><Link href="#">Advertisement</Link></li>
              </ul>
            </nav>

            <nav>
              <h6 className="footer-title text-white font-semibold mb-4">Company</h6>
              <ul className="flex flex-col gap-2 text-gray-300">
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Jobs</Link></li>
                <li><Link href="#">Press kit</Link></li>
              </ul>
            </nav>

            <nav>
              <h6 className="footer-title text-white font-semibold mb-4">Legal</h6>
              <ul className="flex flex-col gap-2 text-gray-300">
                <li><Link href="#">Terms of use</Link></li>
                <li><Link href="#">Privacy policy</Link></li>
                <li><Link href="#">Cookie policy</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 py-4 border-t border-gray-700 mt-6 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </ContainerPage>
    </footer>
  );
};

export default Footer;
