const StudentPhoto = (props) => {

    return <img
        src={props.image}
        class="card-img-top"
        alt="studentImg"
        className="rounded"
        height="40%"
    ></img>
}

export default StudentPhoto