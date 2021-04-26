using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using ValuesAPI.Models;

namespace ValuesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        public List<Book> books = new List<Book>() {
            new Book{Id=1, Author="JK Rowling", Title="Harry Potter"},
            new Book{Id=2, Author="Chetan Bhagat", Title="2 States"},
            new Book{Id=3, Author="Emma", Title="The Girls"}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetAllBooks()
        {
            return books;
        }

        [HttpGet("{name}")]
        public ActionResult<Book> GetBook(string name)
        {
            var book = books.SingleOrDefault(x => x.Title == name);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [HttpGet("{id}&{name}")]
        public ActionResult<Book> GetBook(int id, string name)
        {
            var book = books.SingleOrDefault(x => x.Id==id && x.Title == name);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        
    }
}
