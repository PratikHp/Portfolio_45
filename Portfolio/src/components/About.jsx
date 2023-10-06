import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am a Developer and Designer based in Pune, India 🌍. I have always
            been fascinated by Knowledge 🧠 and learning new things throughout
            my life.Currently, I'm exploring Backend Development 👩🏾‍💻 as part of my skillset.
            When not working on projects or spending time with family or
            friends, you can usually find me watching YouTube videos 💻 or
            listening to music 🎧. As an experienced Web developer who is
            skilled in many areas of development 😎 (responsive design being
            one),I would like to work with businesses both small and large!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;