import NavLocation from "@/components/NavLocation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Toys from "./Toys";
import WoodenToys from "./WoodenToys";
import StuffedAnimals from "./StuffedAnimals";

const Catalog = () => {
  return (
    <div className="container min-h-screen">
      <NavLocation />
      <Tabs defaultValue="toys" className="w-[400px mb-[60px] lg:mb-[120px]">
        <TabsList className="flex justify-center">
          <TabsTrigger value="toys">All Toys</TabsTrigger>
          <TabsTrigger value="wooden-toys">Wooden Toys</TabsTrigger>
          <TabsTrigger value="stuffed-animals">Stuffed Animals</TabsTrigger>
        </TabsList>
        <hr className="mb-8 mt-6 h-[2px] w-full rounded bg-slate-500" />
        <TabsContent value="toys">
          <Toys />
        </TabsContent>
        <TabsContent value="wooden-toys">
          <WoodenToys />
        </TabsContent>
        <TabsContent value="stuffed-animals">
          <StuffedAnimals />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Catalog;
