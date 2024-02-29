import React, { useState, useEffect } from "react";
import { Avatar, Box,TextField, Button, Card, Grid, Tab, Tabs, useTheme } from "@mui/material";
import { useGetDonorsQuery, useDeleteDonorMutation } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { DataGrid } from "@mui/x-data-grid";
import Buttons from "components/Buttons";




const SipsalPubuduwa = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
   };
  
   const handleClick = () => {
    console.log("Button clicked!");
  };
  
   const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const labelStyle = {
      fontWeight: " bold",
      color: "black", 
      fontSize: "16px",
      margintop: "80px"
      
    }

  
 
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Sipsal Pubuduwa"
        subtitle="Manage School donation Programs"
      />
      <Tabs
        value={activeTab}
        onChange={handleTabChange}   
        variant="standard"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="Sipsal Pubuduwa tabs"
      >
        <Tab label="School Registration" />
        <Tab label="View School Details" />
        <Tab label="Next School PRedictor" />
        

      </Tabs>
      {activeTab === 0 && (
        <Box>
          <h1>School Registration</h1>
          <form onSubmit={handleSubmit}>
          <Box sx={{mt:6}}>
          <label 
          style={labelStyle}
          htmlFor="School ID">School ID</label>
            <TextField 
  
              variant="outlined"
              name="SchoolID"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>

            <Box sx={{mt:6}}>
          <label 
          style={labelStyle}
          htmlFor="School Name">School Name</label>
            <TextField 
  
              variant="outlined"
              name="SchoolName"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>

            <Box sx={{mt:6}}>
          <label 
          style={labelStyle}
          htmlFor="School Adress">School Address</label>
            <TextField 
  
              variant="outlined"
              name="SchoolAddress"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>

          <Box sx={{mt:2}}>
          <label 
          style={labelStyle}
          htmlFor="Location">Location</label>
          <Grid container spacing={2} sx={{mt:0}}> 
              <Grid item xs={4}> 
                <TextField
                  select
                  variant="outlined"
                  fullWidth
                  label="Province"
                  sx={{ 
            
                    '& fieldset': {
                      borderWidth: '3px',
                    },
                  }}
                 
                >
                  
                </TextField>
              </Grid>
              <Grid item xs={4}> 
                <TextField
                  select
                  variant="outlined"
                  fullWidth
                  label="District"
                  sx={{ 
            
                    '& fieldset': {
                      borderWidth: '3px',
                    },
                  }}
                 
                
                >
            
                </TextField>
              </Grid>
              <Grid item xs={4}> 
                <TextField
                  select
                  variant="outlined"
                  fullWidth
                  label="Town"
                  sx={{ 
            
                    '& fieldset': {
                      borderWidth: '3px',
                    },
                  }}
                 
                >
                </TextField>
              </Grid>
            </Grid>
            </Box> 
            
            <Box sx={{mt:6}}>
          <label 
          style={labelStyle}
          htmlFor="School MN">School Mobile Number</label>
            <TextField 
  
              variant="outlined"
              name="SchoolMN"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>

            <Box sx={{mt:10}}>
              <label
              style={labelStyle}
               htmlFor="Area Officer Details">Principle's Contact Information</label>
            </Box>

            <Box sx={{mt:5}}>
          <label 
          style={labelStyle}
          htmlFor="Name">Name</label>
            <TextField 
  
              variant="outlined"
              name="Name"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>

          

            <Box sx={{mt:2}}>
          <label 
          style={labelStyle}
          htmlFor="MObile Number">Mobile Number</label>
            <TextField 
  
              variant="outlined"
              name="PMobileNumber"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>
            <Box sx={{mt:3}}>
              <Buttons onClick={handleClick} label="Register" />
            </Box>
         </form>
        </Box>
      )}
      {activeTab === 1 && (
        <Box>
          <h1>View School Details</h1>
          <form onSubmit={handleSubmit}>

          <Box sx={{mt:6}}>
          <label 
          style={labelStyle}
          htmlFor="School ID">School ID</label>
            <TextField 
  
              variant="outlined"
              name="SchoolID"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>

            <Box sx={{mt:6}}>
          <label 
          style={labelStyle}
          htmlFor="School Name">School Name</label>
            <TextField 
  
              variant="outlined"
              name="SchoolName"
              fullWidth
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  '& fieldset': {
                    borderWidth: '3px',
                  },
                },
              }}
            />
            </Box>



          <Box sx={{mt:3}}>
              <Buttons onClick={handleClick} label="Search" />
            </Box>
          </form>
        </Box>
      )}
      {activeTab === 2 && (
        <Box>

          
          
        </Box>
      )}
    </Box>
  );
};

export default SipsalPubuduwa;
