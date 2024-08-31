import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  id?: string;
  label?: string;
};

const CsCheckbox = (props: Props) => {
  const { label, id } = props;

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id={id} />
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export { CsCheckbox };
