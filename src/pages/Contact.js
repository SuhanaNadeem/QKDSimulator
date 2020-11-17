import React from "react";
import NavBar from "../components/NavBar";
import ContactHeader from "../components/ContactHeader";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <div className="p-6">
        {/* <ContactForm /> */}
        <h1 className="text-2xl font-semibold">suhana.nadeemv@gmail.com</h1>
      </div>
      <Footer />
    </div>
  );
}
