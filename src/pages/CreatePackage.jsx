import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createPackage} from "../features/package/packageSlice";

export const CreatePackage = () => {

    const [type, setType] = useState("");
    const [material, setMaterial] = useState("");
    const [surface, setSurface] = useState("");

    const [packageData, setPackageData] = useState(
        {
            code: '',
            diameter: '',
            width: '',
        });

    const {code, diameter, width} = packageData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChange = (e) => {
        setPackageData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createPackage({
            code,
            diameter,
            width,
            type,
            material,
            surface,
        }))
        navigate("/packages")
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="heading">
                    <h3>Create Package</h3>
                </div>
                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="code"
                                name="code"
                                value={code}
                                placeholder="Packaging code"
                                onChange={onChange}/>
                        </div>
                        <div className='form-group'>
                            <select onChange={(e) => setType(e.target.value)} required>
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
                            <input
                                type="text"
                                className="form-control"
                                name="diameter"
                                value={diameter}
                                placeholder="Diameter [mm]"
                                onChange={onChange}/>
                        </div>
                        <div className='form-group'>
                            <input
                                type="text"
                                className="form-control"
                                name="width"
                                value={width}
                                placeholder="Width [mm]"
                                onChange={onChange}/>
                        </div>
                        <div className='form-group'>
                            <select onChange={(e) => setMaterial(e.target.value)} required>
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
                            <select onChange={(e) => setSurface(e.target.value)} required>
                                <option value="">Select packaging surface</option>
                                <option value="smooth">smooth</option>
                                <option value="rough">rough</option>
                                <option value="grooved">grooved</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block" type="submit">
                                Add Packaging
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}