export default function RightSection(props) {
  return (
    <div className="flex flex-col w-full lg:w-9/12 xl:w-10/12 bg-gray-100 bg-gradient-to-br from-blue-100 to-purple-200">
      {props.children}
    </div>
  );
}
