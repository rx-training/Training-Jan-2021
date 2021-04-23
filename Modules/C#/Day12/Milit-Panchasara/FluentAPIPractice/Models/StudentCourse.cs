namespace FluentAPIPractice.Models
{
    public class StudentCourse
    {
        public int SId { get; set; }
        public Student Student { get; set; }

        public int CId { get; set; }
        public Course Course { get; set; }
    }
}