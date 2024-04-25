import { Button } from "@mui/material";
import styles from "./frame-component8.module.css";

const FrameComponent8 = () => {
  return (
    <div className={styles.frameParent}>
      <Button
        className={styles.componentChild}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#265fa2",
          fontSize: "24",
          borderColor: "#265fa2",
          borderRadius: "8px",
          "&:hover": { borderColor: "#265fa2" },
          width: 165,
          height: 65,
        }}
      >
        بيانات خاصة
      </Button>
      <Button
        className={styles.componentItem}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#265fa2",
          fontSize: "24",
          borderColor: "#265fa2",
          borderRadius: "8px",
          "&:hover": { borderColor: "#265fa2" },
          width: 165,
          height: 65,
        }}
      >
        الاحصائيات
      </Button>
      <Button
        className={styles.componentInner}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#265fa2",
          fontSize: "24",
          borderColor: "#265fa2",
          borderRadius: "8px",
          "&:hover": { borderColor: "#265fa2" },
          width: 199,
          height: 65,
        }}
      >
        بيانات الموظفين
      </Button>
      <Button
        className={styles.groupButton}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "24",
          background: "#265fa2",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#265fa2" },
          width: 165,
          height: 65,
        }}
      >
        بيانات عامة
      </Button>
    </div>
  );
};

export default FrameComponent8;
