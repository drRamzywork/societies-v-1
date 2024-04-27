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
import { useEffect, useState } from "react";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HomePage = () => {
  const [societiesListSocieties, setSocietiesListSocieties] = useState([]);

  useEffect(() => {
    const fetchAllSocietiesListSocieties = async () => {
      try {
        const response = await fetch(
          "https://map.rmz.one/api/list-regions-with-societies"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSocietiesListSocieties(data.data.data); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch AllSocietiesList:", error);
      }
    };

    fetchAllSocietiesListSocieties();
  }, []);
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
          <FrameComponent5 slides={SLIDES} options={OPTIONS} />
          <Newsbar />
        </section>
        <FrameComponent3 societiesListSocieties={societiesListSocieties} />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <Fotter logo1="/logo-1-2@2x.png" />
    </div>
  );
};

export default HomePage;
