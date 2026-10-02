import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Polymorphic button: renders a react-router <Link> when given `to`,
 * a plain <a> when given `href`, or a <button> otherwise. One
 * component so solid/outline/ghost styling and the press mechanic
 * never drift between the three cases.
 *
 * `pending` renders the control inert via aria-disabled + a no-op
 * click, rather than the native `disabled` attribute — used by the
 * resume button while the PDF hasn't been dropped in yet, so it stays
 * focusable and announces its state instead of disappearing from the
 * tab order.
 */
function Button({
  to,
  href,
  onClick,
  variant = "solid",
  size = "md",
  iconAfter,
  pending = false,
  download,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {iconAfter && (
        <span className="btn__icon" aria-hidden="true">
          {iconAfter}
        </span>
      )}
    </>
  );

  if (pending) {
    return (
      <button
        type="button"
        className={classes}
        aria-disabled="true"
        onClick={(event) => event.preventDefault()}
        {...rest}
      >
        {content}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

export default Button;
