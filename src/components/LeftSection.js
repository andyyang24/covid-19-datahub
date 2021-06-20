export default function LeftSection(props) {
  return (
    <div className={`h-screen shadow-lg ${props.displayed ? "hidden" : "block"} lg:block lg:w-3/12 xl:w-2/12`}>
      {props.children}
    </div>
  );
}
