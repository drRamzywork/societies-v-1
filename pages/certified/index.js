import ContainerSet from "../../components/container-set";
import Input from "../../components/input";
import FrameComponent10 from "../../components/frame-component10";
import FrameComponent9 from "../../components/frame-component9";
import ContactFooter from "../../components/contact-footer";
import Fotter1 from "../../components/fotter1";
import styles from "./index.module.css";
import DataGatherer from "../../components/data-gatherer";

const Page = () => {
  return (
    <div className={styles.page3}>
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
      {/* <ContainerSet /> */}
      <DataGatherer />
      <section className={styles.page3Inner}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>برنامج معتمد</h1>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameDiv}>
                  <div className={styles.frame}>
                    <h1 className={styles.h11}>التسجيل في برنامج معتمد</h1>
                  </div>
                  <Input prop="اسم الجمعية التابع لها" />
                </div>
              </div>
              <FrameComponent10
                icon="pending_I201:2934;197:1420"
                propGap="30px"
                propGap1="30px"
              />
              <FrameComponent9 />
              <div className={styles.inputCluster}>
                <Input prop="المنصب" propAlignSelf="unset" propWidth="346px" />
              </div>
            </div>
            <ContactFooter />
            <div className={styles.infoParent}>
              <img className={styles.infoIcon} alt="" src="/info.svg" />
              <div className={styles.buttonsbutton4}>
                <div className={styles.text}>
                  <div className={styles.div}>طباعه الوثيقة</div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <Fotter1 />
    </div>
  );
};

export default Page;
