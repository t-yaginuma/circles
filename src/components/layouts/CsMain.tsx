type Props = {
  children: React.ReactNode;
};

const CsMain = (props: Props) => {
  const { children } = props;

  return (
    <main className="flex flex-1 flex-col flex-grow gap-4 p-4 lg:gap-6 lg:p-6">
      {children}
    </main>
  );
};

export { CsMain };
