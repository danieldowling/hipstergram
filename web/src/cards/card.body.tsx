interface CardBodyData {
  body: string;
}

export const CardBody = (props: CardBodyData) => {
  return (
    <div>
      <p className="text-gray-700 text-base">{props.body}</p>
    </div>
  );
};
