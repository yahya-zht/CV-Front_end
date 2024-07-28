import NavbarCreate from "@/components/NavbarCreate";
import FormInfo from "@/components/FormInfo";
import Template from "@/components/Template";

export default function Create() {
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavbarCreate />
      </div>
      <div className="flex flex-row z-0">
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
