import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Catálogo Interativo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}