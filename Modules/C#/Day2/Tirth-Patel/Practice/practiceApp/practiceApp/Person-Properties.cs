using System;

public class Person
{
    public string FirstName
    {
        get => firstName;
        set => firstName = (!string.IsNullOrWhiteSpace(value)) ? value : throw new ArgumentException("First name must not be blank");
    }
    private string firstName;
    // remaining implementation removed from listing
}
/*private string firstName;
//USING A CONSTRUCTOR TO RESTRICTING MODIFICATION
public Person (string firstName) => this.FirstName = firstName;
public string FirstName { get; }*/

    public class PersonEvaluated
    {
        private string firstName;
        public string FirstName
        {
            get => firstName;
            set
            {
                firstName = value;
                fullName = null;
            }
        }

        private string lastName;
        public string LastName
        {
            get => lastName;
            set
            {
                lastName = value;
                fullName = null;
            }
        }

        private string fullName;
        public string FullName
        {
            get
            {
                if (fullName == null)
                    fullName = $"{FirstName} {LastName}";
                return fullName;
            }
        }
    }


