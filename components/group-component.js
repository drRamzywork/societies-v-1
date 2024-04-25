import { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./group-component.module.css";

const GroupComponent = ({
  rectangle35,
  propBackgroundImage,
  propPadding,
  propPadding1,
}) => {
  const maskGroupStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const collisionControllerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonsButton3Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.maskGroupParent}>
      <div className={styles.maskGroup} style={maskGroupStyle}>
        <img className={styles.maskGroupChild} alt="" src={rectangle35} />
        <Button
          className={styles.transitionTransmuter}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background:
              "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
            borderRadius: "0px 0px 20px 20px",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
            },
            height: 49,
          }}
        >
          جمعية السعودية العامة
        </Button>
      </div>
      <div
        className={styles.collisionController}
        style={collisionControllerStyle}
      >
        <div className={styles.buttonsbutton7}>
          <div className={styles.buttonsbutton3} style={buttonsButton3Style}>
            <div className={styles.text}>
              <div className={styles.go}>عرض المزيد</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
