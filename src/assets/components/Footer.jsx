import { useState } from "react";

export const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.submit();
  };
  return (
    <section id='footer' className='sm:col-span-3 h-screen pt-4 sm:pt-0'>
      <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
        <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10 '>
          Conta<span className='text-rose-500'>ctame</span>
        </h2>
        <div className='w-full overflow-auto touch-pan-y'>
          {submitted ? (
            <div className='text-center text-rose-500'>
              <p>¡Tu mensaje ha sido enviado con éxito!</p>
            </div>
          ) : (
            <form
              action='https://formsubmit.co/juan.eperez88@gmail.com'
              method='POST'
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
                name='_next'
                value='https://juperdev.com/#footer'
              />

              <input type='hidden' name='_captcha' value='false' />
            </form>
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
  );
};
