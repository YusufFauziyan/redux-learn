import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak, updateKontak } from "../../actions/kontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("")

  const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.kontakReducer)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(id) {
      // update kontak
      dispatch(updateKontak({id:id, nama: nama, nohp: nohp}))
    } else {
      // add kontak
      dispatch(addKontak({nama: nama, nohp: nohp}))
    }

    setNama('')
    setNohp('')
    setId("")
  }

  useEffect(() => {
    if(addKontakResult) {
      dispatch(getListKontak())
    }
  }, [addKontakResult, dispatch])

  useEffect(() => {
    if(detailKontakResult) {
      setNama(detailKontakResult.nama)
      setNohp(detailKontakResult.nohp)
      setId(detailKontakResult.id)
    }
  }, [detailKontakResult, dispatch])

  useEffect(() => {
    if(updateKontakResult) {
      dispatch(getListKontak())
    }
  }, [updateKontakResult, dispatch])


  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
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
