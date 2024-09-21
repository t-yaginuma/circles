import classNames from "classnames";
import { CsProfile } from "@/components/circles/CsProfile";
import { CsText } from "@/components/circles/CsText";

type Props = {
  text: string;
  isMe?: boolean;
};

const CsMessageBalloon = (props: Props) => {
  const { text, isMe } = props;

  return (
    <>
      <div
        className={classNames("bg-white rounded p-4", isMe ? "ml-6" : "mr-6 ")}
      >
        <CsProfile
          name="yagi"
          countryCode="JP"
          image="https://dwixiyvbqbrsernfiuwj.supabase.co/storage/v1/object/public/images/profiles/9fcd1d35-1a07-4efd-9eba-56c3173de79c.jpg"
        />
        <div className="break-words pl-14 mt-[-24px]">
          <CsText type="primary" size="sm">
            {text}
          </CsText>
        </div>
      </div>
    </>
  );
};

export { CsMessageBalloon };
