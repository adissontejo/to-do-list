import { forwardRef, InputHTMLAttributes, LegacyRef, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Container } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  errorMessage?: string;
};

const Input = (
  { label, error, errorMessage, className, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  const id = useId();

  return (
    <Container className={className} error={error}>
      {label && <label htmlFor={id}>{label}</label>}
      <input ref={ref} id={id} {...rest} />
      <AnimatePresence>
        {error && errorMessage && (
          <motion.p
            className="error"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </Container>
  );
};

const InputForwarded = forwardRef<HTMLInputElement, InputProps>(Input);

export { InputForwarded as Input };
