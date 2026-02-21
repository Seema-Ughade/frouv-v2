import Link from 'next/link';

const hover_image = '/frouv-v2/CategoryNav/hover_img.png';

const categories = [
  { id: 'beauty', title: 'Beauty & Care', normalIcon: '/frouv-v2/CategoryNav/beauty-care.png', hoverIcon: hover_image, path: '/category/beauty-personal-care' },
  { id: 'groceries', title: 'Groceries', normalIcon: '/frouv-v2/CategoryNav/groceries.png', hoverIcon: hover_image, path: '/category/groceries' },
  { id: 'health', title: 'Health Wellness', normalIcon: '/frouv-v2/CategoryNav/natural health.png', hoverIcon: hover_image, path: '/category/natural-health-wellness' },
  { id: 'packaging', title: 'Pack & Dispose', normalIcon: '/frouv-v2/CategoryNav/packaging and disposal.png', hoverIcon: hover_image, path: '/category/packaging-disposals' },
  { id: 'home-living', title: 'Home & Living', normalIcon: '/frouv-v2/CategoryNav/home-living.png', hoverIcon: hover_image, path: '/category/home-living' },
  { id: 'Solar', title: 'Solar Energy', normalIcon: '/frouv-v2/CategoryNav/solar energy.png', hoverIcon: hover_image, path: '/category/solar-energy' },
  { id: 'Travel & bags', title: 'Travel & bags', normalIcon: '/frouv-v2/CategoryNav/travel.png', hoverIcon: hover_image, path: '/category/travel-bags' },
  { id: 'Sustainable', title: 'Eco Fashion', normalIcon: '/frouv-v2/CategoryNav/sustanable fashion.png', hoverIcon: hover_image, path: '/category/sustainable-fashion' },
  { id: 'Toys & Games', title: 'Toys & Stationary', normalIcon: '/frouv-v2/CategoryNav/toys.png', hoverIcon: hover_image, path: '/category/toys-games' },
  { id: 'gifts', title: 'Gifts & Curated Kits', normalIcon: '/frouv-v2/CategoryNav/gift.png', hoverIcon: hover_image, path: '/category/gifts-curated-kits' },
];

const CategoryNavigation = () => {
  return (
    <div className="lg:top-[92px] z-40 bg-white dark:bg-[#0a0a0a] dark:text-white w-full border-b border-gray-200">
      {/* Mobile & Tablet: Horizontal Scrollable */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide py-3 lg:px-0 px-2 sm:px-2">
        <div className="flex items-start gap-2.5 min-w-max">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.path}
              className="group shrink-0 w-[64px] xs:w-[68px] sm:w-[72px] flex flex-col items-center gap-1"
            >
              <div className="w-[40px] h-[40px] shrink-0 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                <img
                  src={category.normalIcon}
                  alt={category.title}
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] leading-tight dark:text-white text-center wrap-break-word">
                {category.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Scrollable Layout */}
      <div className="hidden lg:block pb-6  pt-4">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-[35.5px] min-w-max px-0 py-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.path}
                className="group shrink-0 w-[110px] rounded-[5px] p-2 flex flex-col items-center justify-center gap-1 text-gray-700"
              >
                <div className="w-[59px] bg-[#F5F5F5] py-2 rounded-[53px] items-center justify-center flex p-1 h-[51px]">
                  <img
                    src={category.normalIcon}
                    alt={category.title}
                    width={35}
                    height={35}
                    className=""
                  />
                </div>
                <span className="w-[118px] dark:text-white font-inter font-normal mt-2 text-[#000000] leading-tight tracking-[0.88%] text-center text-[14px]">
                  {category.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryNavigation;
