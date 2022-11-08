export const  VisibilityControl= ({isCheked, setShowCompeted,cleanTasks })=>{

    const handleDelete = ()=>{
        if(window.confirm('Estas seguro?')){
            cleanTasks();
        }
    };

    return (  
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
           <div className="form-check form-switch">
            <input className="form-check" type="checkbox" checked={isCheked} onChange={e=>setShowCompeted(e.target.checked)} /> {" "}
            <label>Show Tasks Done</label>
           </div>
            <button onClick={handleDelete} className="btn btn-danger">
                Clear
            </button>
        </div> 
    )
} 
