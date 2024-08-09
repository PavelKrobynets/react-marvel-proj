import "./singleInfoPage.scss";
import InfoHandler from "../infoHandler/InfoHandler";
import AppBaner from "../appBanner/AppBanner";

export default function SingleCharPagejsjs() {
  return (
    <>
      <AppBaner />
      <InfoHandler char={"char"} />
    </>
  );
}
