import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "@/app/styles/globals.css";

export const metadata = {
  title: "میز کار",
  default: "میز کار",
};
// console.dir(Geist_Mono);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
