import { PropsWithChildren, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const Scroller = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
