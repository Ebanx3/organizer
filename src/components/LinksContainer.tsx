import Link from "./Link";

export default function LinksContainer({
  content,
  removeLink,
}: {
  content: Content;
  removeLink: (element: Link) => void;
}) {
  return (
    <div className="w-full max-h-80vh min-h-40vh flex flex-col">
      {content.links.map((link) => (
        <Link link={link} key={link.title} removeLink={removeLink} />
      ))}
    </div>
  );
}
