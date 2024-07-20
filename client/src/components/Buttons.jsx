import React from 'react'
import { useTheme } from "@mui/material/styles";

const Buttons = ({ onClick, label, variant, color, disabled }) => {
  const theme = useTheme();

  return (
    <button
      onClick={onClick}
      style={{ 
        padding: '10px 20px', 
        borderRadius: '5px', 
        backgroundColor: theme.palette.secondary.main, 
        color: 'white', 
        border: 'none', 
        cursor: 'pointer', 
        fontWeight: 'bold', 
        // fontSize: '16px', 
      }}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Buttons
