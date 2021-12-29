interface CardTitleData {
  title: string;
}

export const CardTitle = (props: CardTitleData) => {
  return (
    <div className="font-bold text-xl mb-2">
      <h2>{props.title}</h2>
    </div>
  );
};
