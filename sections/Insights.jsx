import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedInsights = showAll ? insights : insights.slice(0, 3);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title={<>The Code.io Journey </>} textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {displayedInsights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
          {!showAll && (
            <button onClick={() => setShowAll(true)} type="button" className="flex justify-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Show More Insights &#8594;
              </span>
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
