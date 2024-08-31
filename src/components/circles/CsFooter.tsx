import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  isInternal?: boolean;
};

const CsFooter = (props: Props) => {
  const { isInternal } = props;

  return (
    <>
      <footer className="w-full">
        {isInternal ? (
          <div>
            <p className="font-federal text-orange">Trane LLC.</p>
          </div>
        ) : (
          <div className="w-full lg:p-6">
            <p className="font-federal text-orange">Trane LLC.</p>
          </div>
        )}
      </footer>
    </>
  );
};

export { CsFooter };
