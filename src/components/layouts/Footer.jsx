import React from "react";
import Logo from "../logo/Logo";
import ContainerPage from "../container/page";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-neutral mt-10">
      <ContainerPage>
        <div className="footer  sm:footer-horizontal text-white p-10 ">
          
                  <aside>
           
            <Logo />

            <p className="mt-4 max-w-xs">
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
          </aside>

          
           
            <nav className=" ml-60 mr-60 ">
              <h6 className="footer-title ">Services</h6>
              <a className="link link-hover mt-4">Branding</a>
              <a className="link link-hover mt-2">Design</a>
              <a className="link link-hover  mt-2">Marketing</a>
              <a className="link link-hover mt-2">Advertisement</a>
            </nav>
            <nav className=" ml-60 mr-60">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover mt-4">About us</a>
              <a className="link link-hover mt-2">Contact</a>
              <a className="link link-hover mt-2">Jobs</a>
              <a className="link link-hover mt-2">Press kit</a>
            </nav>
            <nav className=" ml-60 ">
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover mt-4">Terms of use</a>
              <a className="link link-hover mt-2">Privacy policy</a>
              <a className="link link-hover mt-2">Cookie policy</a>
            </nav>
          
        </div>
      </ContainerPage>
    </div>
  );
};

export default Footer;
