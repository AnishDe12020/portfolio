import Link from "@/components/Shared/Link";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-x-2">
      <p>
        Made by <Link href="https://twitter.com/AnishDe12020">Anish De</Link>
      </p>
    </footer>
  );
};

export default Footer;
