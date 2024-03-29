import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const Home = () => {
   return (
      <>
         <section className="px-6 md:px-20 pt-10 pb-24">
            <div className="flex max-xl:flex-col gap-16">
               <div className="flex flex-col justify-center">
                  <p className="small-text">
                     Berbelanja dengan cerdas dimulai di sini
                     <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="arrow-right"
                        width={16}
                        height={16}
                     />
                  </p>
                  <h1 className="head-text">
                     Rasakanlah
                     <span className="text-primary"> Harga Terbaik</span>
                  </h1>
                  <p className="mt-6">
                     Tingkatkan daya saing dengan analitika produk canggih dan
                     pelacakan harga untuk konversi, keterlibatan, dan retensi
                     pelanggan yang lebih optimal!
                  </p>
                  <SearchBar />
               </div>
               <HeroCarousel />
            </div>
         </section>

         <section className="trending-section">
            <h2 className="section-text">Trending</h2>

            <div className="flex flex-wrap gap-x-8 gap-y-16">
               {["Apple iPhone 15", "Book", "Sneakers"].map((product) => (
                  <div>{product}</div>
               ))}
            </div>
         </section>
      </>
   );
};

export default Home;
