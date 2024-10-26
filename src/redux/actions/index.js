import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constans";
import axios from "axios";




export const getFlights = createAsyncThunk("flights/getFlight",
  async  () => {
        // 1- api isteği at
      const res = await  axios.request(options)
    
    //apiden gelen dizileri formatla .Aircraft dizisi içerisindeki her bir uçuş verisi dizi olarak gelöişti projede
  //kullanımı kolaylaştırmak için bu dizileri nesneye çevirdik
      const formatted = res.data.aircraft.map ((item) => ({
        id: item[0],
        code: item[1],
        lat:item[2],
        lng: item[3],
        }));
        //2- aksiyonun payload ını  return et
        return formatted
    });