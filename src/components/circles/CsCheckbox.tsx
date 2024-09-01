import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

type Props = {
  id?: string;
  checked?: boolean;
  label?: string | React.ReactElement;
  onChange?: (e: CheckedState) => void;
};

const CsCheckbox = (props: Props) => {
  const { label, id, checked, onChange } = props;

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
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
