import { useInView } from "../hooks/useInView";

function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
