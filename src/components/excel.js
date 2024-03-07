import React, { useEffect, useState } from "react";
import style from "./chargeBack.module.css";
import PreLoader1 from "./loader";
import data from "./chargeBackData";
import BasicTable from "./Table";

function Excel() {
    const [txn, setTxn] = useState([])
    const [input, SetInput] = useState("")
    const onSubmitHandler = ()=>{
        if(input === ""){
            setTxn(data.slice(1, 6));
            return
        }
        let filterData = data.filter(x=>x["PG Id/RRN"] == input)
        setTxn(filterData)
    }

    useEffect(()=>{
        setTxn(data.slice(1,6));
    },[])
  return (
    <div className={style.wrapper}>
      <div className={style.input}>
        Search RRN:
        <input type="text" onInput={(e) => SetInput(e.target.value)} />
        <div className={style.submit} onClick={onSubmitHandler}>
          Submit
        </div>
        {/* <PreLoader1 /> */}
      </div>
        <BasicTable data={txn} />
    </div>
  );
}

export default Excel;
