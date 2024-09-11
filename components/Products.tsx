"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProuctCard from "./ProuctCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [getCategory, setGetCategory] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("asc");
  const [limit, setLimit] = useState<number>(5);

  const getAllCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        // Prepend "All" to the categories list
        setGetCategory(["All", ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products?sort=" + sort + "&limit=" + limit)
      .then((res) => {
        const filteredProducts =
          category === "All"
            ? res.data
            : res.data.filter(
                (product: Product) => product.category === category
              );
        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [category, sort, limit]);

  return (
    <main className="flex lg:flex-row flex-col items-start gap-3">
      <div className="px-3 py-4 flex-[0.2]  flex flex-col gap-y-4 items-start">
        <h2 className="font-semibold text-xl">Filters</h2>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {getCategory.length > 0 &&
              getCategory.map((cat, i) => (
                <SelectItem key={i} value={cat}>
                  {cat}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <RadioGroup defaultValue="asc" className="my-3 text-white">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => setSort("asc")}
              className=" text-white"
              value="asc"
              id="asc"
            />
            <Label htmlFor="asc">Ascending</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="desc"
              className=" text-white"
              onClick={() => setSort("desc")}
              id="desc"
            />
            <Label htmlFor="desc">Descending</Label>
          </div>
        </RadioGroup>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="limit">Limit</Label>
          <Input onChange={(e)=>setLimit(Number(e.target.value))} type="number" id="limit" placeholder="5" />
        </div>
      </div>
      <div className="px-3 py-5 flex-[0.8]  border-l-2 border-gray-300">
        <h3 className="text-xl font-semibold mb-3">Products</h3>
        <div className="grid sm:grid-cols-2 px-2 lg:grid-cols-3 grid-cols-1 gap-3">
          {products.length > 0 &&
            products.map((product) => (
              <ProuctCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
