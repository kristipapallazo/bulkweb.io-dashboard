import { ConfigProvider } from "antd";
import { FC, ReactNode, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  Button?: {
    colorPrimary: string;
    algorithm?: boolean;
  };
};

// const defaultData: ThemeData = {
//   borderRadius: 6,
//   colorPrimary: "#2c5f34",
//   //   Button: {
//   //     colorPrimary: "#00B96B",
//   //   },
// };
const theme = {
  token: {
    colorPrimary: "#ffc107", // Primary Color
    colorTextPrimary: "#212121", // Primary Text Color
    colorTextSecondary: "#757575", // Secondary Text Color
    colorText: "#212121", // General Text Color
    colorBackground: "#ffecb3", // Light Primary Color (Background)
    colorLink: "#ffa000", // Dark Primary Color (Links)
    colorBorder: "#bdbdbd", // Divider Color
    colorError: "#795548", // Accent Color
    colorBgContainer: "white",

    // You can add more tokens here if needed
  },
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  //   const [data, setData] = useState<ThemeData>(defaultData);

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
