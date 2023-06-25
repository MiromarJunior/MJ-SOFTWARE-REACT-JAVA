import { IconButton } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';


interface ButtonDeleteProps{
    
    deleteFunction: (value: number) => void;
    deleteParam: number;

}
interface ButtonEditProps {
    updateFunction: (param:any) => void;
    updateParam: any;
  }

  interface ButtonAddProps {
    saveFunction: () => void;
   
  }

export const ButtonEdit =({ updateFunction, updateParam }:ButtonEditProps)=>{
    return(
        <IconButton title="Alterar Registro" 
        onClick={()=>updateFunction(updateParam)}
        style={{ marginLeft : "0.5rem",marginRight :"0.5rem",  color:"green"}}>
        <EditIcon/>
    </IconButton>
    )
}

export const ButtonDel =({deleteFunction, deleteParam}:ButtonDeleteProps)=>{
    return(
        <IconButton onClick={()=>deleteFunction(deleteParam)}
        title="Excluir Registro" style={{marginLeft : "0.5rem",marginRight :"0.5rem",  color:"red"}}>
        <DeleteForeverIcon/>
    </IconButton>
    )
}

export const ButtonAdd =({saveFunction}:ButtonAddProps)=>{
    return(
        <IconButton title="Novo Registro" 
        onClick={saveFunction}
        style={{  marginLeft : "0.5rem",marginRight :"0.5rem",  color:"blue", padding :0}}>
        <AddCircleIcon fontSize="large" />
    </IconButton>
    )
}

