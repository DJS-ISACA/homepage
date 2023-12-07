"use client";
import React from "react";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

  const page = () =>{
    useEffect(() => {
      emailjs.init("zTavVyyxXTKkfPZ3E");
    }, []);
   
    const sendEmail = (event) => {
      event.preventDefault();
   
      emailjs
        .sendForm("default_service", "template_iwjfapu", "#isacaForm")
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            window.location.reload();
          },
          function (error) {
            console.log("FAILED...", error);
            window.location.reload();
          }
          
        );
    };
   
      
    return (
      <section className="w-full h-full  flex flex-col-reverse md:flex-row gap-20 items-center pt-40 p-2 md:p-0 justify-end md:min-h-screen">
        
        <form id="isacaForm" onSubmit={sendEmail} className="w-full md:w-3/5 flex justify-center flex-col gap-10">
          <input
            required
            type="text"
            placeholder="YOUR NAME"
            name="from_name"          
            className="uppercase w-full bg-transparent text-2xl border-b border-white text-white text-opacity-90 font-medium p-4 px-0 pb-1 font-chakrapetch"
          />
          <input
            required
            type="email"
            placeholder="YOUR EMAIL"
            name="from_email"          
            className="uppercase w-full bg-transparent text-2xl border-b border-white text-white text-opacity-90 font-medium p-4 px-0 pb-1 font-chakrapetch"
          />
          <textarea
            required
            type="text"
            name="message"          
            placeholder="Here goes your message"
            className="uppercase w-full bg-transparent text-1xl border-b border-white text-white text-opacity-90 font-medium p-4 px-0 pb-1 font-chakrapetch"
          />
          <button
            type="submit"
            className="uppercase w-full bg-white bg-opacity-90 text-2xl border border-black hover:border-white hover:bg-black hover:text-white text-opacity-90 text-black text-opacity-90 font-medium p-4 font-chakrapetch"
          >
            SEND your message
          </button>
        </form>
        <div className="w-full text-center md:text-right md:w-2/5 flex justify-center flex-col gap-5 items:center md:items-end">
          <p className="text-5xl text-white text-opacity-90 font-bold font-chakrapetch">
            Get in Touch
          </p>
          <p className="text-stone-300 font-chakrapetch uppercase ">
            We welcome sponsors and event organizers with open arms. Let's partner
            to create unforgettable moments and elevate your brand. Contact us
            today to discuss collaboration opportunities and take your event to
            new heights
          </p>
        </div>
      </section>
    );
  };

export default page;
