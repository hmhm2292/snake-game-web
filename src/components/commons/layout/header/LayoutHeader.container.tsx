import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const LayoutHeader = () => {
  const router = useRouter();

  return <LayoutHeaderUI />;
};

export default LayoutHeader;
