import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  href: string;
  text: string
}

const style = {
  color: '#adadad',
};

export const ActiveLink = ({ href, text }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={ asPath === href ? style : undefined}> {text} </a>
    </Link>
  )
}
