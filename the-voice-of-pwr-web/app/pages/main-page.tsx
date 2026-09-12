export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F8FB] flex flex-col">

    {/*1. navbar pasek główny*/ }
      <nav className="sticky top-0 z-50 w-full flex justify-between items-center py-4 px-8 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm">
        <div className="text-xl font-extrabold text-[#263A99]">
          GŁOS PWR
        </div>
        <div>
          <button className="px-5 py-2.5 bg-[#263A99] hover:bg-[#F0EBE5] text-white font-medium rounded-xl shadow-md transition duration-200 cursor-pointer">
            Zaloguj się
          </button>
        </div>
      </nav>
      
    {/* nagłówek witaj na forum itd */}
      <div className="text-center my-12 px-4">
        <h1 className="text-4xl font-bold text-[#263A99] mb-4 ">Witaj na forum PWR!</h1>
        <p className="text-lg text-slate-600">Zaloguj się do naszej społeczności i dziel się swoimi doświadczeniami!</p>
      </div>
    
    {/*hot topics*/}

    <section className="w-full bg-[#263A99] py-12 px-8 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center">
            Hot Topics
          </h2>
          
        </div>
    </section>

    {/* nasze kategorie */} 
    <section className="w-full bg-white py-12 px-8 shadow-md mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#263A99] text-center">
            Poznaj nasze kategorie
          </h2>
        </div>
    </section>
    </main>

    
  );
}