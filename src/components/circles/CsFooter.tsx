import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CsTextLink } from "@/components/circles/CsTextLink";
import getConfig from "next/config";

type Props = {};

const CsFooter = (props: Props) => {
  const {} = props;
  const { publicRuntimeConfig } = getConfig();
  const { version } = publicRuntimeConfig?.json;

  return (
    <>
      <footer className="w-full bg-muted/80">
        <Separator />
        <div className="w-full p-6">
          <ul>
            <li>
              <CsTextLink href="/about" text="About" />
            </li>
            <li>
              <CsTextLink href="/logos" text="Logos" />
            </li>
            <li>
              <CsTextLink href="/help" text="Help" />
            </li>
            <li>
              <CsTextLink href="/contribution" text="Contribution" />
            </li>
            <li>
              <CsTextLink href="/copyright" text="Copyright" />
            </li>
            <li>
              <CsTextLink href="/privacy" text="Privacy" />
            </li>
            <li>
              <CsTextLink href="/terms-of-use" text="Terms of Use" />
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            ©Trane llc. ({version})
          </p>
        </div>
      </footer>
    </>
  );
};

export { CsFooter };
