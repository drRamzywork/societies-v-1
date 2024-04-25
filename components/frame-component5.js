import styles from "./frame-component5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        <img
          className={styles.slidesBoxIcon}
          loading="lazy"
          alt=""
          src="/slides-box@2x.png"
        />
        <div className={styles.slidesNavigation}>
          <div className={styles.clickArea}>
            <img
              className={styles.arrowLeftIcon}
              loading="lazy"
              alt=""
              src="/arrow-left.svg"
            />
          </div>
          <div className={styles.slideIndicator}>
            <img
              className={styles.dotIndictaor1}
              loading="lazy"
              alt=""
              src="/dot-indictaor--1.svg"
            />
            <img
              className={styles.dotIndictaor2}
              loading="lazy"
              alt=""
              src="/dot-indictaor--2.svg"
            />
            <img
              className={styles.dotIndictaor3}
              loading="lazy"
              alt=""
              src="/dot-indictaor--2.svg"
            />
            <img
              className={styles.dotIndictaor4}
              loading="lazy"
              alt=""
              src="/dot-indictaor--2.svg"
            />
            <img
              className={styles.dotIndictaor5}
              loading="lazy"
              alt=""
              src="/dot-indictaor--2.svg"
            />
          </div>
          <div className={styles.clickArea1}>
            <img
              className={styles.arrowRightIcon}
              loading="lazy"
              alt=""
              src="/arrow-right.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
