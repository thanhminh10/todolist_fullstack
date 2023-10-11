/* eslint-disable react/jsx-key */
"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import {  todoListSelector ,remainingSeach} from '../redux/selector';
import Todo from './Todo';
import { sortbyAdded } from '../redux/selector';
export default function ListTodo() {
    
    const todo =  useSelector(remainingSeach);
    return (
        <div className="w-full p-1">
             <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

                <nav aria-label="secondary mailbox folders">
                    <List>
                        {todo && todo.length  ? todo.map((item,key) =>
                            <Todo key={key} item={item ? item:{}}/>
                        ):<h3 className='w-full text-center text-xl text-neutral-600 italic'>No to do</h3>}
                            
                    </List>
                </nav>
                </Box>
                
        </div>
    )
} 