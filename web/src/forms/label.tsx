interface LabelData {
  name: string;
}

export const Label = (props: LabelData) => {
  return (
    <label
      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
      htmlFor="inline-password"
    >
      {props.name}
    </label>
  );
};

//export default Label;
