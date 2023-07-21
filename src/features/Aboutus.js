import React from "react"
import TypingJutsu from "../TypingJutsu.svg"
export default function AboutUsPage() {
    return (
  <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img className="mx-auto h-12"  src={TypingJutsu} alt="Logo" />
            <h1 className="text-centre text-4xl p-3 font-bold text-gray-900">About Us</h1>
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                At TypingJutsu, we are passionate about one thing - helping you improve your typing skills! We understand the importance of fast and accurate typing in today's digital age, where communication and productivity rely heavily on your keyboard prowess. Whether you're a student, a professional, or just someone who loves to type, TypingJutsu is the ultimate destination to assess and enhance your typing speed and accuracy.
                </p>
              </blockquote>
              s
          </div>
       
        </section>
  </>
     
    )
  }
  