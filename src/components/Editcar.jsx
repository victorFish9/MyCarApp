import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function EditCar(props) {
    //state
    const [car, setCar] = useState({ brand: '', model: '', color: '', fuel: '', year: '', price: '' })
    const [open, setOpen] = useState(false) //dialog open state

    //functions
    const handleClose = (event, reason) => { //close dialog window TODO: clear state fields when closing
        if (reason != 'backdropClick')
            setOpen(false)
    }

    const handleOpen = () => {
        console.log(props.car)
        setCar({
            brand: props.car.brand, model: props.car.model, color: props.car.color,
            fuel: props.car.fuel, year: props.car.year, price: props.car.price
        })
        setOpen(true)
    }

    const handleInputChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    const handleEdit = () => {
        props.updateCar(car, props.car._links.car.href) //validate data to CarList addCar()
        //console.log(props.addCar())
        setOpen(false)
    }


    //return
    //addbutton
    //dialog (add form)
    return (
        <>
            <Button onClick={handleOpen} >Edit</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <TextField
                        label='Brand'
                        value={car.brand}
                        onChange={handleInputChange}
                        name="brand"
                    >
                    </TextField>
                    <TextField
                        label='Model'
                        value={car.model}
                        onChange={handleInputChange}
                        name="model"
                    >

                    </TextField>
                    <TextField
                        label='Color'
                        value={car.color}
                        onChange={handleInputChange}
                        name="color"
                    >

                    </TextField>
                    <TextField
                        label='Fuel'
                        value={car.fuel}
                        onChange={handleInputChange}
                        name="fuel"
                    >

                    </TextField>
                    <TextField
                        label='Year'
                        value={car.year}
                        onChange={handleInputChange}
                        name="year"
                    >

                    </TextField>
                    <TextField
                        label='Price'
                        value={car.price}
                        onChange={handleInputChange}
                        name="price"
                    >

                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Close</Button>
                    <Button onClick={handleEdit}>Edit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}