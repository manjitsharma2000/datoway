import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Home - || Datoway - Beyond Transformation",
  description: "Datoway - Beyond Transformation",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
