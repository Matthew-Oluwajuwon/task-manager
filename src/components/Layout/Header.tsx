import { Switch, Typography } from "antd";
import { useTheme } from "../ThemeProviderComponent"; // Custom hook to manage theme mode (dark/light)
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { themeMode, toggleTheme } = useTheme(); // Get the current theme mode and the toggle function

  return (
    <header className="p-5 py-2 border-b border-b-color-border flex items-center justify-between">
      {/* Title of the app */}
      <Typography.Title className="m-0 mt-1 !text-base sm:!text-2xl uppercase font-proxima-nova-bold">
        Task Manager
      </Typography.Title>

      {/* Theme toggle switch */}
      <Switch
        onChange={toggleTheme} // Toggle the theme when the switch is clicked
        value={themeMode === "dark"} // Check if the current theme is dark to set the initial value of the switch
        checkedChildren={<Moon size={15} className="m-auto mt-[2px]" />} // Show Moon icon for dark mode
        unCheckedChildren={<Sun size={15} className="m-auto mt-[2px]" />} // Show Sun icon for light mode
      />
    </header>
  );
};

export default Header;
