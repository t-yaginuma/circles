type Props = {
  heading: string;
  description?: string;
  level?: "h1";
};

const CsHeading = (props: Props) => {
  const { level = "h1", heading, description } = props;

  return (
    <div>
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        {heading}
      </h1>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export { CsHeading };
