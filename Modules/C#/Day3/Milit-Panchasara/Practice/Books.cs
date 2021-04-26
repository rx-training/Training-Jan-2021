using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class Books : Publication
    {
        public string Author { get; set; }
        public int Chapters { get; set; }
        //Constructor with chaining and extra parameters
        public Books(string name, int pages, bool isPublished, string author, int chapters) : this (name, pages, isPublished)
        {
            this.Author = author;
            this.Chapters = chapters;
        }

        public Books(string name, int pages, bool isPublished) : base(name, pages, isPublished) // Calls base class Contructor
        {
            this.Name = name;
            this.IsPublished = isPublished;
            this.Pages = pages;
        }

        public override string GetPublicationName()
        {
            return base.GetPublicationName();
        }


        public override string GetNameOfAuthor()
        {
            return this.Author;
        }

        public sealed override int GetPages() // sealed function won't be overridden in further child classes
        {
            return this.Pages;
        }

        public int GetBookChapters()
        {
            return this.Chapters;
        }
    }
}
