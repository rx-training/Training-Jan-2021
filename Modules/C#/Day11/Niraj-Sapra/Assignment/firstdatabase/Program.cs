using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace firstdatabase
{
    class Student
    {
        public int myid { get; set; }
        public string sname { get; set; }
        public int stotalfees { get; set; }
        public int sremaining { get; set; }
        public override string ToString()
        {
            return myid +" "+ sname + " " + stotalfees + " " + sremaining; 
        }
    }
    class Dbconnection
    {
        SqlCommand listfor = null;
        SqlConnection c = null;
        public Dbconnection()
        {
            c = new SqlConnection("Data Source=DESKTOP-FPEESG3;Initial Catalog=Day2SQL;Integrated Security=True");
        }
        public int insertstudent(Student student)
        {
            SqlCommand sqlcommand = new SqlCommand("insert into Student values(@myid,@sname,@stotalfees,@sremaining)", c);
            sqlcommand.Parameters.AddWithValue("@myid", student.myid);
            sqlcommand.Parameters.AddWithValue("@myid", student.sname);
            sqlcommand.Parameters.AddWithValue("@myid", student.sremaining);
            sqlcommand.Parameters.AddWithValue("@myid", student.stotalfees);
            c.Open();
            int rows = sqlcommand.ExecuteNonQuery();
            return rows;

        }
        public List<Student> GetAll()
        {
            List<Student> stlist = new List<Student>();
            listfor = new SqlCommand("Select * from Student", c);
            c.Open();
           
            var reader = listfor.ExecuteReader();
            while (reader.Read())
            {
                Student s = new Student() { myid = Convert.ToInt32(reader[0].ToString()), sname = reader[1].ToString(), stotalfees = Convert.ToInt32(reader[2].ToString()), sremaining =Convert.ToInt32(reader[3].ToString()) };
                stlist.Add(s);
            }
            reader.Close();
            c.Close();
            return stlist;
        }
    }
    class Program
    {
        
        static void Main(string[] args)
        {
            Student student = new Student();
            Dbconnection db = new Dbconnection();
            var list = db.GetAll();
            foreach (var item in list)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("Enter Name:");
            student.myid =Convert.ToInt32(Console.ReadLine());
            student.sname = Console.ReadLine();
            student.sremaining = Convert.ToInt32(Console.ReadLine());
            student.stotalfees = Convert.ToInt32(Console.ReadLine());
            
            int rows = db.insertstudent(student);
            if (rows > 0)
            {
                Console.WriteLine("Record interted Successfully");
            }
            else
            {
                Console.WriteLine("get errror");

            }
            Console.ReadLine();

        }
    }
}
