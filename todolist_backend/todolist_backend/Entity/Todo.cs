using System;
using System.Collections.Generic;

namespace todolistbackend.Entity;

public partial class Todo
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public bool? Completed { get; set; }

    public string? Currentday { get; set; }

    public string? Deadline { get; set; }
}
