"use client";
import {  useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";

type Product = {
  documentId: string;
  name: string;
  slug: string;
};

export default function ProductActions({ product }: { product: Product }) {
  const [isFav, setIsFav] = useState(false);
  const [isCart, setIsCart] = useState(false);

  return (
    <ul className="flex transition-all duration-500 -bottom-10 justify-center items-center gap-2 absolute left-0 right-0 group-hover:bottom-3">
      <li>
        <button
          type="button"
          // onClick={() => addToWishlist()}
          className="w-[38px] h-[38px] group/fav shadow-md cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-green-500 hover:rotate-[720deg] transition-all"
        >
          <span
            className={`transition-all ${
              isFav
                ? "text-red-600 group-hover/fav:text-white"
                : "text-stone-950 group-hover/fav:text-white"
            }`}
          >
            <AiFillHeart />
          </span>
        </button>
      </li>
      <li className="relative">
        <button
          type="button"
          // onClick={() => addToCart(1)}
          className="w-[38px] h-[38px] group/cart shadow-md flex justify-center items-center rounded-full transition-all bg-white cursor-pointer hover:bg-green-500 hover:rotate-[720deg]"
        >
          {isCart ? (
            <span className="transition-all text-yellow-600 group-hover/cart:text-white">
              <BsFillCartCheckFill />
            </span>
          ) : (
            <span className="transition-all text-stone-950 group-hover/cart:text-white">
              <BsFillCartFill />
            </span>
          )}
        </button>

        {/* Out of stock tooltip - FIXED POSITIONING */}
        {/* {isOutOfStock && showTooltip && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="bg-red-50 text-red-600 text-xs py-1 px-2 rounded whitespace-nowrap shadow-lg border border-red-100">
                            Out of Stock
                            Tooltip arrow
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-50  rotate-45"></div>
                        </div>
                    </div>
                )} */}
      </li>
    </ul>
  );
}
