import { forwardRef, useState, useRef, useEffect } from "react";
import { motion, animate } from "framer-motion";

type TProps = {
  counter?: any;
  title: string;
  suffix?: any;
};

// eslint-disable-next-line react/display-name
const FunFact = forwardRef<HTMLDivElement, TProps>(
  ({ counter, suffix, title }, continerRef) => {
    const [inView, setInView] = useState(false);

    const viewPortHandler = () => {
      if (inView) return;
      setInView(true);
    };

    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (!inView) return;
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(0, counter, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }, [counter, inView]);

    return (
      <div className="funfact text-center" ref={continerRef}>
        <motion.div
          className="text-4xl md:text-5xl font-extrabold leading-none text-primary"
          onViewportEnter={viewPortHandler}
        >
          <span ref={nodeRef} />
          {suffix}
        </motion.div>
        <h3 className="text-md md:text-base font-bold mt-2.5 md:mt-[14px] mb-0 uppercase text-secondary -tracking-tightest">
          {title}
        </h3>
      </div>
    );
  }
);

export default FunFact;
