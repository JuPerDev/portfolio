export const Footer = () => {
  return (
    <section
      id='footer'
      className='h-screen  flex flex-col justify-center items-center sm:col-span-3 text-center mb-10'
    >
      <div class='md:w-[700px] mb-10 px-4 mx-auto max-w-screen-md'>
        <h2 class='mb-10 text-5xl md:text-7xl tracking-tight font-normal text-center text-gray-900 dark:text-slate-50'>
          Conta<span className='text-rose-500'>ctame</span>
        </h2>
        <form action='#' class='space-y-8'>
          <div>
            <label
              for='email'
              class='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
            >
              Tu correo
            </label>
            <input
              type='email'
              id='email'
              class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='juanito_perez@gmail.com'
              required
            />
          </div>
          <div>
            <label
              for='subject'
              class='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
            >
              Asunto
            </label>
            <input
              type='text'
              id='subject'
              class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Escribe aquí el asunto...'
              required
            />
          </div>
          <div class='sm:col-span-2'>
            <label
              for='message'
              class='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
            >
              Mensaje
            </label>
            <textarea
              id='message'
              rows='6'
              class='block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Escribe tu mensaje aquí...'
            ></textarea>
          </div>
          <button
            type='submit'
            class='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-rose-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Envíar Mensaje
          </button>
        </form>
      </div>

      <hr className='mb-8 text-slate-700' />
      <h3>
        Portfolio creado por
        <a href='https://juperdev.com' className='text-rose-500'>
          Juperdev
        </a>
        utilizando tecnologías
        <a href='https://react.dev/' target='_blank' className='text-cyan-500'>
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
    </section>
  );
};
