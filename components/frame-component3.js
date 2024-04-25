import { useCallback } from "react";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  const onCheckboxIconClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logo1Wrapper}>
            <img className={styles.logo1Icon} alt="" src="/logo-1-1@2x.png" />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <div className={styles.div}>
                اللجنة التنسيقية لجمعيات الدعوة بالمملكة
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.searchParent}>
                  <img
                    className={styles.searchIcon}
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                  <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                      <b className={styles.b}>بحث</b>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent4 prop="خريطه المملكة العربية" />
            </div>
          </div>
        </div>
        <div className={styles.imageHubWrapper}>
          <div className={styles.imageHub}>
            <div className={styles.containerCluster}>
              <div className={styles.containerClusterChild} />
              <div className={styles.container}>
                <b className={styles.b1}>ابحث عن الجمعية</b>
              </div>
              <div className={styles.triangleTrioWrapper}>
                <div className={styles.triangleTrio}>
                  <div className={styles.triangleTrioChild} />
                  <img
                    className={styles.nonCategorizedIcon}
                    loading="lazy"
                    alt=""
                    src="/noncategorized.svg"
                  />
                </div>
              </div>
              <div className={styles.pol}>
                <div className={styles.frameParent1}>
                  <div className={styles.parent}>
                    <div className={styles.div1}>اظهار جميع الجمعيات</div>
                    <input className={styles.frameInput} type="checkbox" />
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div2}>منطقة الرياض</div>
                    <div className={styles.checkboxWrapper}>
                      <img
                        className={styles.checkboxIcon}
                        alt=""
                        src="/checkbox.svg"
                        onClick={onCheckboxIconClick}
                      />
                    </div>
                  </div>
                  <div className={styles.parent1}>
                    <div className={styles.div3}>منطقة الجوف</div>
                    <input className={styles.frameInput1} type="checkbox" />
                  </div>
                  <div className={styles.parent2}>
                    <div className={styles.div4}>منطقة الباحة</div>
                    <input className={styles.frameInput2} type="checkbox" />
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div5}>منطقة نجران</div>
                    <input className={styles.frameInput3} type="checkbox" />
                  </div>
                  <div className={styles.parent4}>
                    <div className={styles.div6}>منطقة الحدود الشمالية</div>
                    <input className={styles.frameInput4} type="checkbox" />
                  </div>
                </div>
                <div className={styles.polInner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.parent5}>
              <div className={styles.div7}>جمعية الرياض العامة</div>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/rectangle-69@2x.png"
                />
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-38.svg"
                />
                <div className={styles.wrapperFrame39}>
                  <img
                    className={styles.wrapperFrame39Child}
                    loading="lazy"
                    alt=""
                    src="/frame-39.svg"
                  />
                </div>
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/frame-38.svg"
                />
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/frame-38.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
                <img
                  className={styles.frameChild4}
                  loading="lazy"
                  alt=""
                  src="/group-4.svg"
                />
                <img
                  className={styles.frameChild5}
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
