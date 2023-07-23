import { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";

import { MainLayout } from "@/layout/MainLayout/MainLayout";

import { Description, ImageComponent, LinkComponents } from "@/components";
import { DarkLayout } from "@/layout/DarkLayout/DarkLayout";

const LINK_HREF = ["/", "/pricing", "/about"];
const LINK_TITLE = ["Home", "Pricing", "About"];
const LINK_DESCRIPTION = [
  "Redirgir a la pagina de Home",
  "Redirgir a la pagina de About",
  "Redirgir a la pagina de Pricing",
];


export default function Contact() {
  const { route } = useRouter();

  return (
    <>
      <Description textCode={route.replace('/contact', 'contact/index')} />
      <ImageComponent />
      <LinkComponents
        href={LINK_HREF}
        title={LINK_TITLE}
        description={LINK_DESCRIPTION}
      />
    </>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};