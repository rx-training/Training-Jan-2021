using System;

namespace Day4_Practice
{
    public class Person
    {
        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public override int GetHashCode()
        {
            return this.Name.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            // This implementation handles a null obj argument. Usage error(logical error)
            Person p = obj as Person;
            if (p == null)
                return false;
            else
                return this.Name.Equals(p.Name);
        }
    }

    class Program
    {

        static void Main(string[] args)
        {
                Person p1 = new Person();
                p1.Name = "John";
                Person p2 = null;

                Console.WriteLine("p1 = p2: {0}", p1.Equals(p2));
         
        // The example displays the following output:
        //        p1 = p2: False
        }
    }

    // Exceptions : 
    // Argument :  non-null argument that is passed to a method is invalid.
    // ArgumentNull : An argument that is passed to a method is null.
    // ArgumentOutOfRange
    // DirectoryNotFound
    // DivideByZero
    // DriveNotFound
    // FileNotFound
    // Format
    // IndexOutOfRange
    // InvalidOperation : A method call is invalid in an object's current state.
    // KeyNotFound
    // NotImplemented
    // NotSupported
    // ObjectDisposed : An operation is performed on an object that has been disposed.
    // Overflow
    // PathTooLong
    // PlatformNotSupported
    // Rank : An array with the wrong number of dimensions is passed to a method.
    // TimeOut
    // UriFormat : An invalid Uniform Resource Identifier (URI) is used.

    // Custom Exception Constructor : 
    // Exception()
    // Exception(String)
    // Exception(String, Exception)
    // Exception(SerializationInfo, StreamingContext)

}
