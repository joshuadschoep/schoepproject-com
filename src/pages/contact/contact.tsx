import { useCallback, useMemo, useState } from 'react';
import styles from './contact.module.scss';
import { Email } from './email';
import { Input } from './input';
import { Schema, SubmitState } from './const';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BouncingDots } from './bounces';

export const Contact = () => {
  const [submitState, setSubmitState] = useState<SubmitState>('unsubmitted');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = useCallback(() => {
    setSubmitState('waiting');

    const httpBody = JSON.stringify({
      senderName: watch('name'),
      senderEmail: watch('returnAddress'),
      subject: watch('subject'),
      body: watch('body'),
    });

    axios
      .post('https://api.schoepproject.com/www/contact-me', httpBody)
      .then(() => setSubmitState('success'))
      .catch(() => setSubmitState('failure'));
  }, [watch]);

  const onFormChange = useCallback(() => setSubmitState('unsubmitted'), []);

  const [buttonContent, buttonStyles] = useMemo(() => {
    switch (submitState) {
      case 'unsubmitted':
        return [<p>Send</p>, ''];
      case 'waiting':
        return [<BouncingDots />, styles.waiting];
      case 'success':
        return [<p>Sent</p>, styles.success];
      case 'failure':
        return [<p>!</p>, styles.failure];
    }
  }, [submitState]);

  return (
    <article className={styles.contact}>
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit(onSubmit)} onChange={onFormChange}>
        <h3>Send me a message directly</h3>
        <Input
          className={styles.formItem}
          name="name"
          label="Your Name"
          placeholder="Your Name"
          required
          register={register}
          uniqueKey={1}
          error={errors.name?.message}
        />
        <Input
          className={styles.formItem}
          type="email"
          name="returnAddress"
          label="From"
          placeholder="Return Email"
          register={register}
          uniqueKey={1}
          error={errors.returnAddress?.message}
        />
        <Input
          className={styles.formItem}
          name="subject"
          label="Subject"
          placeholder="Subject"
          required
          uniqueKey={2}
          register={register}
          error={errors.subject?.message}
        />
        <Input
          className={styles.formItem}
          name="body"
          label="Body"
          placeholder="Body"
          required
          textarea
          uniqueKey={3}
          register={register}
          error={errors.body?.message}
        />
        <button
          className={buttonStyles}
          disabled={submitState !== 'unsubmitted'}
          type="submit"
        >
          {buttonContent}
        </button>
      </form>
      <Email />
    </article>
  );
};
