import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type Props = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  autoComplete?: "off";
};

const CsInput = (props: Props) => {
  const {
    label,
    name,
    placeholder,
    type = "text",
    isRequired = false,
    autoComplete = "off",
  } = props;

  return (
    <>
      <div className="grid gap-2">
        {label && <Label htmlFor={name}>{label}</Label>}
        <Input
          name={name}
          type={type}
          required={isRequired}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
    </>
  );
};

export { CsInput };
