import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProuctCard = ({ product }: { product: Product }) => {
  return (
    <Card className=" bg-zinc-100  h-auto cursor-pointer flex flex-col  justify-between py-1 pb-2">
      <CardHeader className="gap-3 px-1 text-center mb-1 ">
        <CardTitle>{product.title}</CardTitle>
        <Image
          height={100}
          width={100}
          className="object-contain mx-auto max-h-[200px] "
          src={product.image}
          alt="No Image"
        />
        <CardDescription className="text-stone-900 text-base">
          {product.description.slice(0, 100) + "..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex px-3 flex-wrap gap-3   items-center w-full flex-col h-fit my-0 py-1 justify-between md:flex-row ">
        <span className="text-base font-medium">Price- ${product.price}</span>
        <span className="text-base font-medium">
          Category- {product.category}
        </span>
      </CardContent>
    </Card>
  );
};

export default ProuctCard;
