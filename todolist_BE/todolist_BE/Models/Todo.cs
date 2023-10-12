namespace todolist_BE.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public bool? Completed { get; set; }

        public string? Currenday { get; set; }


        public string? Deadline { get; set; }

    }
}
