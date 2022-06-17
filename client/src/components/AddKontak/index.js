import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  const { addKontakResult } = useSelector((state) => state.kontakReducer)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("1. masuk handle sumbit");
    dispatch(addKontak({nama: nama, nohp: nohp}))
    setNama('')
    setNohp('')
  }

  useEffect(() => {
    if(addKontakResult) {
      dispatch(getListKontak())
    }
  }, [addKontakResult, dispatch])


  return (
    <div>
      <h4>Add Kontak</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="nama" placeholder="Ketik nama" 
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        />
        <input type="number" name="nohp" placeholder="Nomor" 
        value={nohp}
        onChange={(e) => setNohp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
