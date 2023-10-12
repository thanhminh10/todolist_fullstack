import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen ,faClock, faTrash} from '@fortawesome/free-solid-svg-icons'
import { UpdateData, DraggableDialog} from './dialog';
import { remove_by_ID , toggle_check_by_ID , update_by_ID } from '../redux/action/todoaction';
import { useDispatch,useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { getMonthName } from './func';
import {
    Button,
  } from "@material-tailwind/react";
import { sortbyAdded, todoListSelector } from '../redux/selector';
import { getProduct } from '../api/services/todo';


  export default function Todo(item) { 
    // State 
    var todoitem_default =  {
        id:0,
        name:'',
        deadline:{},
        completed:false,
        currentday:{}
    }

    
    const [open, setOpen] = React.useState(false);
    const [openupdate, setOpenupdate] = React.useState(false);
    const [updateDay, setUpdateDay] = React.useState(dayjs('2023-06-08'));
    const [name, setName] = React.useState(todoitem_default.name);

    const [id, setId] = React.useState(todoitem_default.id);
    const [completed, setCompleted] = React.useState(todoitem_default.completed);


    const [deadline, setDeadline] = React.useState(todoitem_default.deadline);
    const [currentday, setCurrentday] = React.useState(todoitem_default.currentday);


    const [changeupdate, setChangeupdate] = React.useState(false);


    const [getData, setData] =  React.useState([]);
    // Get call from axios
    React.useEffect(() => {
      getProduct().then(function (response) {
        
        setData(response.data);
      });
    }, []);


    console.log(getData);

    React.useEffect(()=>{
        const { id,name,completed,deadline,currentday } =  item.item;
        setName(name);
        setId(id);
        setCompleted(completed);
        setDeadline(deadline);
        setCurrentday(currentday)
    })


    // useDispatch 
    const dispatch =  useDispatch();

    //Open DeleteDialog Start
    const handleClickOpen_DeleteDialog = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //Open DeleteDialog End


    //Open DeleteDialog UpdateDialog
    const handleClickOpen_UpdateDialog = () => {
        setOpenupdate(true);
    };

    const handleClose_UpdateDialog = () => {
        setOpenupdate(false);
    };
    //Open UpdateDialog End

    const handleSubscribe = (id) => {
        // Dispatch your action here
        // For example, dispatch(subscribeAction());
        dispatch(remove_by_ID(id))
        handleClose();
    };
    
    const handleCheck = (id,state) => {
        const tmp  = state;
        
    
        dispatch(toggle_check_by_ID({todo_id:id,completed:tmp}));
    };
  
    const handleUpdate = (id) => {
            const data =  {
            id:id,
            completed:changeupdate,
            deadline: {
                string:`${updateDay.$y}-${updateDay.$M+1}-${updateDay.$D}`,
                day:updateDay.$D,
                month:updateDay.$M+1,
                year:updateDay.$y,
            },  
            name:name,  
            currentday:currentday
            }
            dispatch(update_by_ID({updateid:id,data:data})); 
            handleClose_UpdateDialog();    
    };

    const handleChange = (a) => {
        setChangeupdate(a);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    


    return ( 
            <ListItem >
                <ListItemButton>
                <div className="checkbox-wrapper w-full h-full flex items-center">
                    <input
                        className='w-5 h-5'
                        id={id}
                        type="checkbox"
                        checked={completed}
                        onChange={() => handleCheck(id,!completed)}
                    />
                    <label htmlFor={id} className=' w-full h-full text-xl mx-5 '>{name}</label>
                 </div>
                </ListItemButton>
                <div className='p-2 flex items-center justify-center mr-5'>
                    <Button variant="text" className='text-orange-500 flex items-center justify-center'><FontAwesomeIcon icon={faClock} className='m-1'/>{deadline.string}</Button>
                </div>
                <div className='todo-detail flex flex-col justify-end'>
                    <ListItemIcon className='group_action flex flex-row justify-end'>
                        <FontAwesomeIcon icon={faPen}  className='group_action__item blue cursor-pointer' onClick={handleClickOpen_UpdateDialog}/>
                        <FontAwesomeIcon icon={faTrash} className='group_action__item red cursor-pointer' onClick={handleClickOpen_DeleteDialog}/>
                    </ListItemIcon>
                    <ListItemText primary={currentday.string} className='text-gray-500' />
                </div>
                <DraggableDialog open={open}
                    handleClose={handleClose}
                    title="Remove ?"
                    handleSubscribe={()=>handleSubscribe(id)}>
                    <p>You want to delete {name} with id  {id}</p>
                </DraggableDialog>


                <UpdateData
                    open={openupdate}
                    handleClose={handleClose_UpdateDialog}
                    title="Update Data"
                    handleSubscribe={()=>handleUpdate(id)}
                >
                
                    <form className="p-10">
                        <div className="w-full">
                          <div className='grid grid-row'>
                          <div class="block mb-5">
                            <label class="">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Todo
                                </span>
                                <input onChange={(e)=>handleChangeName(e)}  type="text" name="Todo" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={name} />
                            </label>
                          </div>
                          <div class="block mb-5">
                            <LocalizationProvider dateAdapter={AdapterDayjs} className="mb-5">
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Basic date picker" onChange={(day) => setUpdateDay(day)} />
                                </DemoContainer>
                            </LocalizationProvider>
                          </div>
                          <div class="block mb-5">

                          </div>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                State
                                </InputLabel>
                                <NativeSelect
                                defaultValue={changeupdate}
                                onChange={(e)=>handleChange(!changeupdate)}
                                inputProps={{
                                    name: 'State',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                    <option value={false}>Not completed</option>
                                    <option value={true}>Completed</option>
                            
                                </NativeSelect>
                            </FormControl>
                          </div>

                        </div>
                    </form>
                </UpdateData>
            </ListItem>
    )
}