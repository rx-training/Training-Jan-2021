function Form({ errors, handleBlur, handleChange, handleSubmit, touched, values }){

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <div className="form-group">

        <label htmlFor="first-name">First Name *
          <input type="text" className="form-control" id="first-name"
            placeholder="Enter First Name" name="firstName" required
            value={values.firstName} onChange={handleChange}
            onBlur={handleBlur} />
          {touched.firstName && errors.firstName}
        </label>

        <label htmlFor="last-name">Last Name *
          <input type="text" className="form-control" id="last-name"
            placeholder="Enter Last Name" name="lastName" required
            value={values.lastName} onChange={handleChange}
            onBlur={handleBlur} />
          {touched.lastName && errors.lastName}
        </label>

        <label htmlFor="email">Email *
          <input type="email" className="form-control" id="email"
            placeholder="Enter Email" name="email" required
            value={values.email} onChange={handleChange}
            onBlur={handleBlur} />
          {touched.email && errors.email}
        </label>

        <label htmlFor="age">Age *
          <input type="number" className="form-control" id="age"
            placeholder="Enter Age" name="age" required
            value={values.age} onChange={handleChange}
            onBlur={handleBlur} />
          {touched.age && errors.age}
        </label>

        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}
