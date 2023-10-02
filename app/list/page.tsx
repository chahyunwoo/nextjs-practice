"use client";

import Image from "next/image";
import food0 from "@/public/images/food0.png";
import food1 from "@/public/images/food1.png";
import food2 from "@/public/images/food2.png";
import { useState } from "react";

interface ICounts {
  [key: string]: number;
}

const FOOD_IMAGES = [food0, food1, food2];

export default function List() {
  let goods: string[] = ["Tomtoes", "Pasta", "Coconut"];

  const [counts, setCounts] = useState(() => {
    const initialCounts: ICounts = {};

    goods.forEach((_, index) => {
      initialCounts[index] = 1;
    });
    return initialCounts;
  });

  const handleClickPlus = (index: number) => {
    setCounts((prev) => ({
      ...prev,
      [index.toString()]: prev[index.toString()] + 1,
    }));
  };

  const handleClickMinus = (index: number) => {
    setCounts((prev) => ({
      ...prev,
      [index.toString()]: Math.max(prev[index.toString()] - 1, 1),
    }));
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {goods.map((good, index) => (
        <div key={index} className="list">
          <div className="w-full relative h-40">
            <Image src={FOOD_IMAGES[index]} fill alt={good} />
          </div>
          <h4>{good} $40</h4>
          <button onClick={() => handleClickMinus(index)}>-</button>
          <span> {counts[index] || 1} </span>
          <button
            onClick={() => {
              handleClickPlus(index);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
