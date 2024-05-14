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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <Tabs defaultValue="Editor" className="w-full mt-1">
        <TabsList className="grid w-[400px] grid-cols-3 ml-3 mt-3">
          <TabsTrigger value="Editor">Editor</TabsTrigger>
          <TabsTrigger value="Output">Output</TabsTrigger>
          <TabsTrigger value="Both">Both</TabsTrigger>
        </TabsList>
        <TabsContent value="Editor">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>Main.sol</CardTitle>
            </CardHeader>
            <CardContent className="">
              <EditorArea />
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
                    <EditorArea />
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
