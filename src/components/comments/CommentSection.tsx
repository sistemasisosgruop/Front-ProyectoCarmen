import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const CommentSection = (): JSX.Element => {
  return (
    <section className="mx-8 my-16 grid grid-cols-1 gap-8 px-4 py-8 rounded-xl bg-white sm:px-16 sm:mx-16 md:grid-cols-5 md:mx-24 md:px-8 lg:gap-16 lg:px-16 lg:grid-cols-3 lg:mx-32">
      <div className="w-full md:col-span-2 lg:col-span-1">
        <CommentInput />
      </div>
      <div className="md:col-span-3 lg:col-span-2">
        <CommentList />
      </div>
    </section>
  );
};

export default CommentSection;
