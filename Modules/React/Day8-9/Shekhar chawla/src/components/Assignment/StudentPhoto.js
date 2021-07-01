const StudentPhoto = (props) => {

    return <img
        src={props.image}
        class="card-img-top"
        alt="studentImg"
        className="h-50"
    ></img>
}

export default StudentPhoto