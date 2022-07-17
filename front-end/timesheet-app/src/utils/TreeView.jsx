 import { useState } from 'react';
import './TreeView.css';

 const TreeView = (props)=> {
  const [data,setData] = useState(props.list);

   const refreshData = ()=> { setData({...data});};
  return <div className='tree' >

    {tree(data,refreshData)}
  </div>
};

const tree = (data,refreshData)=> {
   
       
        return  <><i className={plusMinus(data)} onClick={(e)=> {   if(data.hasChildren ===2) {
          data.hasChildren =1;
        }else if(data.hasChildren === 1){
          data.hasChildren = 2;
        }
        refreshData();
      }}></i>{data.name}<ul className={ collapseClass(data)}>{data.items.map((i)=><li key={i.name}>{tree(i,refreshData)}</li>)}</ul></>
    

}

const collapseClass =(data)=>{

  let className ="collapse"
  switch(data.hasChildren){
    case 1:
      className = "collapse show";
      break;
    case 2:
      className ="collapse";
      break;
    default:
      className = "collapse";
      break;

  }
  return className;
}

const plusMinus =(data)=> {
 
  let className =""
  switch(data.hasChildren){
    case 1:
      className = "bi bi-dash-square iconpadding";
      break;
    case 2:
      className ="bi bi-plus-square iconpadding";
      break;
    default:
      className = "";
      break;

  }

  return className;
}



export default TreeView;