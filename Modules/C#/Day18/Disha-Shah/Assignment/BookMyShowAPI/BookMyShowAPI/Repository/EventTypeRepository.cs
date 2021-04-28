using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class EventTypeRepository : GenericRepository<EventType>, IEventType
    {
        public EventTypeRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add event type
        public override void Create(EventType eventType)
        {
            context.EventTypes.Add(new EventType()
            {
                EventType1=eventType.EventType1
            });

            context.SaveChanges();
        }

        // Update event type
        public override void Update(int id, EventType entity)
        {
            var existingEventType = context.EventTypes.Where(s => s.EventTypeId == id)
                                                    .SingleOrDefault<EventType>();

            existingEventType.EventType1 = entity.EventType1;

            context.SaveChanges();

        }

        // Delete seat
        public override void Delete(int id)
        {
            var eventType = context.EventTypes
                .Where(s => s.EventTypeId == id)
                .SingleOrDefault();

            context.EventTypes.Remove(eventType);
            context.SaveChanges();
        }

    }
}
