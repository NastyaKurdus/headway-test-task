import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={styles.btn}
    >
      {children}
    </button>
  );
};
