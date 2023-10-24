namespace todolist_BE.Data.Entities
{
    public class Todo
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public bool Completed{ get; set; }
        
        public string CurrentDay { get; set; }

        public string Deadline { get; set; }

    }
}
