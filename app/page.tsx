import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main
      className="flex flex-col items-start justify-start px-6 py-3 bg-stone-800 min-h-screen text-white  ">
        <Header/>
        <Products/>
      </main>
  );
}
