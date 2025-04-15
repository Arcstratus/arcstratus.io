import Main from "@/ui/layout/main";
import { Contact } from "./sections/contact";
import { Products } from "./sections/products";

export default function Page() {
  return (
    <Main fluid>
      <Products />
      <Contact />
    </Main>
  );
}
