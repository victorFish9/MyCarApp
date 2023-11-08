import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function AddCar(props) {
    //state
    const [car, setCar] = useState({ brand: '', model: '', color: '', fuel: '', year: '', price: '' })
    const [open, setOpen] = useState(false) //dialog open state

    //functions
    const handleClose = (event, reason) => { //close dialog window TODO: clear state fields when closing
        if (reason != 'backdropClick')
            setOpen(false)
    }
    const handleInputChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    const handleSave = () => {
        props.saveCar(car) //validate data to CarList addCar()
        //console.log(props.addCar())
        setOpen(false)
    }


    //return
    //addbutton
    //dialog (add form)
    return (
        <>
            <Button onClick={() => setOpen(true)} >New car</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New car</DialogTitle>
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
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}