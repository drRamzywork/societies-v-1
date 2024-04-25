import DataGatherer from "../../components/data-gatherer";
import OvalOrchard from "../../components/oval-orchard";
import GroupComponent from "../../components/group-component";
import Fotter from "../../components/fotter";
import styles from "./index.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
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
      <main className={styles.logicGate}>
        <DataGatherer />
        <OvalOrchard />
        <section className={styles.logicGateInner}>
          <div className={styles.frameDiv}>
            <h2 className={styles.h2}>جمعيات الشرقية</h2>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.arrowLeftWrapper}>
                    <img
                      className={styles.arrowLeftIcon}
                      alt=""
                      src="/arrow-left1.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                  />
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-40xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) 0px"
                  />
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-40xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) 0px"
                  />
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.logicGateChild}>
          <div className={styles.parent1}>
            <h2 className={styles.h21}>جمعيات المدينة</h2>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.arrowLeftContainer}>
                    <img
                      className={styles.arrowLeftIcon1}
                      alt=""
                      src="/arrow-left1.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                  />
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                  />
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                  />
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Fotter logo1="/logo-1-11@2x.png" />
    </div>
  );
};

export default Frame;
