import Button from "@/components/base/Button";
import { Link } from "react-router-dom";

const LadingPage = () => {
  return (
    <Link to={`/useFunnel`}>
      <Button>{"useFunnel"}</Button>
    </Link>
  );
};

export default LadingPage;
