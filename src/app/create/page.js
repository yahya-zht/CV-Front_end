import NavbarCreate from "@/components/NavbarCreate";
import FormInfo from "@/components/FormInfo";
import Template from "@/components/Template";

export default function Create() {
  return (
    <div className="h-svh flex flex-col">
      <NavbarCreate />
      <div className="flex flex-row h-full">
        <div className="w-1/2 bg-white scroll-m-1  overflow-y-auto h-screen">
          <FormInfo />
        </div>
        <div className="w-1/2">
          <Template />
        </div>
      </div>
    </div>
  );
}
