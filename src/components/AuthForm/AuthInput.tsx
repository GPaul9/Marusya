import styles from './AuthForm.module.scss';

type TProps = {
  type: React.HTMLInputTypeAttribute;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  error: boolean;
}

export const AuthInput = ({ type, Icon, placeholder, error, ...props }: TProps) => {
  return (
    <label className={`${styles.input} ${error ? styles.input_error : ''}`}>
      <Icon className={styles.input__icon} />
      <input
        className={styles.input__field}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </label>
  )
}
