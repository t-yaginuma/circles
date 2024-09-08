type Props = {
  children: React.ReactNode;
  action?: (formData: FormData) => Promise<void>;
};

const CsForm = (props: Props) => {
  const { children, action } = props;

  return (
    <>
      <form action={action}>{children}</form>
    </>
  );
};

export { CsForm };
