import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  name: string;
  label?: string;
  isRequired?: boolean;
};
const CsRadioGroup = (props: Props) => {
  const { name, label, isRequired } = props;

  return (
    <>
      <div className="grid gap-2">
        {label && <Label htmlFor={name}>{label}</Label>}
        <RadioGroup
          name={name}
          defaultValue="comfortable"
          required={isRequired}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">public</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">private</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export { CsRadioGroup };
