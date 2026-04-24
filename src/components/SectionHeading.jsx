import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <Reveal className={`section-heading section-heading-${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}

export default SectionHeading;
