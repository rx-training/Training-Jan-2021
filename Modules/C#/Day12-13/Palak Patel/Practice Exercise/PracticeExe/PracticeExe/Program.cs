using System;
using PracticeExe.Modal;
using System.Linq; 

namespace PracticeExe
{
    class Program
    {
        static void Main(string[] args)
        {
            var db = new BloggingContext();
            Console.WriteLine("Enter a name for new blog");
            var name = Console.ReadLine();

            var blog = new Blog { Name = name };
            db.Blogs.Add(blog);
            db.SaveChanges();

            var query = from b in db.Blogs orderby b.Name select b;

            Console.WriteLine("All Blog in database");
            foreach (var item in query)
            {
                Console.WriteLine(item.Name);
            }

        }
    }
}
