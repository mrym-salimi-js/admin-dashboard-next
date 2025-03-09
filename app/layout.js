import "@/app/styles/globals.css";

export const metadata = {
  title: "میز کار",
  default: "میز کار",
};
// console.dir(Geist_Mono);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
