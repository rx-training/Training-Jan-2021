using System;

namespace PracticeExe2
{
    

    public class workItem
    {
        private static int currentID;

        //Properties
        protected int ID { get; set; }
        protected string title { get; set; }
        protected string description { get; set; }
        protected TimeSpan jobLength { get; set; }

        //Construstors
        public workItem()
        {
            ID = 0;
            title = "Default Title";
            description = "Default Description";
            jobLength = new TimeSpan();
        }

        public workItem(string title, string desc, TimeSpan len)
        {
            this.ID = getNextID();
            this.title = title;
            this.description = desc;
            this.jobLength = len;
        }

        //static constructor to initialize static variable currentID
        static workItem() => currentID = 0;

        //Methods
        protected int getNextID() => ++currentID;

        public void Update(string title, TimeSpan len)
        {
            this.title = title;
            this.jobLength = len;
        }

        //overriding method of object(base) class
        public override string ToString() =>  $"{this.ID} - {this.title}";
        
    }

    public class ChangeRequest : workItem
    {
        //Properties
        protected int originalItenID { get; set; }

        //Constructor
        public ChangeRequest() { }

        public ChangeRequest(string title, string desc, TimeSpan len, int OID)
        {
            this.ID = getNextID();
            this.title = title;
            this.description = desc;
            this.jobLength = len;
            this.originalItenID = OID;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //object of workItem class
            workItem item = new workItem("Fix Bugs", "Fix all bugs in my code branch", new TimeSpan(3, 4, 0, 0));

            //object of ChangeRequest class
            ChangeRequest change = new ChangeRequest("Change Base Class Design", "Add members to the class", new TimeSpan(4, 0, 0), 1);
            Console.WriteLine(item.ToString());

            //accesing the method of base class using object of derrived class
            change.Update("Change the Design of the Base Class", new TimeSpan(4, 0, 0));
            Console.WriteLine(change.ToString());
        }
    }
}
