import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AppContextProvider from "./AppContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="fr">
    <body className={`${inter.className} text-gray-400`}>
      <Toaster position="top-right"></Toaster>
      <AppContextProvider>
        <div>{children}</div>
      </AppContextProvider>
    </body>
    </html>
  );
}
