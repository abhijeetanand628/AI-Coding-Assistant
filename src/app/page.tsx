import FeatureGrid from "./components/FeatureGrid";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-lg"/>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-lg"/>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pin-500 rounded-lg"/>
        </div>
      </div>
      <main className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        <FeatureGrid />
      </main>
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p>Powered by Google Gemini AI</p>
      </footer>
    </>
  );
}
