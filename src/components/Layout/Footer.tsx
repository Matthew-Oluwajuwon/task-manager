import { Typography } from "antd";

const Footer = () => {
  return (
    <footer className="py-3 px-5 border-t border-t-color-border flex items-center justify-center text-center">
      <Typography.Paragraph className="mt-1 text-[0.7rem] sm:text-base">Task Manager created by Matthew Oluwajuwon © {new Date().getFullYear()}</Typography.Paragraph>
    </footer>
  );
};

export default Footer;
