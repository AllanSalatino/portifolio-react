import { createContext, useEffect, useState } from "react";

interface IChildrenContext {
  children: React.ReactNode;
}

interface IAnimationContext {
  scrollPosition: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

export const AnimationContext = createContext({} as IAnimationContext);

const AnimationProvider = ({ children }: IChildrenContext) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const myTimer = () => {
    setScrollPosition(document.documentElement.scrollTop);
  };
  setInterval(myTimer as any, 100);

  return (
    <AnimationContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
