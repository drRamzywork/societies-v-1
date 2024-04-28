import { Button } from "@mui/material";
import Component from "../../../components/component";
import BlurFilter from "../../../components/blur-filter";
import InputPort from "../../../components/input-port";
import FrameComponent7 from "../../../components/frame-component7";
import Fotter from "../../../components/fotter";
import styles from "./index.module.css";
import DataGatherer from "../../../components/data-gatherer";

const Frame1 = ({ societyDetails }) => {
  console.log(societyDetails, "societyDetails")
  return (
    <div className={styles.div}>

      {/* <Component /> */}
      <DataGatherer />
      <main className={styles.inner}>
        <section className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.component4Wrapper}>
                <Button
                  className={styles.component4}
                  endIcon={<img width="28px" height="28px" src="/vector.svg" />}
                  disableElevation={true}
                  variant="contained"
                  href="/societies"
                  sx={{
                    background: "#f5f5f5",
                    borderRadius: "24px",
                    "&:hover": { background: "#f5f5f5" },
                    height: 76,

                    '.MuiButton-endIcon': {
                      margin: '0 !important'
                    }
                  }}
                />
              </div>
              <div className={styles.wrapperRectangle35}>
                <img
                  className={styles.wrapperRectangle35Child}
                  loading="lazy"
                  alt=""
                  src="/rectangle-35@2x.png"
                />
              </div>
            </div>
          </div>
          <BlurFilter societyDetails={societyDetails} />
          <div className={styles.frameDiv}>
            <div className={styles.dataHubParent}>
              <div className={styles.dataHub}>
                <div className={styles.div1}>
                  منصة تجمع الجمعيات الدولية في مكان واحد هي تطبيق رائع يوفر
                  منصة مركزية لتبادل المعرفة والخبرات بين الجمعيات الدولية
                  المختلفة. تهدف هذه المنصة إلى تسهيل التواصل والتعاون بين
                  الجمعيات الدولية في مختلف المجالات، سواء كانت تتعلق بالتنمية
                  المستدامة، حقوق الإنسان، الصحة، التعليم، أو أي مجال آخر.
                </div>
              </div>
              <b className={styles.b}>الخدمات المقدمة</b>
              <div className={styles.inputPortWrapper}>
                <InputPort prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه" />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <InputPort
                prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم"
                propPadding="var(--padding-xs) 0px 0px"
              />
            </div>
            <div className={styles.frameWrapper2}>
              <InputPort
                prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه"
                propPadding="var(--padding-2xs) 0px 0px"
              />
            </div>
            <b className={styles.b1}>مشاركات الجمعية</b>
            <div className={styles.frameParent1}>
              <div className={styles.parent1}>
                <div className={styles.div2}>
                  مشاركة في افطار العديد من العمال في الحرم المكي
                </div>
                <div className={styles.parent2}>
                  <div className={styles.div3}>
                    <p
                      className={styles.p}
                    >{`مشاركة في تنظيم ألبات العمل في البيئة والاهتمام `}</p>
                    <p className={styles.p1}>بنظافة المنطقة</p>
                  </div>
                  <div className={styles.div4}>
                    مشاركة في تنظيم الاحتفالات العامة والخاصة بمنطقة الرياض
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.parent3}>
                  <div className={styles.div5}>
                    مشاركة في تنظيم الاحتفالات العامة والخاصة بمنطقة الرياض
                  </div>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.ellipseDiv} />
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.parent4}>
                    <div className={styles.div6}>
                      <p className={styles.p2}>
                        مشاركة في الاستثمار العام في معظم الشركات الكبري في
                      </p>
                      <p className={styles.p3}>
                        {" "}
                        الرياض ومساعدة المشاريع الصغيرة
                      </p>
                    </div>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild1} />
                    </div>
                  </div>
                  <div className={styles.parent5}>
                    <div className={styles.div7}>
                      <p className={styles.p4}>
                        مشاركة في الاستثمار العام في معظم الشركات الكبري في
                      </p>
                      <p className={styles.p5}>
                        {" "}
                        الرياض ومساعدة المشاريع الصغيرة
                      </p>
                    </div>
                    <div className={styles.ellipseFrame}>
                      <div className={styles.frameChild2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent7 />
        </section>
      </main>
      <Fotter logo1="/logo-1-11@2x.png" />
    </div>
  );
};

export default Frame1;


export async function getStaticPaths() {
  try {
    const response = await fetch("https://map.rmz.one/api/list-regions-with-societies");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    let paths = [];
    data.data.data.forEach(region => {
      region.societies.forEach(society => {
        paths.push({ params: { id: society.id.toString() } });
      });
    });

    return { paths, fallback: 'blocking' }; // using 'blocking' for new paths generation at request time
  } catch (error) {
    console.error("Failed to fetch paths:", error);
    return { paths: [], fallback: 'blocking' };
  }
}


export async function getStaticProps(context) {
  const { id } = context.params;
  try {
    const url = `https://map.rmz.one/api/get-society/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const societyDetails = await response.json();

    return {
      props: { societyDetails: societyDetails.data }, // passing society details as props to the page
      revalidate: 10, // optionally use ISR
    };
  } catch (error) {
    console.error("Failed to fetch society data:", error);
    return {
      props: { societyDetails: null }
    };
  }
}

