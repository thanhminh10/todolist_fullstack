"use client"
import React from "react";
import { Input,Button ,IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar ,faFilter ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DraggableDialog from './dialog/delete';
import { remove_All } from "../redux/action/todoaction";
import { useDispatch,useSelector } from "react-redux";
import { searchfilter, statusfilter,sortfilter } from "../redux/action/filteraction";
import { filterSelector_status,sortSelector } from "../redux/selector";
import { REMOVETodoList_ALL } from "../redux/asyncAction/todoREMOVE_ALL_AsyncActions";
export default function Filter() {
    const status =useSelector(filterSelector_status);
    const sortby =useSelector(sortSelector);


    const [state, setState] = React.useState(status);
    const [open, setOpen] = React.useState(false);
    const [searchText,setSearchText] =  React.useState('');

    const [sort, setSort] = React.useState(sortby);


  



    const dispatch =  useDispatch();



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubscribe = () => {
        // Dispatch your action here
        // For example, dispatch(subscribeAction());
        dispatch(REMOVETodoList_ALL())
        handleClose();
    };


    const handleSeach = (text)=>{
      dispatch(searchfilter(text));
      setSearchText('');
    }

    
    const handleChange = (event) => {
      setState(event.target.value);
      dispatch(statusfilter(event.target.value))
    };

    const handleSort = (event) => {
      setSort(event.target.value);
      dispatch(sortfilter(event.target.value))
    };
    
    return (
        <div className='filter-box  flex items-center justify-end py-5 px-4 pt-0 max-h-40'> 
                  <div className="relative h-10 min-h-full flex justify-center items-center">
                    <Input
                    placeholder="Search"
                    className="pr-20 w-full h-full border-neutral-600  outline-none  shadow-none  text-x"
                    containerProps={{
                      className: "min-w-0 h-full bg-none outline-none border-none shadow-none",
                    }}
                    autoFocus={true}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                    <FontAwesomeIcon className="absolute right-0 p-3 cursor-pointer" icon={faMagnifyingGlass}  
                      onClick={()=>handleSeach(searchText)}
                    />
                  </div>
                  
            
                  <FormControl sx={{ m: 1, minWidth: 120 }}  size="small" className="bg-white">
                    <InputLabel id="demo-simple-select-helper-label">Filter</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={state}
                      label="State"
                      onChange={handleChange}
                      defaultValue={state}
                    >
                      <MenuItem value="All">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="No Completed">No Completed</MenuItem>
                    </Select>
                   
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}  size="small"  className="bg-white">
                    <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={sort}
                      label="Sort"
                      onChange={handleSort}
                    >
                      <MenuItem value="Added date">Added date</MenuItem>
                      <MenuItem value="Due date">Due date</MenuItem>
                    </Select>
                   
                  </FormControl>
                  <IconButton aria-label="delete" disabled color="primary" className="h-full w-10 flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon icon={faFilter} className="h-full w-5 text-blue-500" />
                  </IconButton>
                  <Button variant="outlined" className="h-full p-3" onClick={handleClickOpen}>Remove All</Button>
                  <DraggableDialog open={open}
                  handleClose={handleClose}
                  title="Remove ?"
                  handleSubscribe={()=>handleSubscribe()}>
                  <p>Do you wanna remove ALL</p>
                  </DraggableDialog>
        </div>
    )
} 