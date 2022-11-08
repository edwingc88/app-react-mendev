export const Container = ({children})=>{

    return (
        <div className="container vh-100 ">
            <div className="col-md-4 offset-md-4 ">
             {children}
            </div>
        </div>
    )

}