using Practice_Exercise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice_Exercise.IRepository
{
    public interface ITeachers
    {
        IEnumerable<Teacher> GetAll();
        Teacher GetByID(int id);
        public void UpdateRecord(int id,Teacher ts);
        public void InsertRecord(Teacher ts);
        public void DeleteRecord(int id);
    }
}
