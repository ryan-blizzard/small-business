import React from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'


const listing = (props) => {
  console.log (props)
  return (
    <Table>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
    {props.business.map((shop, idx) => (
        <TableRow key={shop.id}>
            <TableCell>
                <Link to = {"/details/" + shop.id}> 
                {shop["Name"]}
                </Link>
            </TableCell>
            <TableCell>{shop["description"]}</TableCell>
            <TableCell>{shop["address"]}</TableCell>
            <TableCell>{shop["hours"]}</TableCell>
            <TableCell>
                <DeleteIcon
                    onClick={() => props.business(idx)}
                    className="icon text-red" />
            </TableCell>
        </TableRow>
    ))}
    </TableBody>
</Table>
  )
}

export default listing