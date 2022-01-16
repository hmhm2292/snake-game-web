import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";

const Layout = (props: any) => {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
};

export default Layout;
