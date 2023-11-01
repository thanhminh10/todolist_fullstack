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
import { REMOVETodoList_byID } from '../redux/asyncAction/todoREMOVE_AsyncActions';
import { Toggle_byID } from '../redux/asyncAction/Toggle_AsyncActions';
import { Update_byID } from '../redux/asyncAction/Update_AsyncActions';
import { Input } from "@material-tailwind/react";


  export default function Todo(item) { 
    // State 
    var todoitem_default =  {
        id:0,
        name:'',
        deadline:'',
        completed:false,
        currentDay:''
    }

    
    const [open, setOpen] = React.useState(false);
    const [openupdate, setOpenupdate] = React.useState(false);
    const [updateDay, setUpdateDay] = React.useState(dayjs(''));
    const [updatename, setUpdateName] = React.useState('');

    const [name, setName] = React.useState(todoitem_default.name);

    const [id, setId] = React.useState(todoitem_default.id);
    const [completed, setCompleted] = React.useState(todoitem_default.completed);


    const [deadline, setDeadline] = React.useState(todoitem_default.deadline);
    const [currentday, setCurrentday] = React.useState(todoitem_default.currentDay);


    const [changeupdate, setChangeupdate] = React.useState(false);


 
 

   

    React.useEffect(()=>{
        const { id,name,completed,deadline,currentDay } =  item.item;
        setName(name);
        setId(id);
        setCompleted(completed);
        setDeadline(deadline);
        setCurrentday(currentDay)
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
      
        dispatch(REMOVETodoList_byID(id))
        handleClose();
    };
    
    const handleCheck = (id,state) => {
        const data =  {
            id:id,
            completed:state,
            deadline: '',
            name:name,  
            currentday:currentday
        }
        dispatch(Toggle_byID({todo_id:id,data:data}));
    };
  
    const handleUpdate = (id) => {
            if(updateDay.$y && updateDay.$M && updateDay.$D )
            {

                const data =  {
                id:id,
                completed:changeupdate,
                deadline: `${updateDay.$D}/${updateDay.$M}/${updateDay.$y}`,
                name:updatename,  
                currentday:currentday
                }
                dispatch(Update_byID({updateid:id,data:data})); 
                handleClose_UpdateDialog();    
            }
            else {
                const data =  {
                    id:id,
                    completed:changeupdate,
                    deadline: '',
                    name:updatename,  
                    currentday:currentday
                    }
                    dispatch(Update_byID({updateid:id,data:data})); 
                    handleClose_UpdateDialog();  
            }
    };

    const handleChange = (a) => {
        setChangeupdate(a);
    };

    const handleChangeName = (nameupdate) => {
    
        setUpdateName(nameupdate);
      
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
                    <Button variant="text" className='text-orange-500 flex items-center justify-center'><FontAwesomeIcon icon={faClock} className='m-1'/>{deadline}</Button>
                </div>
                <div className='todo-detail flex flex-col justify-end'>
                    <ListItemIcon className='group_action flex flex-row justify-end'>
                        <FontAwesomeIcon icon={faPen}  className='group_action__item blue cursor-pointer' onClick={handleClickOpen_UpdateDialog}/>
                        <FontAwesomeIcon icon={faTrash} className='group_action__item red cursor-pointer' onClick={handleClickOpen_DeleteDialog}/>
                    </ListItemIcon>
                    <ListItemText primary={currentday} className='text-gray-500' />
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
                                <Input
                                placeholder="Name"
                                className="pr-20 w-full h-full border-neutral-600  outline-none  shadow-none  text-x"
                                containerProps={{
                                className: "min-w-0 h-full bg-none outline-none border-none shadow-none",
                                }}
                                autoFocus={true}
                                value={updatename}
                                onChange={(e) => handleChangeName(e.target.value)}
                                />
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