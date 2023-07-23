import { Description, ImageComponent, LinkComponents } from "@/components";
import { MainLayout } from "@/layout/MainLayout/MainLayout";
import { useRouter } from "next/router";

const LINK_HREF = ["/", "/contact", "/about"];
const LINK_TITLE = ["Home", "Contact", "About"];
const LINK_DESCRIPTION = [
  "Redirgir a la pagina de Home",
  "Redirgir a la pagina de About",
  "Redirgir a la pagina de Contact",
];

export default function Pricing() {
  const { route } = useRouter();

  return (
    <MainLayout>
      <Description textCode={route.replace('/pricing', 'pricing/index')} />
      <ImageComponent />
      <LinkComponents
        href={LINK_HREF}
        title={LINK_TITLE}
        description={LINK_DESCRIPTION}
      />
    </MainLayout>
  )
};