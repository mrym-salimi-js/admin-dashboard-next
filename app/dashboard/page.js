import Header from "../_components/Header";
import Navigation from "../_components/Navigation";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Navigation />
        <div className="content"></div>
      </main>
    </div>
  );
}
