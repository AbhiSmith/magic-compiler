"use client";
import { useState, useEffect } from "react";
import EditorArea from "@/components/EditorArea";
import OutPutArea from "@/components/OutPutArea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NavBar from "@/components/NavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rustConst, solidityConst, motokoConst } from "@/constants";

export default function Home() {
  const [language, setLanguage] = useState("rust");
  const [code, setCode] = useState<string>(rustConst?.code);
  const [label, setLabel] = useState("");
  const [dirName, setDirName] = useState(rustConst?.name);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        if (language === "rust") {
          setCode(rustConst?.code);
          setDirName(rustConst?.name);
        } else if (language === "solidity") {
          setCode(solidityConst?.code);
          setDirName(solidityConst?.name);
        } else if (language === "motoko") {
          setCode(motokoConst?.code);
          setDirName(motokoConst?.name);
        }
      } catch (error) {
        console.error("Error fetching code:", error);
      }
    };
    fetchCode();
  }, [language]);

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  const handleLabelChange = (label: string) => {
    setLabel(label);
  };
  const handleSubmit = () => {
    // Handle submit logic
    console.log("Form submitted!");
  };

  return (
    <>
      <NavBar
        onLanguageChange={handleLanguageChange}
        onLabelChange={handleLabelChange}
        onClick={handleSubmit}
      />
      <Tabs defaultValue="Editor" className="w-full mt-1">
        <TabsList className="grid w-[400px] grid-cols-3 ml-3 mt-3">
          <TabsTrigger value="Editor">Editor</TabsTrigger>
          <TabsTrigger value="Output">Output</TabsTrigger>
          <TabsTrigger value="Both">Both</TabsTrigger>
        </TabsList>
        <TabsContent value="Editor">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>{dirName}</CardTitle>
            </CardHeader>
            <CardContent className="">
              <EditorArea language={language} value={code} onChange={setCode} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Output">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>Output</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <OutPutArea />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Both">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>Main.sol</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-3 xl:min-h-[800px]">
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-center ">
                    <EditorArea
                      language={language}
                      value={code}
                      onChange={setCode}
                    />
                  </div>
                </div>
                <div className="hidden bg-muted lg:block overflow-hidden h-fit">
                  <OutPutArea />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
