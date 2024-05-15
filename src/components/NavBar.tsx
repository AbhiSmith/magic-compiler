"use client";

import React, { useState } from "react";
import Link from "next/link";
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

interface CommandProps {
  onLanguageChange: (language: string) => void;
  onLabelChange: (label: string) => void;
  onClick: () => void;
}

const NavBar: React.FC<CommandProps> = ({
  onLanguageChange,
  onLabelChange,
  onClick,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("rust");
  const [selectedLabel, setSelectedLabel] = useState("medium");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    onLanguageChange(value);
  };

  const handleLabelChange = (value: string) => {
    setSelectedLabel(value);
    onLabelChange(value);
  };

  const handleRunClick = () => {
    onClick();
  };

  return (
    <nav className="flex w-full screen-max-width px-6 py-2 shadow-sm justify-between bg-zinc-900">
      <Link href="/" className="text-zinc-100 text-xl font-extrabold pt-1 ">
        Magic Compilar
      </Link>

      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 pt-1">
        <div className="flex gap-2">
          <Select onValueChange={(value) => handleLanguageChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue defaultValue={selectedLanguage} placeholder="Rust" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose Language</SelectLabel>
                <SelectItem value="rust">Rust</SelectItem>
                <SelectItem value="solidity">Solidity</SelectItem>
                <SelectItem value="motoko">Motoko</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleLabelChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue defaultValue={selectedLabel} placeholder="Easy" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Difficulty</SelectLabel>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleRunClick}>
          <span className="px-3">Run</span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;

const navLists = ["Brand", "Popular", "Valuable"];
