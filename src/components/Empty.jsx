import { EmojiSad } from "iconsax-react";

const Empty = () => {
  return (
    <div className="flex flex-col gap-y-2 mt-10 justify-center items-center">
      <EmojiSad size="60" color="#9333ea" />
      <p className="text-xl font-semibold">There is not any todo</p>
    </div>
  );
};

export default Empty;
