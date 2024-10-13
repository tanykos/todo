import { ThemeProvider } from "@mui/material/styles";
import MainComponent from "./components/MainComponent";
import MainLayout from "./layouts";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>      
      <MainLayout>
        <MainComponent />
      </MainLayout>
    </ThemeProvider>
  );
}
