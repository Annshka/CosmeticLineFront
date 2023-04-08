import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useSelector, useDispatch} from "react-redux";
import {FaTrashRestore} from "react-icons/fa";
import {deletePackage, getPackages} from "../features/package/packageSlice";
import {Spinner} from "../components/Spinner/Spinner";
import EditPackage from "./EditPackage";
import {useEffect} from "react";
import PackageDetails from "./PackageDetails";

export const PackageList = () => {
    const {packages, isError, isLoading} = useSelector((state) => state.packages);
    const dispatch = useDispatch();

    const emptyMessage = <p>You don't have any package yet</p>

    const rows = packages && packages.map(packaging => {
        return {
            id: packaging._id,
            pCode: packaging.code,
            pDiameter: packaging.diameter,
            pWidth: packaging.width,
            pType: packaging.type,
            pMaterial: packaging.material,
            pSurface: packaging.surface,
        }
    })

    const columns = [
        // { field: 'id', headerName: 'ID', width: 100 },
        {field: 'pCode', headerName: 'Code', width: 90, editable: true},
        {field: 'pDiameter', headerName: 'Diameter', width: 80, editable: true},
        {field: 'pWidth', headerName: 'Width', width: 50, editable: true},
        {field: 'pType', headerName: 'Type', width: 80, editable: true},
        {field: 'pMaterial', headerName: 'Material', width: 80, editable: true},
        {field: 'pSurface', headerName: 'Surface', width: 80, editable: true},

        {
            field: 'actions', headerName: 'Actions', sortable: false, width: 150,
            renderCell: (params) => {
                // console.log("editing table", params.row)


                return (
                    <div className="action-component">
                        <PackageDetails packId={params.row.id}/>
                        <EditPackage packId={params.row.id}/>
                        <button style={{border: "none", background: "transparent"}}
                                onClick={() => handleDelete(params.row.id)}>
                            <FaTrashRestore style={{color: "black", fontSize: "26px"}}/>
                        </button>
                    </div>
                )
            }
        }
    ];

    useEffect(() => {
        dispatch(getPackages())
        // console.log('loading packages')
    }, [])

    const handleDelete = (id) => {
        dispatch(deletePackage(id))
        // console.log('deleting')
    }

    return (
        <>
            {isLoading ? (
                <Spinner/>
            ) : isError ? (
                <p>An error occured {isError.data}.</p>
            ) : (
                <>
                    {packages.length === 0 ? (
                        emptyMessage
                    ) : (
                        <div style={{height: 600, width: '100%'}}>

                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                //checkboxSelection
                                disableRowSelectionOnClick
                                getRowId={(row) => row.id}
                            />
                        </div>)
                    }
                </>
            )}
        </>
    );
}

