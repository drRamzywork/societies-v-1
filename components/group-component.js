// import { useEffect, useMemo, useRef } from "react";
// import { Button } from "@mui/material";
// import styles from "./group-component.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import {
//   Pagination,
//   Navigation,
//   EffectCoverflow,
//   Autoplay,
// } from "swiper/modules";

// const GroupComponent = ({
//   rectangle35,
//   propBackgroundImage,
//   propPadding,
//   propPadding1,
//   societiesData,
// }) => {
//   const maskGroupStyle = useMemo(() => {
//     return {
//       backgroundImage: propBackgroundImage,
//     };
//   }, [propBackgroundImage]);

//   const collisionControllerStyle = useMemo(() => {
//     return {
//       padding: propPadding,
//     };
//   }, [propPadding]);

//   const buttonsButton3Style = useMemo(() => {
//     return {
//       padding: propPadding1,
//     };
//   }, [propPadding1]);

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   console.log(societiesData);

//   return (
//     <>
//       <Swiper loop={false} className={styles.societiesSwiper} slidesPerView={4}>
//         {societiesData.map((society, index) => (
//           <SwiperSlide key={index}>
//             <div className={styles.maskGroupParent}>
//               <div className={styles.maskGroup} style={maskGroupStyle}>
//                 <img
//                   className={styles.maskGroupChild}
//                   alt=""
//                   src={rectangle35}
//                 />
//                 <Button
//                   className={styles.transitionTransmuter}
//                   variant="contained"
//                   sx={{
//                     textTransform: "none",
//                     color: "#fff",
//                     fontSize: "20",
//                     background:
//                       "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
//                     borderRadius: "0px 0px 20px 20px",
//                     "&:hover": {
//                       background:
//                         "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
//                     },
//                     height: 49,
//                   }}
//                 >
//                   {society.name}
//                 </Button>
//               </div>
//               <div
//                 className={styles.collisionController}
//                 style={collisionControllerStyle}
//               >
//                 <div className={styles.buttonsbutton7}>
//                   <div
//                     className={styles.buttonsbutton3}
//                     style={buttonsButton3Style}
//                   >
//                     <div className={styles.text}>
//                       <div className={styles.go}>عرض المزيد</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* Custom Navigation */}
//       <div ref={prevRef} className="swiper-button-prev-custom">
//         Prev
//       </div>
//       <div ref={nextRef} className="swiper-button-next-custom">
//         Next
//       </div>

//       <div className={styles.maskGroupParent}>
//         <div className={styles.maskGroup} style={maskGroupStyle}>
//           <img className={styles.maskGroupChild} alt="" src={rectangle35} />
//           <Button
//             className={styles.transitionTransmuter}
//             variant="contained"
//             sx={{
//               textTransform: "none",
//               color: "#fff",
//               fontSize: "20",
//               background:
//                 "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
//               borderRadius: "0px 0px 20px 20px",
//               "&:hover": {
//                 background:
//                   "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
//               },
//               height: 49,
//             }}
//           >
//             جمعية السعودية العامة
//           </Button>
//         </div>
//         <div
//           className={styles.collisionController}
//           style={collisionControllerStyle}
//         >
//           <div className={styles.buttonsbutton7}>
//             <div className={styles.buttonsbutton3} style={buttonsButton3Style}>
//               <div className={styles.text}>
//                 <div className={styles.go}>عرض المزيد</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GroupComponent;

import { useEffect, useMemo, useRef } from "react";
import { Button } from "@mui/material";
import styles from "./group-component.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";

const GroupComponent = ({
  rectangle35,
  propBackgroundImage,
  propPadding,
  propPadding1,
  societiesData,
}) => {
  const maskGroupStyle = useMemo(
    () => ({
      backgroundImage: `url(${propBackgroundImage})`,
    }),
    [propBackgroundImage]
  );

  const collisionControllerStyle = useMemo(
    () => ({
      padding: propPadding,
    }),
    [propPadding]
  );

  const buttonsButton3Style = useMemo(
    () => ({
      padding: propPadding1,
    }),
    [propPadding1]
  );

  return (
    <>
      {societiesData.map((area, index) => (
        <>
          <h2 className={styles.h2}>{area.name}</h2>
          <Swiper
            dir="rtl"
            loop={false}
            className={styles.societiesSwiper}
            slidesPerView={4.5}
          >
            {area.societies.map((society, sIndex) => (
              <SwiperSlide key={sIndex}>
                <Link
                  href={`/society/${society.id}`}
                  className={styles.maskGroupParent}
                >
                  <div className={styles.maskGroup} style={maskGroupStyle}>
                    <img
                      className={styles.maskGroupChild}
                      alt=""
                      src={rectangle35 || "path/to/default/image"} // Provide a default image path
                    />
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
                      {society.name}
                    </Button>
                  </div>
                  <div
                    className={styles.collisionController}
                    style={collisionControllerStyle}
                  >
                    <div className={styles.buttonsbutton7}>
                      <div
                        className={styles.buttonsbutton3}
                        style={buttonsButton3Style}
                      >
                        <div className={styles.text}>
                          <div className={styles.go}>عرض المزيد</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ))}
    </>
  );
};

export default GroupComponent;
