import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FaEdit} from "react-icons/fa";
import {useState} from "react";
import {updatePackage} from "../features/package/packageSlice";
import {useDispatch, useSelector} from "react-redux";

export default function EditPackage({packId}) {
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();
    const {packages} = useSelector((state) => state.packages);

    const [type, setType] = useState("");
    const [material, setMaterial] = useState("");
    const [surface, setSurface] = useState("");
    const [code, setCode] = useState("");
    const [diameter, setDiameter] = useState("");
    const [width, setWidth] = useState("");

    const [currentPack, setCurrentPack] = useState({});

    const handleClickOpen = () => {
        setOpen(true);

        let selectedPack = packages.filter((packaging) => packaging._id === packId);
        selectedPack = selectedPack[0];

        setCurrentPack(selectedPack);
        setType(selectedPack.type);
        setMaterial(selectedPack.material);
        setSurface(selectedPack.surface);
        setCode(selectedPack.code);
        setDiameter(selectedPack.diameter);
        setWidth(selectedPack.width);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (e) => {
        e.preventDefault()

            dispatch(updatePackage({
                packageData: {
                     // ...currentPack,
                    _id: packId,
                    code: code,
                    diameter: diameter,
                    width: width,
                    type: type,
                    material: material,
                    surface: surface,
                }
            }))
    };


    return (
        <div>
            <button style={{border: "none", background: "transparent"}} onClick={handleClickOpen}>
                <FaEdit style={{color: "black", fontSize: "26px"}}/>
            </button>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
                <DialogTitle><h3>Edit Package</h3></DialogTitle>
                <DialogContent>
                    <div className="edit-form-wrapper">
                        <section className="edit-form">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="code"
                                        name="code"
                                        value={code}
                                        placeholder="Packaging code"
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <h5>type</h5>
                                    <select onChange={(e) => setType(e.target.value)} value={type} required>
                                        <option value="">Select packaging type</option>
                                        <option value="jar">jar</option>
                                        <option value="bottle">bottle</option>
                                        <option value="pot">pot</option>
                                        <option value="tube">tube</option>
                                        <option value="pen">pen</option>
                                        <option value="liquidDispensing">liquid dispensing</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <h5>diameter</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="diameter"
                                        value={diameter}
                                        placeholder="Diameter [mm]"
                                        onChange={(e) => setDiameter(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <h5>width</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="width"
                                        value={width}
                                        placeholder="Width [mm]"
                                        onChange={(e) => setWidth(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <h5>material</h5>
                                    <select onChange={(e) => setMaterial(e.target.value)} value={material} required>
                                        <option value="">Select packaging material</option>
                                        <option value="PP">PP</option>
                                        <option value="PP_airless">PP airless</option>
                                        <option value="pet">PET</option>
                                        <option value="sans">SANS</option>
                                        <option value="acrylic">acrylic</option>
                                        <option value="acrylic_airless">acrylic airless</option>
                                        <option value="glass">glass</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <h5>surface</h5>
                                    <select onChange={(e) => setSurface(e.target.value)} value={surface} required>
                                        <option value="">Select packaging surface</option>
                                        <option value="smooth">smooth</option>
                                        <option value="rough">rough</option>
                                        <option value="grooved">grooved</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block" type="submit">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}