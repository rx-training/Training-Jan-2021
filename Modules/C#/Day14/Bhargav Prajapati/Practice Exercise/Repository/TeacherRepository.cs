using Practice_Exercise.IRepository;
using Practice_Exercise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Practice_Exercise.Repository
{
    public class TeacherRepository : ITeachers
    {
        protected readonly SchoolDatabaseContext context;

        public TeacherRepository(SchoolDatabaseContext ctx)
        {
            context = ctx;
        }

        public void DeleteRecord(int id)
        {
            var data = context.Teachers.SingleOrDefault(s=>s.TeacherId==id);
            context.Teachers.Remove(data);
            context.SaveChanges(); 
        }

        public IEnumerable<Models.Teacher> GetAll()
        {
            var data = context.Teachers;
            return data;
        }

        public Models.Teacher GetByID(int id)
        {
            var data = context.Teachers.SingleOrDefault(s=>s.TeacherId==id);
            return data;
        }

        public void InsertRecord(Models.Teacher ts)
        {
            context.Teachers.Add(ts);
            context.SaveChanges();
        }

        public void UpdateRecord(int id, Models.Teacher ts)
        {
            var data = context.Teachers.SingleOrDefault(s => s.TeacherId == id);
            data.TeacherName = ts.TeacherName;
            data.TeacherDepartment = ts.TeacherDepartment;
            data.TeacherExprience = ts.TeacherExprience;
            data.TeacherSalary = ts.TeacherSalary;

            context.SaveChanges();
        }
    }
}
