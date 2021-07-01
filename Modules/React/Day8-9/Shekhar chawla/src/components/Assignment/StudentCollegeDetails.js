
const StudentCollegeDetails = (props) => {
    var college = {
        name: props.college.name || null,
        address: props.college.address || null,
        logo: props.college.logo || null
    }

    return (
        <div className="row h-100">
            <div className={college.logo ? 'col col-9' : 'col col-12'}>
                {college.name && <p className="m-0 text-center lead">College: {college.name}</p>}
                {college.address && <p className="m-0">Address: {college.address}</p>}
            </div>
            <div className="col col-3">
                <img src={college.logo} className="rounded h-100 w-100" alt={college.name} ></img>
            </div>
        </div>

    )
}

export default StudentCollegeDetails