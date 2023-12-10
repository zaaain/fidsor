import React,{useState} from "react";
import {
  Card,
  Typography,
  Button,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import Modal from "../../components/common/Modal";

const TaskCard = ({ data, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        {" "}
        <div style={{ padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button color="primary" variant="contained" size="small" onClick={()=>setOpen(true)}>
              Detail
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Chip
                label={data.taskPriority && data.taskPriority}
                variant="contained"
                size="small"
                color="secondary"
              />
            </div>
            <Typography
              style={{ display: "flex", textAlign: "center", margin: "auto" }}
            >
              {data.taskTitle && data.taskTitle}
            </Typography>
          </div>
        </div>
        <div
          style={{
            background: "#9c27b0",
            padding: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Tooltip title="Delete" arrow placement="top">
            <IconButton onClick={()=>onDelete(data.id && data.id)}>
              <DeleteIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Update" arrow placement="top">
            <IconButton onClick={() => onUpdate("edit", data)}>
              <UpdateIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </Tooltip>
        </div>
      </Card>
      <Modal open={open} toggle={() => setOpen(false)} title="Task Details">
        <Typography>{data.taskDetails && data.taskDetails}</Typography>
      </Modal>
    </>
  );
};

export default TaskCard;
