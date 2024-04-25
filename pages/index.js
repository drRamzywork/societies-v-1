import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import Newsbar from "../components/newsbar";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Fotter from "../components/fotter";
import styles from "./index.module.css";
import DataGatherer from "../components/data-gatherer";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/6334210-1@2x.png" />
          <img className={styles.icon1} alt="" src="/6334210-2@2x.png" />
        </div>
        <div className={styles.group}>
          <img className={styles.icon2} alt="" src="/6334210-1-1@2x.png" />
          <img className={styles.icon3} alt="" src="/6334210-2-1@2x.png" />
        </div>
        <div className={styles.container}>
          <img className={styles.icon4} alt="" src="/6334210-1-1@2x.png" />
          <img className={styles.icon5} alt="" src="/6334210-2-1@2x.png" />
        </div>
      </div>
      <div className={styles.homePageChild} />
      <main className={styles.frameGroup}>
        <section className={styles.frameContainer}>
          <DataGatherer />
          <FrameComponent5 />
          <Newsbar />
        </section>
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <Fotter logo1="/logo-1-2@2x.png" />
    </div>
  );
};

export default HomePage;
