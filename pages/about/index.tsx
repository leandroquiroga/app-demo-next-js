import { useRouter } from "next/router";
import { MainLayout } from "@/layout/MainLayout/MainLayout";

import { Description, ImageComponent, LinkComponents } from "@/components";

const LINK_HREF = ["/", "/contact", "/pricing"];
const LINK_TITLE = ["Home", "Contact", "Pricing"];
const LINK_DESCRIPTION = [
  "Redirgir a la pagina de Home",
  "Redirgir a la pagina de Pricing",
  "Redirgir a la pagina de Contact",
];

export default function Home() {
  const { route } = useRouter();

  return (
    <MainLayout>
      <Description textCode={route.replace('/about', 'about/index')} />
      <ImageComponent />
      <LinkComponents
        href={LINK_HREF}
        title={LINK_TITLE}
        description={LINK_DESCRIPTION}
      />
    </MainLayout>
  );
}