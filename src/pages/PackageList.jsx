import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {FaEdit, FaRegEye, FaTrashRestore} from "react-icons/fa";
import {deletePackage, getPackage} from "../features/package/packageSlice";
import {Spinner} from "../components/Spinner/Spinner";



export const PackageList = (packaging) => {
    const {packages, isError, isLoading, isSuccess} = useSelector((state) => state.packages);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rows = packages && packages.map(packaging => {
        return {
            id: packaging._id,
            pCode: packaging.code,
            pDiameter: packaging.diameter,
            pWidth: packaging.width,
            pType: packaging.type,
            pMaterial: packaging.material,
            pSurface: packaging.surface,
            //imageUrl: packaging.image.url,
        }
    })


    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'pCode', headerName: 'Code', width: 80, editable: true },
        { field: 'pDiameter', headerName: 'Diameter', width: 80, editable: true },
        { field: 'pWidth', headerName: 'Width', width: 50, editable: true},
        { field: 'pType', headerName: 'Type', width: 80, editable: true},
        { field: 'pMaterial', headerName: 'Material', width: 80, editable: true},
        { field: 'pSurface', headerName: 'Surface', width: 80, editable: true},
        // { field: 'imageUrl', headerName: 'Image', width: 80,
        //     renderCell: (params) => {
        //         return (
        //             <img src={params.row.imageUrl} alt="" className='image_container'/>
        //         )
        //     }
        // },

        { field: 'actions', headerName: 'Actions', sortable: false, width: 150,
            renderCell: (params) => {
                console.log("editing table", params.row)


                return (

                    <div className="action-component">
                        <button style={{border: "none", background: "transparent"}} onClick={() => handleView(params.row.id)}>
                            <FaRegEye style={{color: "black", fontSize: "26px"}} />
                        </button>
                        <button style={{border: "none", background: "transparent"}} onClick={() => handleEdit(params.row.id)}>
                            <FaEdit style={{color: "black", fontSize: "26px"}} />
                        </button>
                        <button style={{border: "none", background: "transparent"}} onClick={() => handleDelete(params.row.id)}>
                            <FaTrashRestore style={{color: "black", fontSize: "26px"}} />
                        </button>
                    </div>
                )
            }
        }
    ];

    const handleView = (id) => {
        dispatch(getPackage(id))
    }

    const handleEdit = (id) => {

    }
    const handleDelete = (id) => {
        dispatch(deletePackage(id))
        console.log('deleting')
    }

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : isError ? (
                <p>An error occured {isError.data}.</p>
            ) : (
                <>
                    <div style={{ height: 600, width: '100%' }}>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            getRowId={(row) => row.id}

                        />
                    </div>
                </>
            )}
        </>
    );


}

