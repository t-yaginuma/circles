import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Option = {
  id: string;
  value: string;
  label: string;
};

type Props = {
  name: string;
  label?: string;
  isRequired?: boolean;
  defaultValue: string;
  items: Option[];
};
const CsRadioGroup = (props: Props) => {
  const { name, label, defaultValue, isRequired, items } = props;

  return (
    <>
      <div className="grid gap-2">
        {label && <Label htmlFor={name}>{label}</Label>}
        <RadioGroup
          id={name}
          name={name}
          defaultValue={defaultValue}
          required={isRequired}
        >
          {items.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-2">
                <RadioGroupItem value={item.value} id={item.id} />
                <Label htmlFor={item.id}>{item.label}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </>
  );
};

export { CsRadioGroup };
