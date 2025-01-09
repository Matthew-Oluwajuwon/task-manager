import { Switch, Typography } from "antd";
import { useTheme } from "../ThemeProviderComponent";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <header className="p-5 py-2 border-b border-b-color-border flex items-center justify-between">
      <Typography.Title className="m-0 mt-1 !text-base sm:!text-2xl uppercase font-proxima-nova-bold" >
        Task Manager
      </Typography.Title>
      <Switch
        onChange={toggleTheme}
        value={themeMode === "dark"}
        checkedChildren={<Moon size={15} className="m-auto mt-[2px]" />}
        unCheckedChildren={<Sun size={15} className="m-auto mt-[2px]" />}
      />
    </header>
  );
};

export default Header;
