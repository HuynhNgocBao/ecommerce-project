import styles from "./Button.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Button({ children, className, primary = false,secondary=false, disabled = false, onClick, ...passProps }) {
  const classes = cx({
    [className]: className,
    primary,
    secondary,
    disabled,
  });
  const props = {
    onClick,
    ...passProps,
  }

  return <button className={classes} disabled={disabled} {...props}>{children}</button>;
}

export default Button;
