interface CardLikesData {
  notice: number;
}

export const CardLikes = (props: CardLikesData) => {
  return (
    <div className="pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        Likes: {props.notice}
      </span>
    </div>
  );
};
