import { div } from "framer-motion/client";
import { useState } from "react";
import { useLanguage } from "../contexts/LangContext.jsx";

export const Footer = () => {
  const [result, setResult] = useState("");
  const { language } = useLanguage();
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08c18f58-d2b5-4d27-a046-cfb35c6418a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulario enviado!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const content =
    language === "es" ? (
      <section id='footer' className='sm:col-span-3 h-screen pt-4 sm:pt-0'>
        <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
          <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10 '>
            Conta<span className='text-rose-500'>ctame</span>
          </h2>
          <div className='w-full overflow-auto touch-pan-y'>
            {result === "" ? (
              <form
                className='space-y-8 flex flex-col justify-center items-stretch'
                onSubmit={onSubmit}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
                  >
                    Tu correo
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='juanito_perez@gmail.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
                  >
                    Asunto
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='Escribe aquí el asunto...'
                    required
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                  >
                    Mensaje
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    className='block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    placeholder='Escribe tu mensaje aquí...'
                  ></textarea>
                </div>
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='w-[300px] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-rose-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Envíar Mensaje
                  </button>
                </div>
                <input
                  type='hidden'
                  name='access_key'
                  value='08c18f58-d2b5-4d27-a046-cfb35c6418a8'
                ></input>
              </form>
            ) : (
              <h3 className='text-center font-extralight text-3xl md:text-4xl text-neutral-700 dark:text-slate-50 mb-10'>
                Mensaje enviado!
              </h3>
            )}

            <h3 className='text-center mt-10 mb-20'>
              Portfolio creado por&nbsp;
              <a href='https://juperdev.com' className='text-rose-500'>
                Juperdev
              </a>
              &nbsp;utilizando tecnologías &nbsp;
              <a
                href='https://react.dev/'
                target='_blank'
                className='text-cyan-500'
              >
                React
              </a>
              &nbsp;y&nbsp;
              <a
                href='https://tailwindcss.com/'
                target='_blank'
                className='text-cyan-200'
              >
                TailWind Css
              </a>
            </h3>
          </div>
        </div>
      </section>
    ) : (
      <section id='footer' className='sm:col-span-3 h-screen pt-4 sm:pt-0'>
        <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
          <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10 '>
            Conta<span className='text-rose-500'>ct Me</span>
          </h2>
          <div className='w-full overflow-auto touch-pan-y'>
            {result === "" ? (
              <form
                className='space-y-8 flex flex-col justify-center items-stretch'
                onSubmit={onSubmit}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='juanito_perez@gmail.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='Write the subject here...'
                    required
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    className='block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    placeholder='Write your message here...'
                  ></textarea>
                </div>
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='w-[300px] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-rose-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Send Message
                  </button>
                </div>
                <input
                  type='hidden'
                  name='access_key'
                  value='08c18f58-d2b5-4d27-a046-cfb35c6418a8'
                ></input>
              </form>
            ) : (
              <h3 className='text-center font-extralight text-3xl md:text-4xl text-neutral-700 dark:text-slate-50 mb-10'>
                Message Sent!
              </h3>
            )}

            <h3 className='text-center mt-10 mb-20'>
              Portfolio created by&nbsp;
              <a href='https://juperdev.com' className='text-rose-500'>
                Juperdev
              </a>
              &nbsp;using technologies&nbsp;
              <a
                href='https://react.dev/'
                target='_blank'
                className='text-cyan-500'
              >
                React
              </a>
              &nbsp;and&nbsp;
              <a
                href='https://tailwindcss.com/'
                target='_blank'
                className='text-cyan-200'
              >
                Tailwind CSS
              </a>
            </h3>
          </div>
        </div>
      </section>
    );

  return <>{content}</>;
};
