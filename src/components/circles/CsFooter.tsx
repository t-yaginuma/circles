import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

type Props = {};

const CsFooter = (props: Props) => {
  const {} = props;

  return (
    <>
      <footer className="w-full">
        <Separator />
        <div className="w-full p-6">
          <p className="">©Trane LLC 2025</p>
        </div>
      </footer>
    </>
  );
};

export { CsFooter };
