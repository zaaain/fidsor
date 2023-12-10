import React, {useState, useEffect} from "react";
import TaskCard from "./TaskCard";
import { Button, Grid } from "@mui/material";
import TaskFilter from "./TaskFilter";
import { addData, getAllData , deleteData, updateData} from '../../IndexedDB';
import Modal from "../../components/common/Modal"
import Form from "./TaskForm"

const TaskBoard = () => {

  const [data,setData] = useState([])
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null)
  const [updateDataInfo, setUpdateDataInfo] = useState({})
  const [filterFlag,setFilterFlag] = useState(false)

  console.log("Data", data)

  const addUpdateOpen = (type, data) => {
    if(type === "edit"){
      setUpdateDataInfo(data)
    }
    setType(type)
    setOpen(true)
  }

  const handleToggle = () => {
    setOpen(false)
    setType(null)
    setUpdateDataInfo({})
  }

  const fetchData = async () => {
    const result = await getAllData();
    setFilterFlag(false)
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (val) => {
    await addData(val);
    fetchData();
    handleToggle()
  };

  const handleDelete = async (id) => {
    await deleteData(id);
    fetchData();
  };

  const handleUpdate = async (updateVal) => {
   const updateId = updateDataInfo.id ? updateDataInfo.id : null
    if (updateId !== null) {
      await updateData(updateId, updateVal);
      fetchData();
      setOpen(false);
      setUpdateDataInfo({});
    }
  };

  const handleFilter = (val) => {
    if(!val) return
    setFilterFlag(true)
    let filterData = data && data.length > 0 ? data.filter((item)=> item.taskPriority === val.taskPriority) : []
    setData(filterData)
  }

  return (
    <>
    <div style={{ width:"95%", margin:"70px auto"}}>
      <TaskFilter onAdd={()=>addUpdateOpen("new",{})} onFilter={handleFilter}/>
    <div>
      {filterFlag && (
        <div style={{display:"flex", justifyContent:"center"}}>
          <Button variant="contained" color="secondary" size="small" onClick={()=>fetchData()}>Get All Task</Button>
        </div>
      )}
      {data && data.length <= 0 && ( 
        <h3>{filterFlag ? "No task according your filter": "You have no task"}</h3>
      )}
      <Grid container spacing={3}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <Grid item md={4} sm={6} xs={12} key={index}>
              <TaskCard data={item} onUpdate={addUpdateOpen} onDelete={handleDelete}/>
            </Grid>
          ))}
      </Grid>
    </div>
    </div>
       <Modal open={open} toggle={handleToggle} title={type === "new" ? "Add New Task" : "Update Task"} type={type}>
        <Form handleTask={type === "new" ? handleAdd : handleUpdate} defaultValues={type === "edit" ? updateDataInfo :{}}/>
      </Modal>
    </>
  );
};

export default TaskBoard;
