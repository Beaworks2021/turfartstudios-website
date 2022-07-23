import React from "react";
import Menu from "./components/menu/Menu";
import { useState, useEffect } from "react";
import "./MainView.css";
import { illus, twoD, sto, abt } from "./data.jsx";
import { BsInstagram, BsBehance } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

const MainView = () => {
  const [selected, setSelected] = useState("1");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "1",
      title: "Illustrations",
    },
    {
      id: "2",
      title: "2D Animations",
    },
    {
      id: "3",
      title: "Store",
    },
    {
      id: "4",
      title: "About",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "1":
        setData(illus);
        break;
      case "2":
        setData(twoD);
        break;
      case "3":
        setData(sto);
        break;
      case "4":
        setData(abt);
        break;
      default:
        setData(illus);
    }
  }, [selected]);

  return (
    <div className="container vh-100 mainV">
      <div className="row">
        <div className="col-md-2 leftside">
          <div className="row  bb1">
            <div className="col-md 12 itemscont">
              <div className="row">
                <div className="col-md-12">
                  <img className="logoimg" src="Assets/Turf-logo.png" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="menucontainer">
                    {list.map((item) => (
                      <Menu
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        key={item.id}
                      />
                    ))}
                  </ul>

                  <div className="abticons1">
                    <a
                      className="abticon"
                      href="https://www.facebook.com/Turf-101277068653192"
                    >
                      <GrFacebookOption className="abticon" />
                    </a>
                    <a
                      className="abticon"
                      href="https://www.instagram.com/turf_gh/"
                    >
                      <BsInstagram className="abticon" />
                    </a>
                    <a
                      className="abticon"
                      href="https://www.behance.net/kingturf"
                    >
                      <BsBehance className="abticon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bb2">
            <div className="col-md 12"></div>
          </div>
        </div>
        <div className="col-md-10 vh-100 rightside">
          {data.map((d) => (
            <div key={d.id} id={d.id}>
              {d.compo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainView;
