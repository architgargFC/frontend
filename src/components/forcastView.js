import React, { useEffect, useState } from "react";
import style from "./chargeBack.module.css";
import PreLoader1 from "./loader";
import forcastData from "./forcast";
import { Chartss } from "./chart";
import axios from "./axios";
import { ChartF } from "./chartF";

function ForcastView() {
  const [filter, setFiter] = useState("1");
  const [fData, setFData] = useState({});
  const [t, st] = useState({});
  const [pt, spt] = useState({});
  const [label, setLabel] = useState([]);
  const [fil, setFil] = useState("")
  const [load, setLoad] = useState(false);
  const getData = async () => {
    setLoad(true)
    let link =
      filter == "1"
        ? "/predict/txn"
        : filter == "2"
        ? "/predict/pg"
        : "/predict/merch";
    console.log(filter);
    let d = await axios.get(link);
    let a = JSON.parse(d.data).Total_Transactions;
    let b = JSON.parse(d.data).Total_Transactions_original;
    // console.log(a);
    // console.log(b)
    let k1 = Object.keys(a);
    let obj = {};
    k1.map((d) => {
      let y = d.split("'");
      if (!obj[y[1]]) {
        let k = y[3];
        let o = {};
        o[k] = a[d];
        obj[y[1]] = o;
        // console.log(obj)
      } else {
        let k = y[3];
        let o = obj[y[1]];
        o[k] = a[d];
        obj[y[1]] = o;
      }

      //   console.log(y[1])
      //   console.log(y[3]);
    });

    let k2 = Object.keys(b);
    let obj1 = {};
    k2.map((d) => {
      let y = d.split("'");
      if (!obj1[y[1]]) {
        let k = y[3];
        let o = {};
        o[k] = b[d];
        obj1[y[1]] = o;
        // console.log(obj)
      } else {
        let k = y[3];
        let o = obj1[y[1]];
        o[k] = b[d];
        obj1[y[1]] = o;
      }
      //   console.log(y[1])
      //   console.log(y[3]);
    });
    // console.log(obj1);
    // console.log(obj);
    spt(obj);
    st(obj1);
    setLabel(Object.keys(obj));
    console.log(Object.keys(obj));
    setFil(Object.keys(obj)[0]);
    setLoad(false)
  };
  useEffect(() => {
    getData();
  }, [filter]);
console.log(fil)
  return (
    <div className={style.wrapper}>
      <div className={style.input}>
        Select Filter:
        <select onChange={(e) => setFiter(e.target.value)}>
          <option value="1">Txn Mode</option>
          <option value="2">PG Used</option>
          <option value="3">Merchant Name</option>
        </select>
        <select onChange={(e) => setFil(e.target.value)}>
          {label.map((t) => {
            return <option value={t}>{t}</option>;
          })}
        </select>
      </div>
      <div style={{display:"flex"}}>
        {fil ? <Chartss t={t[fil]} pt={pt[fil]} /> : null}
        {/* {fil ? <ChartF t={t[fil]} pt={pt[fil]} /> : null} */}
      </div>
      {load ? <PreLoader1 /> : null}
    </div>
  );
}

export default ForcastView;
