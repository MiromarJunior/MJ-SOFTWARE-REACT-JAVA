import axios from "axios";
import { mostrarAlerta } from "../../services/utilServices";



const baseURL = import.meta.env.VITE_APP_API_URL;

export const postApiBackLogin =  async(data:object,uri:string) =>{
    return await axios.post(`${baseURL}${uri}`, data).then((res)=>{
        console.log(res.data);      
       // mostrarAlerta("Login Efetuado com Sucesso !",false).catch((error) => console.error(error));

       return true;    
    }).catch((error)=>{
        console.log(error);
        if(error.response.status === 400){
            return mostrarAlerta(
                error.response.data.errors[0].field +"\n"+
                error.response.data.errors[0].defaultMessage
                ,true);
        }
        mostrarAlerta(error.response.data.message,true).catch((error) => console.error(error));
    })
}