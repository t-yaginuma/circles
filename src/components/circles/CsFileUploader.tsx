import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  id?: string;
  label?: string;
  name: string;
  type: "audio" | "image";
};

const CsFileUploader = (props: Props) => {
  const { id, name, type, label } = props;

  const accept = type === "audio" ? "audio/*, mp3 audio/*, wav" : "image/*";

  return (
    <>
      <div className="grid gap-2">
        {label && <Label htmlFor={name}>{label}</Label>}
        <Input id={id} name={name} accept={accept} type="file" />
      </div>
    </>
  );
};

export { CsFileUploader };
