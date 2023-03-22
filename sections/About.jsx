'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Code.io" className="flex justify-center items-center flex-col relative z-10" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Welcome</span> to Code.io , the website where I document my progress and learning in coding. My name is Muhammed, and I’m a Self-taught programmer who loves to code.{' '}
        <span className="font-extrabold text-white">
          I started this website
        </span>{' '}
        as part of the 100 days of code challenge,where I commit to code for at least an hour every day for 100 days.{' '}
        <span className="font-extrabold text-white">On this website,</span> you’ll find my daily logs, projects, challenges, and reflections on what I have learned so far{' '}
        <span className="font-extrabold text-white">My goal </span> with this website is to share my coding journey  with others who are interested in learning how to code or improving their coding skills.
        <span className="font-extrabold text-white">I hope </span>you’ll find some inspiration and motivation from my posts and join me in this challenge.
        <span className="font-extrabold text-white">Thank you for visiting Codi.io.</span> Let’s code together!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
