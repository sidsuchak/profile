import { useRouteError } from "react-router-dom";

export const Ich = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="ich">
      <h1>Oops</h1>
      <h2>Something went wrong...</h2>
    </div>
  );
};
