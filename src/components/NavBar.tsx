"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import { ButtonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { rustCompilar } from "@/lib/actions";

const NavBar = () => {
  const onClickRun = async () => {
    const data = await rustCompilar();
    console.log(data);
  };

  return (
    <nav className="flex w-full screen-max-width px-6 py-2 shadow-sm justify-between bg-zinc-900">
      <Link href="/" className="text-zinc-100 text-xl font-extrabold pt-1 ">
        Magic Compilar
      </Link>

      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 pt-1">
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select  Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Programming Language</SelectLabel>
                <SelectItem value="solidity">Solidity</SelectItem>
                <SelectItem value="rust">Rust</SelectItem>
                <SelectItem value="motoko">Motoko</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => onClickRun()}>
          <span className="px-3">Run</span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;

const navLists = ["Brand", "Popular", "Valuable"];
