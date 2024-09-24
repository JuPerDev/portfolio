export const Footer = () => {
  return (
    <section className='sm:col-span-3 text-center mb-10 h-36'>
      <hr className='mb-8 text-slate-700' />
      <h3>
        Portfolio creado por{" "}
        <a href='https://juperdev.com' className='text-rose-500'>
          Juperdev
        </a>{" "}
        utilizando tecnologías{" "}
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
