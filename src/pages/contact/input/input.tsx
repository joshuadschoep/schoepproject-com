import classNames from 'classnames';
import styles from './input.module.scss';
import { Tooltip } from 'react-tooltip';
import { useLayoutEffect, useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';

export interface InputProps {
  label?: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  className?: string;
  uniqueKey: number;
  register: UseFormRegister<any>;
}

const ANCHOR = 'error-anchor-element';

export const Input = ({
  required,
  name,
  label,
  type,
  placeholder,
  textarea,
  className,
  error,
  uniqueKey,
  register,
}: InputProps) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const isAttached = window.innerWidth > 904;

  useLayoutEffect(() => {
    setOpenTooltip(error !== '');
    // if (error !== "") {
    //   setTimeout(() => setOpenTooltip(false), 90000);
    // }
  }, [error]);

  return (
    <div className={classNames(className, styles.wrapper)}>
      <span className={styles.anchor} />
      <label htmlFor={name}>
        {label}
        {required && <sup>*</sup>}
      </label>
      {!textarea ? (
        <input
          id={`${ANCHOR}-${uniqueKey}`}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      ) : (
        <textarea
          id={`${ANCHOR}-${uniqueKey}`}
          placeholder={placeholder}
          {...register(name)}
          rows={20}
        />
      )}
      {!isAttached && <span className={styles.error}>{error}</span>}
      <Tooltip
        className={styles.tooltip}
        isOpen={isAttached && openTooltip}
        place="top"
        anchorSelect={`#${ANCHOR}-${uniqueKey}`}
        content={error}
      />
    </div>
  );
};
