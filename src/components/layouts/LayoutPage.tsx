import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
  children: React.ReactNode;
  title: string;
}

const LayoutPage = ({ children, title }: Props): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} - Carmen: Agencia de Viajes Y Turismo`;
    window.scrollTo(0, 0);
  }, [title, pathname]);

  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 0, y: -5 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 0, y: -5 }}
          transition={{ duration: 0.7, type: "ease" }}
          className="mt-[98px] xl:mt-[154px]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default LayoutPage;
