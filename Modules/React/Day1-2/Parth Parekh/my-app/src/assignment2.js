//2. Create a StudentIDCard Component which will include another component image,
//Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,
// College Address
// and College Logo)

const Student = () => {
    return (
        <div>
            <p>ID : 1</p>
            <p>Name : Parth</p>
            <p>Date Of Birth : 31/8/2000</p>
        </div>
    );
};

const College = () => {
    return (
        <div>
            <p>College Name : Lj</p>
            <p>College Address : Sarkhej </p>
        </div>
    );
};
const Image = () => {
    return (
        <div>
            <img
                src="https://randomuser.me/api/portraits/thumb/men/59.jpg"
                alt="user"
            />
        </div>
    );
};

const StudentIDCard1 = () => {
    return (
        <div className="container mb-2">
            <div className="card text-center bg-primary m-2 text-white">
                <Image />
                <Student />
                <College />
            </div>
        </div>
    );
};
export default StudentIDCard1;
