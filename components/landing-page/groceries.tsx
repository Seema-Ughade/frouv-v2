"use client";

export default function Groceries() {
  const itemsToRender = [
    {
      id: 1,
      sub_category: "Fruits & Vegetables",
      slug: "fruits-vegetables",
      imageUrl: "/frouv-v2/banner/banner1.webp",
    },
    {
      id: 2,
      sub_category: "Dairy Products",
      slug: "dairy-products",
      imageUrl: "/frouv-v2/banner/banner2.png",
    },
    {
      id: 3,
      sub_category: "Snacks",
      slug: "snacks",
      imageUrl: "/frouv-v2/banner/banner3.png",
    },
    {
      id: 4,
      sub_category: "Beverages",
      slug: "beverages",
      imageUrl: "/frouv-v2/banner/banner4.webp",
    },
  ];

  return (
    <section className="w-full shadow-sm ring-1 ring-black/5 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <h2 className="text-lg text-green-900 sm:text-xl font-semibold tracking-tight">
          Groceries
        </h2>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[350px] sm:h-[460px] md:h-[200px] lg:h-[460px] md:grid-cols-4 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
        {itemsToRender.map((cate) => {
          const imageUrl = cate.imageUrl;

          return (
            <a
              key={cate.id}
              href={`/subcategory/${cate.slug}`}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
             
              <img
                src={imageUrl}
                alt={cate.sub_category}
                className="w-full h-full object-cover  "
              />
              {/* Overlay with name */}
              <div className="pointer-events-none absolute inset-x-1 bottom-1">
                <div className="rounded-full px-2 py-1 text-[11px] sm:text-[11px] md:text-sm lg:text-sm text-center text-green-700 sm:text-xs font-medium shadow-sm bg-white/85 backdrop-blur">
                  {cate.sub_category}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
