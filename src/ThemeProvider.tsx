import { ConfigProvider, ThemeConfig } from "antd";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

// const defaultData: ThemeData = {
//   borderRadius: 6,
//   colorPrimary: "#2c5f34",
//   //   Button: {
//   //     colorPrimary: "#00B96B",
//   //   },
// };
const theme: ThemeConfig = {
  token: {
    colorPrimary: "#ffc107", // Primary Color
    colorTextSecondary: "#757575", // Secondary Text Color
    colorText: "#212121", // General Text Color
    colorLink: "#ffa000", // Dark Primary Color (Links)
    colorBorder: "#bdbdbd", // Divider Color
    colorError: "#ffa000", // Accent Color
    // colorError: "#795548", // Accent Color

    colorBgContainer: "#fff",
    // colorTextPrimary: "#212121", // Primary Text Color
    // colorBackground: "#ffecb3", // Light Primary Color (Background)

    // You can add more tokens here if needed
  },
  components: {
    // Sider: {
    //   /* theme: "light" */
    // },
  },
  // algorithm: theme.defaultAlgorithm,
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  //   const [data, setData] = useState<ThemeData>(defaultData);

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
