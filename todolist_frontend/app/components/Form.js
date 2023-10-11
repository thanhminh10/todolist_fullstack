"use client"
import React from "react";
import { Input,Button ,IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch} from "react-redux";
import { addTodo } from "../redux/action/todoaction";
import uuid from 'react-uuid'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Popover from '@mui/material/Popover';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { getMonthName } from './func';

export default function Form() {
    const dispatch =  useDispatch();

    const [todoValue, setTodoValue]=React.useState('');

    const [dayvalue, setDayvalue]=React.useState({});

    const current = new Date();
    const datestring = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    

    // Dispatch  Add Todo
    const handleSubmit=(e)=>{
      if(dayvalue.$D && dayvalue.$M && dayvalue.$y)
        dispatch(addTodo({
          name:todoValue,
          completed:false,
          id:uuid(),
          deadline: 
          {
            string :`${dayvalue.$y}-${dayvalue.$M+1}-${dayvalue.$D}`,
            day:dayvalue.$D ,
            month:dayvalue.$M+1 , 
            year: dayvalue.$y,
          },
          currentday:{
            string:datestring,
            day: current.getDate(),
            month: current.getMonth()+1,
            year: current.getFullYear(),
          },
        }
        ))
        else {
          dispatch(addTodo({
            name:todoValue,
            completed:false,
            id:uuid(),
            deadline:  {
              string :``,
              day:0,
              month:0, 
              year: 0,
            },
            currentday:{
              string:datestring,
              day: current.getDate(),
              month: current.getMonth()+1,
              year: current.getFullYear(),
            },
          }
          ))
        }
        e.preventDefault();
        setTodoValue('')
      
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <form className='form-group custom-form' onSubmit={handleSubmit}>
        <div className='input-wrapper flex items-center justify-center h-32 py-5 px-4  shadow bg-white rounded-lg  relative'> 
          <span className="absolute bottom-2 left-20">
         
            Deadline:{dayvalue.$D && dayvalue.$M && dayvalue.$y ? ` ${dayvalue.$D}th ${getMonthName(dayvalue.$M+1)}  ${dayvalue.$y}`:''}
          </span>
          
          <div className="input-box w-full  flex relative flex items-center justify-center h-12">
          <Input
            placeholder="Add Todo"
            className="pr-20 h-full bg-none outline-none border-none shadow-none  text-3xl"
            containerProps={{
              className: "min-w-0 h-full bg-none outline-none border-none shadow-none",
            }}
            autoFocus={true}
            value={todoValue}
            onChange={(e)=>setTodoValue(e.target.value)}
        
          />
        
          <Button
            size="sm"
            color={"blue-gray"}
            onClick={handleClick}
            className="h-full bg-none outline-none border-none shadow-none"
          >
            <FontAwesomeIcon icon={faCalendar} className="h-full text-blue-500" />
          </Button>
          <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={dayjs('2023-10-3')} onChange={(newValue) => setDayvalue(newValue)}/>
        </LocalizationProvider>
        </Popover>
          <Button
            size="sm"
            color={"blue-gray"}
            onClick={handleSubmit}
            className="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded text-lg"
          >
            Add
          </Button>
          </div>
      </div>
      </form>
    )
} 