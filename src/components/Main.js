export default function Main(props) {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">{props.children}</div>
    </main>
  );
}
