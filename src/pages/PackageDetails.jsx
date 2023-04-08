import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FaRegEye} from "react-icons/fa";
import {useState} from "react";
import {useSelector} from "react-redux";
import EditPackage from "./EditPackage";

export default function PackageDetails({packId}) {
    const [open, setOpen] = React.useState(false);

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

    return (
        <div>
            <button style={{border: "none", background: "transparent"}} onClick={handleClickOpen}>
                <FaRegEye style={{color: "black", fontSize: "26px"}}/>
            </button>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
                <DialogTitle><h3>Package details</h3></DialogTitle>
                <DialogContent>
                    <div className="item-details">
                        <div className="item-detail">
                            <p><span>Code: </span>{code}</p>
                        </div>

                        <div className="item-detail">
                            <p><span>Type:</span>{type}</p>
                        </div>
                        <div className="item-detail">
                            <p><span>Material:</span>{material}</p>
                        </div>
                        <div className="item-detail">
                            <p><span>Diameter:</span>{diameter}</p>
                        </div>
                        <div className="item-detail">
                            <p><span>Width:</span>{width}</p>
                        </div>
                        <div className="item-detail">
                            <p><span>Surface:</span>{surface}</p>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <EditPackage packId={packId}/>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}