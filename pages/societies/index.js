import DataGatherer from "../../components/data-gatherer";
import OvalOrchard from "../../components/oval-orchard";
import GroupComponent from "../../components/group-component";
import Fotter from "../../components/fotter";
import styles from "./index.module.css";

const Frame = ({ societiesData }) => {
  return (
    <div className={styles.div}>
      <main className={styles.logicGate}>
        <DataGatherer />
        {/* <OvalOrchard /> */}
        <section className={styles.logicGateInner}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                {/* <div className={styles.frameContainer}>
                  <div className={styles.arrowLeftWrapper}>
                    <img
                      className={styles.arrowLeftIcon}
                      alt=""
                      src="/arrow-left1.svg"
                    />
                  </div>
                </div> */}
                <div className={styles.frameParent1}>
                  <GroupComponent
                    rectangle35="/rectangle-35@2x.png"
                    propBackgroundImage="url('/rectangle-35@2x.png')"
                    propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                    propPadding1="var(--padding-smi) var(--padding-12xs)"
                    societiesData={societiesData}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.logicGateChild}>
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
        </section> */}
      </main>
      {/* <Fotter logo1="/logo-1-11@2x.png" /> */}
    </div>
  );
};

export default Frame;

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://map.rmz.one/api/list-regions-with-societies"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      props: { societiesData: data.data.data }, // passed to the page component as props
      revalidate: 10, // Incremental Static Regeneration (ISR) - revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Failed to fetch societies data:", error);
    return { props: { societiesData: [] } };
  }
}
