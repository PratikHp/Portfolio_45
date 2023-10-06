import heroImg from '../assets/pratik.png';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import TypeWriterEffect from 'react-typewriter-effect';

const Hero = () => {
  return (
    <section className='bg-emerald-100 py-24  '>
      <div className=' mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Pratik</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
          <span className="type_effect">
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        'Web Developer',
                        'Frontend Developer',
                        'Competitive Programmer',
                        'Open-Source enthusiast',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/PratikHp'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/pratik-hanagandi-4357b4210/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://twitter.com/pratik_Hp'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.instagram.com/pratik_hp4577/'>
              <FaInstagramSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.facebook.com/pratik.hanagandi/'>
              <FaFacebookSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
          <div className="profile-options">
              <a href="#Contact">
                <button className=" bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-6 rounded-full mt-5 mr-2">Hire Me</button>
              </a>
              <a href="src\assets\Pratik_Hp_Resume.pdf" download>
                <button className=" bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-3 rounded-full mt-5 mr-2">Get Resume</button>
              </a>
            </div>
        </article>
        <article className='hidden md:block '>
          <img src={heroImg} className='h-90 lg:h-96 p "w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' />
        </article>
      </div>
    </section>
  );
};
export default Hero;