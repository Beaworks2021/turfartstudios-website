import React from "react";
import "./Illustation.css";

const Illustration = () => {
  const data = [
    {
      images: "Assets/Autumn-BloomII.jpg",
      img: "Assets/Hold-On.jpg",
    },

    {
      images: "Assets/Kaleidescope Dreams 1.1.jpg",
      img: "Assets/Lant.jpg",
    },
    {
      images: "Assets/New-Turf-DP-Across.jpg",
      img: "Assets/Nii-Emp-II.jpg",
    },
    {
      imgages: "Assets/NKus.jpg",
      img: "Assets/Nubian.jpg",
    },
    {
      images: "Assets/Odo-Nnyew-Fie-Kwan-.jpg",
      img: "Assets/Sede.jpg",
    },
    {
      images: "Assets/Yeing-2.jpg",
      //   img: "Assets/Sede.jpg",
    },
  ];

  return (
    <div className="container illus">
      <div className="row imgcontainer">
        <div className="col-md-6 left mb-4 mb-lg-0">
          {data.map((d) => (
            <div>
              <img
                className="imgsize w-100 shadow-1-strong rounded mb-4"
                src={d.images}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="col-md-6 right mb-4 mb-lg-0">
          {data.map((d) => (
            <div>
              <img
                className="imgsize w-100 shadow-1-strong rounded mb-4"
                src={d.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Illustration;
