"use client";
import { useState, useEffect } from "react";
import EditorArea from "@/components/EditorArea";
import OutPutArea from "@/components/OutPutArea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import NavBar from "@/components/NavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rustConst, solidityConst, motokoConst } from "@/constants";
import axios from "axios";

export default function Home() {
  const [language, setLanguage] = useState("rust");
  const [code, setCode] = useState<string>(rustConst?.code);
  const [label, setLabel] = useState("easy");
  const [dirName, setDirName] = useState(rustConst?.name);
  const [output, setOutput] = useState<string>("");
  const [disable, setDisable] = useState(false);
  const [score, setScore] = useState(0);

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

  const handleSubmit = async () => {
    setDisable(true);
    if (language === "rust") {
      try {
        const response = await axios.post("/api/rust-compilar", {
          code: code,
        });
        const data = JSON.stringify(response.data);
        setOutput(data);
        if (response.status === 200) {
          if (label === "easy") {
            setScore(score + 1);
          } else if (label === "medium") {
            setScore(score + 2);
          } else if (label === "hard") {
            setScore(score + 3);
          }
        }
      } catch (error) {
        console.log("problem while compile rust");
      }
    } else if (language === "solidity") {
      try {
        const response = await axios.post("/api/solidity-compilar", {
          code: code,
        });
        const data = JSON.stringify(response.data);
        setOutput(data);
        if (response.status === 200) {
          if (label === "easy") {
            setScore(score + 1);
          } else if (label === "medium") {
            setScore(score + 2);
          } else if (label === "hard") {
            setScore(score + 3);
          }
        }
      } catch (error) {
        console.log("problem while compile solidity");
      }
    } else if (language === "motoko") {
      try {
        const response = await axios.post("/api/motoko-compilar", {
          code: code,
        });
        const data = JSON.stringify(response.data);
        setOutput(data);
        if (response.status === 200) {
          if (label === "easy") {
            setScore(score + 1);
          } else if (label === "medium") {
            setScore(score + 2);
          } else if (label === "hard") {
            setScore(score + 3);
          }
        }
      } catch (error) {
        console.log("problem while compile motoko");
      }
    }
    setDisable(false);
  };

  return (
    <>
      <NavBar
        onLanguageChange={handleLanguageChange}
        onLabelChange={handleLabelChange}
        onClick={handleSubmit}
        disable={disable}
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
              <OutPutArea output={output} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Both">
          <Card className="border-0 border-zinc-950">
            <CardHeader>
              <CardTitle>{dirName}</CardTitle>
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
                  <OutPutArea output={output} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Label className="flex  absolute top-0 right-0 mt-20 mr-20 bg-slate-50 px-6 py-3 rounded-2xl text-black ">
        Score: {score}
      </Label>
    </>
  );
}
