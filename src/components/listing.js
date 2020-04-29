import React from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'


const listing = (props) => {
  return (
    <Table>
    <TableHead>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make/Model</TableCell>
            <TableCell>MPG</TableCell>
            <TableCell>Cylinders</TableCell>
            <TableCell>Horsepower</TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
    {props.cars.map((car, idx) => (
        <TableRow key={car.id}>
            <TableCell component="th" scope="row">
                {car.id}
            </TableCell>
            <TableCell>{car["name"]}</TableCell>
            <TableCell>{car["mpg"]}</TableCell>
            <TableCell>{car["cylinders"]}</TableCell>
            <TableCell>{car["horsepower"]}</TableCell>
            <TableCell>
                <DeleteIcon
                    onClick={() => props.removeCar(idx)}
                    className="icon text-red" />
            </TableCell>
        </TableRow>
    ))}
    </TableBody>
</Table>
  )
}

export default listing