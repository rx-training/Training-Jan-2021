using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public enum PublicationType { Misc, Book, Magazine, Article };
    public abstract class Publication
    {
        private bool published = false;
        private string publicationName = "ABCD";
        public string Name { get; set; }
        public int Pages { get; set; }
        public bool IsPublished
        {
            get
            {
                return published;
            }
            set
            {
                published = value;
            }
        }

        public Publication(string name, int pages, bool isPublished)
        {
            this.Name = name;
            this.IsPublished = isPublished;
            this.Pages = pages;
        }

        public virtual string GetPublicationName()
        {
            return publicationName;
        }
        public abstract string GetNameOfAuthor();
        public abstract int GetPages();
    }
}
