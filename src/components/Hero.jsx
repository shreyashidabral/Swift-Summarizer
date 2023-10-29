import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className='mt-5 text-3xl font-extrabold leading-[1.15] text-black sm:text-3xl text-center'> Swift Summarizer </div>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/shreyashidabral", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles <br className='max-md:hidden' />
        <span className='orange_gradient '>with OpenAI</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Swift Summarizer, an article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;