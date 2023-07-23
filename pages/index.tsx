import { useRouter } from 'next/router';
import { MainLayout } from '@/layout/MainLayout/MainLayout';

import { Description, ImageComponent, LinkComponents } from '@/components';

const LINK_HREF = ["/pricing", "/contact", "/about"];
const LINK_TITLE = ["Pricing", "Contact", "About"];
const LINK_DESCRIPTION = [
  "Redirgir a la pagina de Pricing",
  "Redirgir a la pagina de About",
  "Redirgir a la pagina de Contact",
];


export default function Home() {

  const { route } = useRouter();

  return (
    <MainLayout>
      <Description textCode={route.replace("/", "index")} />
      <ImageComponent />
      <LinkComponents
        href={LINK_HREF}
        title={LINK_TITLE}
        description={LINK_DESCRIPTION}
      />
    </MainLayout>
  );
}