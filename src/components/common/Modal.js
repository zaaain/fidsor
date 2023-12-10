import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useWindowSize} from 'react-use';

const CustomModal = (props) => {
  const { open, toggle, children, title } = props;
  const {width} = useWindowSize()
  return (
    <Modal open={open}>
      <>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: width > 1000 ?"50%" : "90%",
            maxWidth:"90%",
            maxHeight:"90%",
            overflow:"auto",
            bgcolor: "background.paper",
            boxShadow: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              minWidth: "100%",
              background: "#1976d2",
            }}
          >
            <h3 style={{color:"#ffffff", padding:"10px"}}>{title && title}</h3>
            <IconButton onClick={toggle} style={{padding:"10px"}}>
              <CloseIcon style={{color:"#ffffff"}}/>
            </IconButton>
          </div>
          <div style={{padding:"10px" }}>
          {children} 
          </div>
        </Box>
      </>
    </Modal>
  );
};

export default CustomModal;
