using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class LanguageRepository : GenericRepository<Language>, ILanguage
    {
        public LanguageRepository(BookMyShowDBContext context) : base(context)
        {

        }

        public IEnumerable GetAllLanguages()
        {
            var languages = context.Languages;

            var l1 = from x in languages
                     select new Language
                     {
                         Language1 = x.Language1,
                         LanguageId = x.LanguageId,
                         MovieLanguages = context.MovieLanguages.Where(m => m.LanguageId == x.LanguageId).ToArray(),
                         EventLanguages = context.EventLanguages.Where(m => m.LanguageId == x.LanguageId).ToArray()
                     };

            return l1;
        }

        // Add Language
        public override void Create(Language lang)
        {
            context.Languages.Add(new Language()
            {
                Language1 = lang.Language1
            });

            context.SaveChanges();
        }

        // Update Language
        public override void Update(int id, Language entity)
        {
            var existingLanguage = context.Languages.Where(s => s.LanguageId == id)
                                                    .SingleOrDefault<Language>();

            existingLanguage.Language1 = entity.Language1;

            context.SaveChanges();

        }

        // Delete Language
        public override void Delete(int id)
        {
            var language = context.Languages
                .Where(s => s.LanguageId == id)
                .SingleOrDefault();

            context.Languages.Remove(language);
            context.SaveChanges();
        }

    }
}
