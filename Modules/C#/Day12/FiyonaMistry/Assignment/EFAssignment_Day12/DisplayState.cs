using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12
{
    public class DisplayState
    {
        public void State(IEnumerable<EntityEntry> entries)
        {
            foreach (var item in entries)
            {
                Console.WriteLine($"Entity : {item.Entity.GetType().Name}, State : {item.State.ToString()}");
            }
        }
    }
}
