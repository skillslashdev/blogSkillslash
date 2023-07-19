import "@/styles/globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
