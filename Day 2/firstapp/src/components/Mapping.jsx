import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var [names,setNames] = useState(
        // ["Jibin","Tiya","Ram","Jack"]
        [
            {"sname":"Jack","age":23},
            {"sname":"James","age":35},
            {"sname":"Sam","age":26},

        ]
    )
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'black', fontFamily:'cursive', fontSize:'50px'}} color='primary'>
                            Names
                        </TableCell>
                        <TableCell style={{color:'black', fontFamily:'cursive', fontSize:'50px'}} color='primary'>
                            Age
                        </TableCell>
                        <TableCell style={{color:'black', fontFamily:'cursive', fontSize:'50px'}} color='primary'>
                            Division
                        </TableCell>
                        <TableCell style={{color:'black', fontFamily:'cursive', fontSize:'50px'}} color='primary'>
                            Mark
                        </TableCell>

                    </TableRow>

                </TableHead>
                <TableBody>
                    {names.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>
                                     {val.sname}
                                </TableCell>
                                <TableCell>
                                    {val.age}
                                </TableCell>
                            </TableRow>
                        )

                    })}
                    {/* {names.map((val,i)=>{
                        return(
                        <TableRow>
                            <TableCell>
                                {val}
                            </TableCell>
                        </TableRow>
                        )

                    })} */}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping